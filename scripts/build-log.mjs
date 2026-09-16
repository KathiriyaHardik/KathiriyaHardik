/**
 * Regenerates the BUILD LOG block in README.md from real commit history.
 *
 * A hand-written build log is stale the day after it is written, which would
 * undercut the one thing this profile is trying to be: accurate. So the log is
 * derived from the GitHub API instead, and rewritten in place between the two
 * marker comments. Everything outside the markers is left untouched.
 *
 * Run: GITHUB_TOKEN=... node scripts/build-log.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

const USER = process.env.PROFILE_USER || "KathiriyaHardik";
const TOKEN = process.env.GITHUB_TOKEN;
const DAYS = 6;            // days of work shown
const PER_DAY = 4;         // commits listed before a day is summarised,
                           // kept low so no single row towers over the rest
const START = "<!-- BUILD-LOG:START -->";
const END = "<!-- BUILD-LOG:END -->";

const api = async (path) => {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": `${USER}-build-log`,
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} on ${path}`);
  return res.json();
};

/** Merge commits are plumbing, not work — they say nothing about what shipped. */
const isMerge = (message) => /^Merge (pull request|remote-tracking|branch)/.test(message);

const repos = await api(`/users/${USER}/repos?sort=pushed&per_page=20&type=owner`);

const commits = (
  await Promise.all(
    repos
      .filter((r) => !r.fork && !r.archived)
      .map(async (repo) => {
        try {
          const list = await api(
            `/repos/${repo.full_name}/commits?author=${USER}&per_page=15`,
          );
          return list.map((c) => ({
            repo: repo.name,
            date: c.commit.author.date,
            subject: c.commit.message.split("\n")[0].trim(),
          }));
        } catch {
          // An empty or unreadable repo must not take the whole log down.
          return [];
        }
      }),
  )
).flat();

/**
 * Grouped by day rather than listed commit by commit.
 *
 * A flat list puts whatever happened to be committed last at the top, so a
 * one-line fix can end up as the first thing anyone reads. Grouping makes the
 * date and the day's volume the headline, and demotes individual subjects to
 * supporting detail — which is the honest shape of the information anyway:
 * what matters is that a day of work happened, not the order within it.
 */
const byDay = new Map();
for (const c of commits.filter((c) => !isMerge(c.subject))) {
  const day = c.date.slice(0, 10);
  if (!byDay.has(day)) byDay.set(day, []);
  byDay.get(day).push(c);
}

/** A subject containing a pipe would break out of the table cell. */
const cell = (text) => text.replace(/\|/g, "\\|");

const days = [...byDay.entries()]
  .sort((a, b) => (a[0] < b[0] ? 1 : -1))
  .slice(0, DAYS);

const rows = days.map(([day, list]) => {
  list.sort((a, b) => new Date(b.date) - new Date(a.date));

  const repos = [...new Set(list.map((c) => c.repo))];
  const repoLinks = repos
    .map((r) => `[\`${r}\`](https://github.com/${USER}/${r})`)
    .join(" ");

  const shown = list.slice(0, PER_DAY).map((c) => cell(c.subject));
  const extra = list.length - shown.length;
  if (extra > 0) shown.push(`<sub>+ ${extra} more</sub>`);

  return `| \`${day}\`<br/><sub>${repoLinks}</sub> | ${shown.join("<br/>")} | \`${list.length}\` |`;
});

if (!rows.length) {
  console.error("No commits resolved — leaving the existing log in place.");
  process.exit(0);
}

const totalCommits = days.reduce((n, [, list]) => n + list.length, 0);

const table = [
  "",
  "| Day | What shipped | Commits |",
  "|:--|:--|--:|",
  ...rows,
  "",
  `<sub>Last ${days.length} days of work &#183; ${totalCommits} commits &#183; merges excluded &#183; regenerated daily by GitHub Actions, never hand-written.</sub>`,
  "",
].join("\n");

const readme = readFileSync("README.md", "utf8");
const a = readme.indexOf(START);
const b = readme.indexOf(END);
if (a === -1 || b === -1) throw new Error("BUILD-LOG markers not found in README.md");

const next = readme.slice(0, a + START.length) + "\n" + table + readme.slice(b);
if (next === readme) {
  console.log("Build log already current.");
} else {
  writeFileSync("README.md", next);
  console.log(`Build log updated with ${rows.length} entries.`);
}
