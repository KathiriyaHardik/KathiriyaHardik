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
const ENTRIES = 8;
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

const rows = commits
  .filter((c) => !isMerge(c.subject))
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, ENTRIES)
  .map(
    (c) =>
      `| \`${c.date.slice(0, 10)}\` | [\`${c.repo}\`](https://github.com/${USER}/${c.repo}) | ${c.subject} |`,
  );

if (!rows.length) {
  console.error("No commits resolved — leaving the existing log in place.");
  process.exit(0);
}

const table = [
  "",
  "| Date | Repo | What shipped |",
  "|:--|:--|:--|",
  ...rows,
  "",
  `<sub>Last ${rows.length} commits, newest first — regenerated daily by GitHub Actions, never hand-written.</sub>`,
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
