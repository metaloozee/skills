# Skills README implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Vite starter README with an opinionated, credited catalog of every skill currently installed under `skills/`.

**Architecture:** `README.md` is the public guide and catalog. The skill directories supply usage details, while `skills-lock.json` supplies upstream ownership and repository links. Verification compares the README against both sources so deleted lockfile metadata remains preserved in the published documentation.

**Tech Stack:** Markdown, PowerShell, Git

---

### Task 1: Build the public skills catalog

**Files:**
- Modify: `README.md`
- Reference: `skills/*/SKILL.md`
- Reference: `skills-lock.json`

- [x] **Step 1: Replace the starter introduction**

Write a first-person introduction that identifies this repository as a personal, opinionated toolkit for AI coding agents and agent harnesses. State that readers can adopt individual skills without treating the collection as a universal recommendation.

- [x] **Step 2: Add installation guidance**

Link to `https://skills.sh/` and include this command:

```bash
npx skills add <owner/repo>
```

Explain that the command installs from an upstream repository and that one repository may contain several skills.

- [x] **Step 3: Add the grouped catalog**

Create one Markdown table for each approved category:

1. Planning and product discovery
2. Engineering and debugging
3. React and frontend architecture
4. UI, UX, and accessibility
5. Reviews and code quality
6. Documentation and knowledge transfer
7. Issues, PRDs, and project workflow
8. Agent communication and token efficiency
9. Creating and maintaining skills

Each row must link the local `skills/<name>/SKILL.md`, describe a concrete use case, and credit the GitHub repository recorded in `skills-lock.json`. Include all 38 on-disk skills. Label deprecated, in-progress, or project-specific skills in their descriptions.

- [x] **Step 4: Add the credit statement**

State that this repository curates the skills but does not claim authorship. Direct readers to each linked upstream repository for its license, history, and current documentation.

### Task 2: Verify catalog coverage and prose

**Files:**
- Verify: `README.md`
- Reference: `skills-lock.json`
- Reference: `skills/*/SKILL.md`

- [x] **Step 1: Check every on-disk skill is listed**

Run:

```powershell
$missing = Get-ChildItem skills -Directory |
  Where-Object { (Get-Content -Raw README.md) -notmatch [regex]::Escape("skills/$($_.Name)/SKILL.md") }
$missing.Name
```

Expected: no output.

- [x] **Step 2: Check every local README link resolves**

Run:

```powershell
$readme = Get-Content -Raw README.md
[regex]::Matches($readme, '\]\((skills/[^)]+)\)') |
  ForEach-Object { $_.Groups[1].Value } |
  Sort-Object -Unique |
  Where-Object { -not (Test-Path $_) }
```

Expected: no output.

- [x] **Step 3: Check every source credit matches the lockfile**

Run:

```powershell
$readme = Get-Content -Raw README.md
$lock = Get-Content -Raw skills-lock.json | ConvertFrom-Json
Get-ChildItem skills -Directory | ForEach-Object {
  $entry = $lock.skills.PSObject.Properties[$_.Name].Value
  $url = "https://github.com/$($entry.source)/blob/HEAD/$($entry.skillPath)"
  if ($readme -notmatch [regex]::Escape($url)) {
    "$($_.Name): missing $url"
  }
}
```

Expected: no output.

- [x] **Step 4: Check Markdown whitespace and prohibited placeholders**

Run:

```powershell
git diff --check -- README.md
rg -n "TBD|TODO|PLACEHOLDER|<owner/repo>" README.md
```

Expected: `git diff --check` produces no output. The only placeholder match is the documented generic installation command.

- [x] **Step 5: Review the final prose**

Check sentence-case headings, direct installation instructions, defined acronyms, concise descriptions, active voice, and the absence of promotional claims. Correct any findings directly in `README.md`.
