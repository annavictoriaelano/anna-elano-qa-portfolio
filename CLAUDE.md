@CLAUDE.local.md

# CLAUDE.md — Anna Elano QA Portfolio

This file provides guidance to Claude Code when working with this repository.

---

## Project Overview

Personal QA portfolio site. Primary audience: tech recruiters and hiring managers across UK, Ireland, EU, and the Philippines.
Purpose: Showcase QA automation work, AI-augmented workflows, and career positioning.

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
