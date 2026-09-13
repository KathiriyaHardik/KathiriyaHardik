<div align="center">
  <img src="assets/banner.svg" alt="Hardik Kathiriya — Founder @ ForgeGTM · GTM & Outbound Systems · Building toward AI Engineering" width="100%" />
</div>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Segoe+UI&weight=600&size=21&pause=1200&color=2D5EF5&center=true&vCenter=true&width=680&height=45&lines=Founder+%40+ForgeGTM;I+build+outbound+systems+%E2%80%94+and+the+software+under+them;GTM+%2B+Automation+%2B+TypeScript;Learning+my+way+into+AI+engineering" alt="Founder @ ForgeGTM — I build outbound systems and the software under them" />

<br/>

**[About](#-about)** &nbsp;·&nbsp;
**[ForgeGTM](#-building-forgegtm)** &nbsp;·&nbsp;
**[AI Journey](#-ai-engineering-journey)** &nbsp;·&nbsp;
**[Projects](#-projects)** &nbsp;·&nbsp;
**[Stack](#-ai--technology-stack)** &nbsp;·&nbsp;
**[Activity](#-activity)** &nbsp;·&nbsp;
**[Connect](#-connect)**

<br/>

<img src="https://img.shields.io/badge/Founder-ForgeGTM-2d5ef5?style=flat-square&labelColor=0a0a0c" alt="Founder at ForgeGTM" />
<img src="https://img.shields.io/badge/Focus-B2B%20Outbound%20Systems-0a0a0c?style=flat-square&labelColor=0a0a0c" alt="Focus: B2B outbound systems" />
<img src="https://img.shields.io/badge/Direction-AI%20Engineering-0a0a0c?style=flat-square&labelColor=0a0a0c" alt="Direction: AI engineering" />
<img src="https://img.shields.io/badge/Based%20in-Stuttgart,%20DE-0a0a0c?style=flat-square&labelColor=0a0a0c" alt="Based in Stuttgart, Germany" />

</div>

<br/>

---

## 🧭 About

I'm building **ForgeGTM**, a B2B go-to-market and outbound agency — and I write the software that runs it.

Most outbound doesn't fail for lack of effort. It fails because the system behind it is broken: lists bought instead of researched, messaging written for nobody in particular, deliverability quietly failing while the dashboard looks fine. Those are **engineering problems as much as creative ones**, which is exactly why I ended up on both sides of the work.

So my days split between two things that keep turning out to be the same thing:

- **Designing the go-to-market motion** — ICP definition, buying-signal research, email infrastructure, campaign architecture, messaging that earns a reply.
- **Building the systems underneath it** — TypeScript, Next.js, Postgres, server actions, automated lead capture and notification, bilingual delivery, SEO infrastructure.

Next step is deliberate: taking the automation instinct that already drives how I build GTM systems, and developing it into real **AI engineering** capability. That part is early, and I've labelled it honestly below.

<br/>

## 🔨 Building ForgeGTM

> **Qualified pipeline, built on outbound systems.**
> ForgeGTM builds and runs outbound for B2B companies — targeting, infrastructure, messaging and campaigns — so sales teams spend their time in qualified conversations instead of building lists.

**Who it's for:** B2B SaaS & technology · Series A–C · DACH, UK & Nordics

### The system, in three pillars

<table>
<tr>
<td width="33%" valign="top">

**`01` Strategy & Targeting**

Decide who is worth contacting before spending a euro reaching them.

<sub>Outbound Strategy · ICP & Targeting · Buying-Signal Research</sub>

</td>
<td width="33%" valign="top">

**`02` Infrastructure & Deliverability**

Make sure what you send actually reaches a human inbox.

<sub>Email Infrastructure · Deliverability · Campaign Strategy</sub>

</td>
<td width="33%" valign="top">

**`03` Messaging & Pipeline**

Turn attention into qualified conversations a team can close.

<sub>Personalized Copywriting · Lead Generation · Pipeline Generation</sub>

</td>
</tr>
</table>

### How an engagement runs

`01` **Research** — ICP, buying committee, live-signal accounts &nbsp;→&nbsp; *Week 1–2*
`02` **Build** — targeting, messaging, sending infrastructure, warm-up &nbsp;→&nbsp; *Week 2–4*
`03` **Launch** — campaigns live, replies routed, volume paced &nbsp;→&nbsp; *Week 5*
`04` **Optimize** — test against real reply data, expand what works &nbsp;→&nbsp; *Ongoing*

### What I've actually shipped for it

The ForgeGTM platform is a real production codebase, not a landing page:

- 🌍 **Fully bilingual (EN/DE)** — locale dictionaries type-locked to each other, so the build fails if a translation drifts out of sync
- 🗄️ **Postgres lead pipeline** — idempotent schema, documented migrations, indexed for the way the queue is actually read
- 📬 **Dual email transports** — Gmail SMTP *or* Resend, auto-selected by which credentials are present
- 🛡️ **Failure-tolerant by design** — internal alert and prospect confirmation tracked with separate timestamps, so a failed send never silently loses a lead
- 🔐 **Protected lead dashboard** — `/admin` behind HTTP Basic, `noindex`, never cached, and it 503s rather than falling open when unconfigured
- ✅ **Real server-side validation** — free-email-domain rejection, URL normalisation, typed per-field error keys
- 🔎 **Full SEO surface** — sitemap, robots, generated Open Graph images, canonical origins, hreflang alternates
- 📚 **8 long-form insight articles + 3 case studies**, written in both languages

<sub>⚖️ Every case study on the site is explicitly labelled as illustrative, and placeholder content carries a visible badge. I'd rather ship an honest placeholder than an invented client.</sub>

<br/>

## 🤖 AI Engineering Journey

<div align="center">
  <img src="assets/ai-journey.svg" alt="AI engineering journey: shipping now, learning now, planned next" width="100%" />
</div>

I'd rather state this plainly than decorate it: **I am not an AI engineer yet.** There is no AI code in my repositories, and I'm not going to badge myself with skills I can't show you. Here's the real state of it.

<table>
<tr>
<td width="33%" valign="top">

#### ✅ Building

*Shipped, and public.*

Production TypeScript · Next.js App Router · Postgres · server actions · automated email workflows · internal tooling · bilingual delivery

**Status:** live in `forgegtm`

</td>
<td width="33%" valign="top">

#### 📖 Learning

*In progress, no shipped artifact yet.*

Python for AI work · LLM APIs · prompt design · tool-calling and agent patterns · retrieval fundamentals

**Status:** learning, not claiming

</td>
<td width="33%" valign="top">

#### 🧭 Next

*Planned, not started.*

AI-assisted ICP research · agentic outbound workflows · RAG over sales knowledge · open-source AI tooling

**Status:** on the roadmap

</td>
</tr>
</table>

**Why this direction, specifically.** GTM is full of work that is judgement-heavy, repetitive, and text-shaped — qualifying accounts, reading buying signals, writing a relevant first sentence at scale. That's the exact shape of problem modern AI systems are good at. I'm not moving toward AI because it's the thing to do; I'm moving toward it because I keep hitting the wall where my GTM systems need it.

<sub>This section gets updated as things actually ship. If something is in **Learning** or **Next**, it means there is nothing to show yet.</sub>

<br/>

## 🚀 Projects

<table>
<tr>
<td valign="top">

### ForgeGTM &nbsp;<img src="https://img.shields.io/badge/-active%20build-2d5ef5?style=flat-square" alt="active build" />

**B2B go-to-market & outbound platform** — the marketing site, lead pipeline and internal tooling behind the agency.

**The problem it solves:** inbound enquiries arriving with no qualification, no storage, no alerting and no attribution — a lead landing in an inbox and dying there.

**What it does:** validates and stores every strategy-call request in Postgres, sends an internal alert *and* a prospect confirmation over two independent transports, tracks whether each one actually sent, and exposes the queue in a password-gated dashboard. Fully bilingual, fully SEO-instrumented.

`TypeScript` `Next.js 16` `React 19` `Tailwind v4` `PostgreSQL` `Nodemailer` `Resend` `Server Actions` `i18n`

**Status:** actively building · pre-launch
**→ [View repository](https://github.com/KathiriyaHardik/forgegtm)**

</td>
</tr>
</table>

<div align="center">

<a href="https://github.com/KathiriyaHardik/forgegtm">
  <img src="https://img.shields.io/github/languages/top/KathiriyaHardik/forgegtm?style=for-the-badge&labelColor=0a0a0c&color=2d5ef5" alt="Top language" />
</a>
<a href="https://github.com/KathiriyaHardik/forgegtm">
  <img src="https://img.shields.io/github/languages/code-size/KathiriyaHardik/forgegtm?style=for-the-badge&labelColor=0a0a0c&color=2d5ef5" alt="Code size" />
</a>
<a href="https://github.com/KathiriyaHardik/forgegtm/commits">
  <img src="https://img.shields.io/github/last-commit/KathiriyaHardik/forgegtm?style=for-the-badge&labelColor=0a0a0c&color=2d5ef5" alt="Last commit" />
</a>
<a href="https://github.com/KathiriyaHardik/forgegtm/commits">
  <img src="https://img.shields.io/github/commit-activity/m/KathiriyaHardik/forgegtm?style=for-the-badge&labelColor=0a0a0c&color=2d5ef5" alt="Commits per month" />
</a>

<sub>Live from the repository — these numbers move on their own.</sub>

</div>

<sub>🧱 One project, shown properly — rather than a wall of empty repositories. More land here as they ship, not before.</sub>

<br/>

## ⚡ AI & Technology Stack

#### Engineering — *shipping with this today*

<p>
<img src="https://img.shields.io/badge/TypeScript-0a0a0c?style=flat-square&logo=typescript&logoColor=2d5ef5" alt="TypeScript" />
<img src="https://img.shields.io/badge/JavaScript-0a0a0c?style=flat-square&logo=javascript&logoColor=2d5ef5" alt="JavaScript" />
<img src="https://img.shields.io/badge/React-0a0a0c?style=flat-square&logo=react&logoColor=2d5ef5" alt="React" />
<img src="https://img.shields.io/badge/Next.js-0a0a0c?style=flat-square&logo=nextdotjs&logoColor=2d5ef5" alt="Next.js" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-0a0a0c?style=flat-square&logo=tailwindcss&logoColor=2d5ef5" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/PostgreSQL-0a0a0c?style=flat-square&logo=postgresql&logoColor=2d5ef5" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/Node.js-0a0a0c?style=flat-square&logo=nodedotjs&logoColor=2d5ef5" alt="Node.js" />
<img src="https://img.shields.io/badge/Git-0a0a0c?style=flat-square&logo=git&logoColor=2d5ef5" alt="Git" />
</p>

#### Automation & Systems — *built into ForgeGTM*

<p>
<img src="https://img.shields.io/badge/Server%20Actions-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Server Actions" />
<img src="https://img.shields.io/badge/Transactional%20Email-0a0a0c?style=flat-square&logo=maildotru&logoColor=2d5ef5" alt="Transactional email" />
<img src="https://img.shields.io/badge/Resend-0a0a0c?style=flat-square&logo=resend&logoColor=2d5ef5" alt="Resend" />
<img src="https://img.shields.io/badge/SMTP-0a0a0c?style=flat-square&logo=gmail&logoColor=2d5ef5" alt="SMTP" />
<img src="https://img.shields.io/badge/Lead%20Capture%20%26%20Routing-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Lead capture and routing" />
<img src="https://img.shields.io/badge/i18n%20(EN%2FDE)-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Internationalisation EN and DE" />
</p>

#### GTM — *tools I work in on engagements*

<p>
<img src="https://img.shields.io/badge/HubSpot-0a0a0c?style=flat-square&logo=hubspot&logoColor=2d5ef5" alt="HubSpot" />
<img src="https://img.shields.io/badge/Salesforce-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Salesforce" />
<img src="https://img.shields.io/badge/Apollo-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Apollo" />
<img src="https://img.shields.io/badge/Clay-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Clay" />
<img src="https://img.shields.io/badge/Sales%20Navigator-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="LinkedIn Sales Navigator" />
<img src="https://img.shields.io/badge/Instantly-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Instantly" />
<img src="https://img.shields.io/badge/Smartlead-0a0a0c?style=flat-square&logoColor=2d5ef5" alt="Smartlead" />
<img src="https://img.shields.io/badge/n8n-0a0a0c?style=flat-square&logo=n8n&logoColor=2d5ef5" alt="n8n" />
</p>

#### AI — *learning, not yet shipping*

<p>
<img src="https://img.shields.io/badge/Python-1c1c20?style=flat-square&logo=python&logoColor=62666e" alt="Python — learning" />
<img src="https://img.shields.io/badge/LLM%20APIs-1c1c20?style=flat-square&logoColor=62666e" alt="LLM APIs — learning" />
<img src="https://img.shields.io/badge/AI%20Agents-1c1c20?style=flat-square&logoColor=62666e" alt="AI agents — learning" />
<img src="https://img.shields.io/badge/RAG-1c1c20?style=flat-square&logoColor=62666e" alt="RAG — learning" />
</p>

<sub>💡 The dimmed badges are deliberate. Everything above them is in a repository you can open; everything in that row is something I'm still learning.</sub>

<br/>

## 📊 Activity

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=KathiriyaHardik&theme=github_dark" />
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=KathiriyaHardik&theme=github" alt="Profile summary" width="100%" />
</picture>

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=KathiriyaHardik&theme=github_dark" />
  <img height="190" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=KathiriyaHardik&theme=github" alt="Commit, PR and issue stats" />
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=KathiriyaHardik&theme=github_dark" />
  <img height="190" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=KathiriyaHardik&theme=github" alt="Most used languages by commit" />
</picture>

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=KathiriyaHardik&background=08080a&border=222227&stroke=222227&ring=2d5ef5&fire=2d5ef5&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=2d5ef5&sideLabels=8d919a&dates=62666e&border_radius=12" />
  <img height="180" src="https://streak-stats.demolab.com?user=KathiriyaHardik&background=ffffff&border=e5e6ea&stroke=e5e6ea&ring=2d5ef5&fire=2d5ef5&currStreakNum=0a0a0c&sideNums=0a0a0c&currStreakLabel=2d5ef5&sideLabels=62666e&dates=8d919a&border_radius=12" alt="Contribution streak" />
</picture>

<br/><br/>

<!-- CONTRIBUTION SNAKE — uncomment after the workflow has run once.
     It stays commented out only because the SVGs do not exist until the
     first "Generate contribution snake" run publishes the `output` branch.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KathiriyaHardik/KathiriyaHardik/output/snake-dark.svg" />
  <img src="https://raw.githubusercontent.com/KathiriyaHardik/KathiriyaHardik/output/snake-light.svg" alt="Contribution snake animation" width="100%" />
</picture>

<sub>Snake regenerated every 12 hours by GitHub Actions from the live contribution graph.</sub>
-->

</div>

<br/>

## 🤝 Connect

Building ForgeGTM in Stuttgart. Open to conversations about **B2B outbound**, **GTM systems**, and **applied AI in go-to-market** — and happy to talk with anyone walking a similar path from building into AI engineering.

<div align="center">

<a href="mailto:contact.forgegtm@gmail.com">
  <img src="https://img.shields.io/badge/ForgeGTM%20Enquiries-contact.forgegtm@gmail.com-2d5ef5?style=for-the-badge&logo=maildotru&logoColor=white&labelColor=0a0a0c" alt="Email ForgeGTM" />
</a>
&nbsp;
<a href="mailto:kathiriyahardik.hk@gmail.com">
  <img src="https://img.shields.io/badge/Personal-kathiriyahardik.hk@gmail.com-0a0a0c?style=for-the-badge&logo=gmail&logoColor=2d5ef5&labelColor=0a0a0c" alt="Personal email" />
</a>

</div>

<br/>

---

<div align="center">

**Research** &nbsp;→&nbsp; **Build** &nbsp;→&nbsp; **Launch** &nbsp;→&nbsp; **Optimize**

<sub>The way I run an outbound engagement, and the way I'm learning AI engineering.<br/>Nothing on this page is claimed before it ships.</sub>

<br/>

<img src="https://komarev.com/ghpvc/?username=KathiriyaHardik&style=flat-square&color=2d5ef5&label=Profile+views" alt="Profile views" />

</div>
