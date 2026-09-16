<div align="center">
  <img src="assets/hero.svg" alt="Hardik Kathiriya — Founder @ ForgeGTM · Future AI Engineer" width="100%" />
</div>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Segoe+UI&weight=600&size=19&pause=1400&color=2D5EF5&center=true&vCenter=true&width=620&height=42&lines=Founder+%40+ForgeGTM;GTM+%C3%97+Automation+%C3%97+AI;Building+systems+today;Engineering+intelligence+for+tomorrow" alt="Founder @ ForgeGTM — GTM × Automation × AI" />

<br/>

[`IDENTITY`](#identity) · [`MISSION`](#mission) · [`FORGEGTM`](#forgegtm) · [`AI ENGINEERING`](#ai) · [`SYSTEMS`](#systems) · [`PROJECTS`](#projects) · [`BUILD LOG`](#log) · [`ACTIVITY`](#activity) · [`CONNECT`](#connect)

</div>

<br/>

<div align="center">
  <img src="assets/now.svg" alt="Currently building — ForgeGTM active, AI engineering in progress, next build planned" width="100%" />
</div>

<br/>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="identity"><img src="assets/label-01.svg" height="30" alt="01 — IDENTITY" /></h2>

I'm building **ForgeGTM**, a B2B go-to-market and outbound agency — and I write the software that runs it.

Most outbound doesn't fail for lack of effort. It fails because the system behind it is broken: lists bought instead of researched, messaging written for nobody in particular, deliverability quietly failing while the dashboard looks fine. Those are **engineering problems as much as creative ones**, which is exactly why I ended up on both sides of the work.

<table>
<tr>
<td width="50%" valign="top">

**`→` &nbsp;The motion**

ICP definition · buying-signal research · email infrastructure · campaign architecture · messaging that earns a reply

</td>
<td width="50%" valign="top">

**`→` &nbsp;The system underneath**

I don't hand the build off. The targeting logic, the sending infrastructure and the software that captures and routes what comes back are all things I write — which is why the two columns keep collapsing into one job.

</td>
</tr>
</table>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="mission"><img src="assets/label-02.svg" height="30" alt="02 — MISSION" /></h2>

Building AI-powered systems, automation and new technology at the intersection of **go-to-market** and **artificial intelligence**.

GTM is full of work that is judgement-heavy, repetitive and text-shaped — qualifying accounts, reading buying signals, writing a relevant first sentence at scale. That's the exact shape of problem modern AI systems are good at. I'm not moving toward AI because it's the thing to do; I'm moving toward it because I keep hitting the wall where my GTM systems need it.

<div align="center">
  <img src="assets/building-next.svg" alt="AI + Automation + Systems + GTM = new products. Building what's next." width="100%" />
</div>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="forgegtm"><img src="assets/label-03.svg" height="30" alt="03 — FORGEGTM" /></h2>

<div align="center">
  <a href="https://github.com/KathiriyaHardik/forgegtm">
    <img src="assets/forgegtm.svg" alt="ForgeGTM — GTM × Automation × AI. Pipeline: GTM systems, automation, AI, scale." width="100%" />
  </a>
</div>

> **Qualified pipeline, built on outbound systems.**
> ForgeGTM builds and runs outbound for B2B companies — targeting, infrastructure, messaging and campaigns — so sales teams spend their time in qualified conversations instead of building lists.

`B2B SaaS & technology` &nbsp;·&nbsp; `Series A–C` &nbsp;·&nbsp; `DACH, UK & Nordics`

### The system, in three pillars

<table>
<tr>
<td width="33%" valign="top">

`01`

**Strategy & Targeting**

Decide who is worth contacting before spending a euro reaching them.

<sub>Outbound Strategy · ICP & Targeting · Buying-Signal Research</sub>

</td>
<td width="33%" valign="top">

`02`

**Infrastructure & Deliverability**

Make sure what you send actually reaches a human inbox.

<sub>Email Infrastructure · Deliverability · Campaign Strategy</sub>

</td>
<td width="33%" valign="top">

`03`

**Messaging & Pipeline**

Turn attention into qualified conversations a team can close.

<sub>Personalized Copywriting · Lead Generation · Pipeline Generation</sub>

</td>
</tr>
</table>

### How an engagement runs

| | Stage | What happens | Output | |
|:--|:--|:--|:--|:--|
| `01` | **Research** | ICP, buying committee, live-signal accounts | ICP & account list | `Week 1–2` |
| `02` | **Build** | Targeting, messaging, sending infrastructure, warm-up | Live infrastructure | `Week 2–4` |
| `03` | **Launch** | Campaigns live, replies routed, volume paced | Booked meetings | `Week 5` |
| `04` | **Optimize** | Test against real reply data, expand what works | Compounding pipeline | `Ongoing` |

<details>
<summary><b>&nbsp;→&nbsp; What I've actually shipped for it</b> &nbsp;<sub>(the engineering detail)</sub></summary>

<br/>

The ForgeGTM platform is a real production codebase, not a landing page:

- 🌍 **Fully bilingual (EN/DE)** — locale dictionaries type-locked to each other, so the build fails if a translation drifts out of sync
- 🗄️ **Postgres lead pipeline** — idempotent schema, documented migrations, indexed for the way the queue is actually read
- 📬 **Dual email transports** — Gmail SMTP *or* Resend, auto-selected by which credentials are present
- 🛡️ **Failure-tolerant by design** — internal alert and prospect confirmation tracked with separate timestamps, so a failed send never silently loses a lead
- 🔐 **Protected lead dashboard** — `/admin` behind HTTP Basic, `noindex`, never cached, and it 503s rather than falling open when unconfigured
- ✅ **Real server-side validation** — free-email-domain rejection, URL normalisation, typed per-field error keys
- 🔎 **Full SEO surface** — sitemap, robots, generated Open Graph images, canonical origins, hreflang alternates
- 📤 **Lead CSV export** — the dashboard queue exports straight out for whoever works it
- 🪟 **Strategy call as a modal** — the form opens in place from every CTA rather than sending visitors to a separate page
- 👤 **Team/founder section** — driven from content, so it stays translatable like the rest of the site
- 🧪 **Credential checker** — `scripts/check-email.mjs` verifies the mail setup before a real lead depends on it
- 📚 **8 long-form insight articles + 3 case studies**, written in both languages

</details>

<sub>⚖️ Every case study on the site is explicitly labelled as illustrative, and placeholder content carries a visible badge. I'd rather ship an honest placeholder than an invented client.</sub>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="ai"><img src="assets/label-04.svg" height="30" alt="04 — AI ENGINEERING" /></h2>

I'd rather state this plainly than decorate it: **I am not an AI engineer yet.** There is no AI code in my repositories, and I'm not going to badge myself with skills I can't show you. Here's the real state of it.

<div align="center">
  <img src="assets/ai-roadmap.svg" alt="AI engineering roadmap: GTM and automation shipping now, AI-powered workflows next, LLMs, agents and RAG being learned, AI systems and advanced AI engineering as future direction" width="100%" />
</div>

<table>
<tr>
<td width="33%" valign="top">

`● ` **BUILDING**

<sub>Shipped, and public.</sub>

Production TypeScript · Next.js App Router · Postgres · server actions · automated email workflows · internal tooling · bilingual delivery

<sub>**Status:** live in `forgegtm`</sub>

</td>
<td width="33%" valign="top">

`◐ ` **LEARNING**

<sub>In progress, no shipped artifact yet.</sub>

Python for AI work · LLM APIs · prompt design · tool-calling and agent patterns · retrieval fundamentals

<sub>**Status:** learning, not claiming</sub>

</td>
<td width="33%" valign="top">

`○ ` **NEXT**

<sub>Planned, not started.</sub>

AI-assisted ICP research · agentic outbound workflows · RAG over sales knowledge · open-source AI tooling

<sub>**Status:** on the roadmap</sub>

</td>
</tr>
</table>

<sub>This section gets updated as things actually ship. If something is in <b>Learning</b> or <b>Next</b>, it means there is nothing to show yet.</sub>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="systems"><img src="assets/label-05.svg" height="30" alt="05 — SYSTEMS" /></h2>

<img src="assets/chip-systems.svg" height="28" alt="Systems — shipping" />

<p>
<img src="https://img.shields.io/badge/TypeScript-0a0a0c?style=flat-square&logo=typescript&logoColor=2d5ef5" alt="TypeScript" />
<img src="https://img.shields.io/badge/Next.js-0a0a0c?style=flat-square&logo=nextdotjs&logoColor=2d5ef5" alt="Next.js" />
<img src="https://img.shields.io/badge/React-0a0a0c?style=flat-square&logo=react&logoColor=2d5ef5" alt="React" />
<img src="https://img.shields.io/badge/PostgreSQL-0a0a0c?style=flat-square&logo=postgresql&logoColor=2d5ef5" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/Tailwind-0a0a0c?style=flat-square&logo=tailwindcss&logoColor=2d5ef5" alt="Tailwind CSS" />
</p>

<img src="assets/chip-automation.svg" height="28" alt="Automation — shipping" />

<p>
<img src="https://img.shields.io/badge/Server%20Actions-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Server Actions" />
<img src="https://img.shields.io/badge/Transactional%20Email-0a0a0c?style=flat-square&logo=maildotru&logoColor=2d5ef5" alt="Transactional email" />
<img src="https://img.shields.io/badge/Resend-0a0a0c?style=flat-square&logo=resend&logoColor=2d5ef5" alt="Resend" />
<img src="https://img.shields.io/badge/Lead%20Routing-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Lead routing" />
<img src="https://img.shields.io/badge/i18n%20EN%2FDE-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Internationalisation EN and DE" />
</p>

<img src="assets/chip-gtm.svg" height="28" alt="GTM — in practice" />

<p>
<img src="https://img.shields.io/badge/HubSpot-0a0a0c?style=flat-square&logo=hubspot&logoColor=2d5ef5" alt="HubSpot" />
<img src="https://img.shields.io/badge/Apollo-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Apollo" />
<img src="https://img.shields.io/badge/Clay-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Clay" />
<img src="https://img.shields.io/badge/Instantly-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Instantly" />
<img src="https://img.shields.io/badge/Smartlead-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Smartlead" />
<img src="https://img.shields.io/badge/n8n-0a0a0c?style=flat-square&logo=n8n&logoColor=2d5ef5" alt="n8n" />
</p>

<img src="assets/chip-ai.svg" height="28" alt="AI — learning" />

<p>
<img src="https://img.shields.io/badge/Python-14141a?style=flat-square&logo=python&logoColor=585c65" alt="Python — learning" />
<img src="https://img.shields.io/badge/LLM%20APIs-14141a?style=flat-square&logoColor=585c65" alt="LLM APIs — learning" />
<img src="https://img.shields.io/badge/Agents-14141a?style=flat-square&logoColor=585c65" alt="AI agents — learning" />
<img src="https://img.shields.io/badge/RAG-14141a?style=flat-square&logoColor=585c65" alt="RAG — learning" />
</p>

<sub>💡 The dimmed row is deliberate. Everything above it is in a repository you can open; everything in that row is something I'm still learning.</sub>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="projects"><img src="assets/label-06.svg" height="30" alt="06 — PROJECTS" /></h2>

<a href="https://github.com/KathiriyaHardik/forgegtm">
  <img src="assets/project-01.svg" alt="01 — ForgeGTM, active build. Bilingual marketing site, Postgres lead pipeline, dual-transport email and a gated lead dashboard." width="100%" />
</a>

<img src="assets/project-02.svg" alt="02 — Next Build, in planning. Applied AI inside the GTM systems above." width="100%" />

<div align="center">

<a href="https://github.com/KathiriyaHardik/forgegtm"><img src="https://img.shields.io/github/languages/top/KathiriyaHardik/forgegtm?style=flat-square&labelColor=0a0a0c&color=2d5ef5" alt="Top language" /></a> <a href="https://github.com/KathiriyaHardik/forgegtm"><img src="https://img.shields.io/github/languages/code-size/KathiriyaHardik/forgegtm?style=flat-square&labelColor=0a0a0c&color=2d5ef5" alt="Code size" /></a> <a href="https://github.com/KathiriyaHardik/forgegtm/commits"><img src="https://img.shields.io/github/last-commit/KathiriyaHardik/forgegtm?style=flat-square&labelColor=0a0a0c&color=2d5ef5" alt="Last commit" /></a> <a href="https://github.com/KathiriyaHardik/forgegtm/commits"><img src="https://img.shields.io/github/commit-activity/m/KathiriyaHardik/forgegtm?style=flat-square&labelColor=0a0a0c&color=2d5ef5" alt="Commits per month" /></a>

<sub>Live from the repository — these numbers move on their own.</sub>

</div>

<sub>🧱 Two slots, shown honestly — one shipping, one deliberately empty. More land here as they ship, not before.</sub>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="log"><img src="assets/label-07.svg" height="30" alt="07 — BUILD LOG" /></h2>

What actually landed, grouped by day, most recent first. Generated from commit history by a GitHub Action rather than written by hand, so it cannot quietly drift out of date the way a changelog does.

<!-- BUILD-LOG:START -->

| Day | What shipped | Commits |
|:--|:--|--:|
| `2026-09-15`<br/><sub>[`KathiriyaHardik`](https://github.com/KathiriyaHardik/KathiriyaHardik) [`forgegtm`](https://github.com/KathiriyaHardik/forgegtm)</sub> | Drop the streak card from the activity section<br/>Build the activity card from public REST instead of contributionsCollection<br/>Rebase and retry when the build-log push races another commit<br/>Add build-log and activity-card workflow<br/><sub>+ 7 more</sub> | `11` |
| `2026-09-13`<br/><sub>[`KathiriyaHardik`](https://github.com/KathiriyaHardik/KathiriyaHardik) [`forgegtm`](https://github.com/KathiriyaHardik/forgegtm)</sub> | Rebuild the profile as a designed system rather than a README<br/>Render the ForgeGTM mark statically in the banner<br/>Add profile README, brand assets and contribution snake<br/>Add lead emails, protected dashboard, SEO routes and content | `4` |
| `2026-09-12`<br/><sub>[`forgegtm`](https://github.com/KathiriyaHardik/forgegtm)</sub> | Add EN/DE, case study and insights pages, and lead alert emails<br/>Reposition as an outbound agency and ship a working strategy-call form | `2` |
| `2026-09-11`<br/><sub>[`forgegtm`](https://github.com/KathiriyaHardik/forgegtm)</sub> | Standardize on pnpm and unblock installs<br/>Replace unverified social proof and add real legal pages | `2` |

<sub>Last 4 days of work &#183; 19 commits &#183; merges excluded &#183; regenerated daily by GitHub Actions, never hand-written.</sub>
<!-- BUILD-LOG:END -->

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="activity"><img src="assets/label-08.svg" height="30" alt="08 — ACTIVITY" /></h2>

<div align="center">

<img src="https://img.shields.io/github/last-commit/KathiriyaHardik/forgegtm?style=flat-square&label=LAST%20COMMIT&labelColor=0a0a0c&color=2d5ef5" alt="Last commit" /> <img src="https://img.shields.io/github/commit-activity/m/KathiriyaHardik/forgegtm?style=flat-square&label=THROUGHPUT&labelColor=0a0a0c&color=1e1e24" alt="Commit throughput" />

<br/>

<img src="assets/stats.svg" alt="GitHub activity — commits, pull requests, active days, public repos and primary language share" width="100%" />

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KathiriyaHardik/KathiriyaHardik/output/snake-dark.svg" />
  <img src="https://raw.githubusercontent.com/KathiriyaHardik/KathiriyaHardik/output/snake-light.svg" alt="Contribution snake animation" width="100%" />
</picture>

<sub>Regenerated every 12 hours by GitHub Actions from the live contribution graph.</sub>

</div>

<img src="assets/divider.svg" width="100%" alt="" />

<h2 id="connect"><img src="assets/label-09.svg" height="30" alt="09 — CONNECT" /></h2>

Building ForgeGTM in Stuttgart. Open to conversations about **B2B outbound**, **GTM systems**, and **applied AI in go-to-market** — and happy to talk with anyone walking a similar path from building into AI engineering.

<div align="center">

<a href="mailto:connect.forgegtm@gmail.com"><img src="https://img.shields.io/badge/ForgeGTM-connect.forgegtm@gmail.com-2d5ef5?style=for-the-badge&logo=maildotru&logoColor=white&labelColor=0a0a0c" alt="Email ForgeGTM" /></a> &nbsp; <a href="mailto:kathiriyahardik.hk@gmail.com"><img src="https://img.shields.io/badge/Personal-kathiriyahardik.hk@gmail.com-0a0a0c?style=for-the-badge&logo=gmail&logoColor=2d5ef5&labelColor=0a0a0c" alt="Personal email" /></a>

</div>

<br/>

<img src="assets/divider.svg" width="100%" alt="" />

<div align="center">

### Building systems today. Engineering intelligence for tomorrow.

`ForgeGTM` &nbsp;·&nbsp; `AI Engineering` &nbsp;·&nbsp; `Automation`

<sub>Research → Build → Launch → Optimize<br/>Nothing on this page is claimed before it ships.</sub>

<br/>

<img src="https://komarev.com/ghpvc/?username=KathiriyaHardik&style=flat-square&color=2d5ef5&label=Profile+views" alt="Profile views" />

</div>
