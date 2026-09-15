/**
 * Generates assets/stats.svg — the activity panel — from the public REST API.
 *
 * This replaces third-party stat cards that were both off-brand and wrong: at
 * time of writing they reported 14 contributions and 10 commits where the API
 * reported 26 and 19. On a profile whose whole argument is that nothing is
 * claimed before it ships, a widget that quietly undercounts is worse than no
 * widget at all.
 *
 * Deliberately REST, not GraphQL. `contributionsCollection` returns different
 * totals depending on who is asking -- the Actions GITHUB_TOKEN saw 19 where a
 * user token saw 26 -- so building the card on it reintroduced exactly the
 * undercount it was meant to fix. Every number here is public, identical for
 * any caller, and checkable by hand against the repo.
 *
 * Merge commits are excluded: they are plumbing, not work.
 *
 * Numbers are stamped with the date they were generated, so if the workflow
 * ever stops running the card reads as stale rather than as wrong.
 *
 * Run: GITHUB_TOKEN=... node scripts/stats-card.mjs
 */

import { writeFileSync } from "node:fs";

const USER = process.env.PROFILE_USER || "KathiriyaHardik";
const TOKEN = process.env.GITHUB_TOKEN;   // optional: raises the rate limit

const BG = "#08080a", PANEL = "#0c0c10", BORDER = "#1e1e24", BORDER2 = "#2a2a32";
const ACCENT = "#2d5ef5", ACCENT2 = "#5b82ff", TEXT = "#ffffff", MUTED = "#8d919a", DIM = "#3a3d45";
const SANS = "'Segoe UI',Inter,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif";
const MONO = "ui-monospace,'SFMono-Regular',Menlo,Consolas,'Liberation Mono',monospace";

const api = async (path) => {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": `${USER}-stats`,
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} on ${path}`);
  return res.json();
};

const profile = await api(`/users/${USER}`);
const repos = (await api(`/users/${USER}/repos?per_page=100&type=owner`))
  .filter((r) => !r.fork && !r.archived);

const bytes = {};
const commitDays = new Set();
let commits = 0;

for (const repo of repos) {
  const langs = await api(`/repos/${repo.full_name}/languages`);
  for (const [name, size] of Object.entries(langs))
    bytes[name] = (bytes[name] || 0) + size;

  // Page through so the count stays right as the history grows.
  for (let page = 1; page <= 10; page += 1) {
    const list = await api(
      `/repos/${repo.full_name}/commits?author=${USER}&per_page=100&page=${page}`,
    );
    for (const c of list) {
      if (c.parents && c.parents.length > 1) continue;   // merge commit
      commits += 1;
      commitDays.add(c.commit.author.date.slice(0, 10));
    }
    if (list.length < 100) break;
  }
}

const prs = await api(`/search/issues?q=author:${USER}+type:pr&per_page=1`);

const total = Object.values(bytes).reduce((a, b) => a + b, 0);
const [topLang, topBytes] = Object.entries(bytes).sort((a, b) => b[1] - a[1])[0] || ["—", 0];
const topPct = total ? Math.round((topBytes / total) * 1000) / 10 : 0;

const tiles = [
  ["COMMITS", String(commits)],
  ["PULL REQUESTS", String(prs.total_count)],
  ["ACTIVE DAYS", String(commitDays.size)],
  ["PUBLIC REPOS", String(profile.public_repos)],
  [topLang.toUpperCase(), `${topPct}%`],
];

const W = 1000, H = 208, R = 16;
const asOf = new Date().toISOString().slice(0, 10);
const tw = 164, gap = 17, x0 = 56;   // 5*164 + 4*17 = 888, matching the 56px side margins

const tileSvg = tiles.map(([label, value], i) => {
  const x = x0 + i * (tw + gap);

  return `
    <rect x="${x}" y="88" width="${tw}" height="84" rx="10" fill="${PANEL}" stroke="${BORDER}"/>
    <rect x="${x}" y="88" width="${tw}" height="2" rx="1" fill="${i === 0 ? ACCENT : BORDER2}" ${i === 0 ? 'opacity="0.8"' : ""}/>
    <text x="${x + 18}" y="134" font-family="${SANS}" font-size="30" font-weight="700" fill="${TEXT}" letter-spacing="-0.8">${value}</text>
    <text x="${x + 18}" y="156" font-family="${MONO}" font-size="9.5" font-weight="600" fill="${MUTED}" letter-spacing="1.5">${label}</text>
`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="GitHub activity: ${tiles.map(([l, v]) => `${v} ${l.toLowerCase()}`).join(", ")}, as of ${asOf}">
  <defs>
    <pattern id="gs" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
    <clipPath id="cs"><rect width="${W}" height="${H}" rx="${R}"/></clipPath>
  </defs>
  <g clip-path="url(#cs)">
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <rect width="${W}" height="${H}" fill="url(#gs)"/>
    <circle cx="62" cy="46" r="4.5" fill="${ACCENT}">
      <animate attributeName="opacity" values="1;0.25;1" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <text x="80" y="51" font-family="${MONO}" font-size="12.5" font-weight="600" fill="${ACCENT}" letter-spacing="3.6">SYSTEM ACTIVITY</text>
    <rect x="272" y="45.5" width="${W - 272 - 236}" height="1" fill="${BORDER}"/>
    <text x="${W - 56}" y="50" text-anchor="end" font-family="${MONO}" font-size="10.5" fill="${DIM}" letter-spacing="1.4">PUBLIC REPOSITORIES &#183; AS OF ${asOf}</text>
    ${tileSvg}
  </g>
  <rect x="0.75" y="0.75" width="${W - 1.5}" height="${H - 1.5}" rx="${R}" fill="none" stroke="${BORDER}" stroke-width="1.5"/>
</svg>`;

writeFileSync("assets/stats.svg", svg);
console.log(`stats.svg written — ${tiles.map(([l, v]) => `${l}:${v}`).join("  ")}  lang:${topLang}`);
