# CLAUDE.md — Anna Elano QA Portfolio

This file provides guidance to Claude Code when working with this repository.

---

## Project Overview

Personal QA portfolio site. Primary audience: UK tech recruiters and hiring managers.
Purpose: Showcase QA automation work, AI-augmented workflows, and career positioning.

Live URL (pre-Vercel): https://annaelano-qa-portfolio.lovable.app
Target: Vercel deployment

---

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Dev build
npm run lint         # ESLint check
npm run preview      # Preview production build
npm run test         # Run Vitest once
npm run test:watch   # Run tests in watch mode
```

---

## Architecture

Single-page React 18 portfolio app — no backend, no API calls.

**Entry flow:** `main.tsx` → `App.tsx` (providers + router) → `Layout.tsx` (navbar + footer wrapper) → page components.

**Routing** (`src/App.tsx`): BrowserRouter with 5 routes (`/`, `/projects`, `/about`, `/contact`, `*`).

**Pages** (`src/pages/`): Index (hero), Projects, About, Contact, NotFound.

**UI components** (`src/components/ui/`): shadcn/ui built on Radix UI primitives. Add via `npx shadcn-ui@latest add <component>`.

**Styling:** Tailwind CSS with CSS variable-based theming. Dark mode via `class` strategy. Always use `cn()` from `src/lib/utils.ts` for conditional class merging.

**Path alias:** `@/` maps to `src/`.

---

## Who I Am

- QA Automation Engineer at HazardCo (via Ascendia Works), Philippines
- 4+ years in QA across mobile (React Native / Detox) and web (Playwright)
- Building this portfolio to support a UK job search targeting Skilled Worker visa-sponsored roles
- SOC code: 2136. Salary floor: £41,700
- I use AI heavily but govern it — all logic, standards, and guardrails are mine
- This portfolio is the public face of that work

---

## How to Work with Me

- **Be concise and direct.** No fluff, no theory unless I ask.
- **Short paced steps.** Wait for me to complete each step before continuing. Never dump end-to-end instructions unless I explicitly ask.
- **Acknowledge mistakes before fixing** — explain what went wrong briefly.
- **Don't agree just to please.** Give honest critique. Push back if my approach has issues.
- **Ask clarifying questions** when context is unclear. Don't assume and get it wrong.
- **Flag assumptions** when you make them so I can correct early.
- **Don't repeat suggestions I've already rejected.**
- **If you ask me a question, STOP.** Do not proceed, do not start work while waiting. Wait for my response.
- **Never rush me to a conclusion.** Support the investigation, don't cut it short.

---

## Content Rules

- All copy must reflect Anna's actual experience. No placeholder or generic text.
- Tech stack tags on project cards must only list tools Anna has actually used.
- No tools listed that Anna cannot speak to in an interview.
- Tone: direct, confident, human. No AI-sounding fluff.
- No em dashes anywhere in copy. No double dashes either.
- Do not invent features or capabilities not confirmed by Anna.

---

## Projects Section Rules

- Each project card opens a modal.
- Modal structure: workflow diagram, what it does (bullet points), what it achieves (bullet points).
- Projects listed must be real work Anna owns or has built.
- Diagrams should be readable by non-technical recruiters — clean flowcharts, not dense architecture diagrams.

---

## Guardrails

- **Never deploy to Vercel** without Anna's explicit confirmation.
- **Never modify copy** (project descriptions, about text, skills) without Anna reviewing first.
- **Always ask** before installing new dependencies.
- **Never remove existing sections** without confirmation.
- **Ask before any git operation** (commit, push, branch creation).
- **Flag immediately** if any change would affect public URLs or SEO metadata.

---

## When Things Go Wrong — Mandatory Behavior

1. **Never panic.** When a command fails or something breaks, pause. Read the error. Think logically. Do not retry blindly.
2. **Never take shortcuts.** If the correct path feels slow, that's the point. Follow it anyway.
3. **Never violate rules in this file.** They exist for a reason.
4. **If a blocker is detected, STOP ALL WORK and discuss.** No further background tasks. Report the blocker. Wait for Anna's decision.
5. **ONE active command at a time.** Wait for completion, parse results, then decide next step.
6. **If Anna intervenes** (closes server, kills process, etc.) — assume ALL previous work is invalid. Start completely fresh.

---

## Obsidian Vault

Anna's second brain. Path:

```
/Users/annaelano/Documents/ase-workspace/Obsidian Vaults/HazardCo QA Team
```

Portfolio-specific notes live in:

```
/Users/annaelano/Documents/ase-workspace/Obsidian Vaults/HazardCo QA Team/xannavictoriaelano/
```

Key files:
- `vercel-portfolio.md` — migration checklist and full content build plan
- `cv-anna.md` — full CV content including LinkedIn About, skills, and all experience bullets
- `portfolio-to-do-list.md` — master to-do tracker for portfolio, CV, and job hunt
- `handoff-file.md` — full context handoff for Claude Code sessions

### When to Read
- **Before starting a session:** Read `portfolio-to-do-list.md` for current priorities
- **For full context:** Read `handoff-file.md`

### When to Write
- **Ad-hoc writes** — preview full content first, wait for approval.
- **Never delete** — ask Anna first.
