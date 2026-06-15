# Skills README design

## Goal

Replace the Vite starter README with a public guide to this repository's personal, opinionated collection of agent skills. Readers should understand what each installed skill does, when it is useful, who created it, and how to install it from its upstream repository.

## Audience

The primary audience is developers who use AI coding agents or agent harnesses and want to inspect or adopt parts of this toolkit. The README speaks in the repository owner's voice: these are the skills they use, not a universal or exhaustive ranking.

## Scope

Document all 38 skill directories currently present under `skills/`.

Do not document `interface-design` or `make-interfaces-feel-better`. They appear in `skills-lock.json` but do not exist under `skills/`.

Include niche, experimental, in-progress, and deprecated skills. Label their narrower status in the description instead of omitting them.

## Structure

The README will contain:

1. A short introduction that explains the repository's purpose and opinionated nature
2. An installation section that links to `skills.sh` and demonstrates `npx skills add <owner/repo>`
3. A note that installing one upstream repository can add several skills
4. A grouped catalog with one table per use-case category
5. A credit note explaining that each skill belongs to its linked upstream author or project

The catalog will use these groups:

- Planning and product discovery
- Engineering and debugging
- React and frontend architecture
- UI, UX, and accessibility
- Reviews and code quality
- Documentation and knowledge transfer
- Issues, PRDs, and project workflow
- Agent communication and token efficiency
- Creating and maintaining skills

## Catalog format

Each table row will contain:

- **Skill**: the local skill directory, linked to its `SKILL.md`
- **Use it for**: a concise explanation based on the skill's own instructions
- **Source**: the upstream GitHub repository from `skills-lock.json`

A skill may appear in more than one group when that improves discovery. The README will avoid duplicate full descriptions by keeping each row concise and use-case focused.

## Writing style

- Use first person when explaining why the collection exists
- Address readers directly in installation instructions
- Keep descriptions concrete and avoid promotional claims
- Use sentence-case headings
- Define acronyms such as product requirements document (PRD) on first use
- Prefer short paragraphs and scannable tables
- Preserve exact skill and repository names

## Verification

Before completion:

1. Confirm every directory under `skills/` appears in at least one catalog table
2. Confirm every source link matches `skills-lock.json`
3. Confirm all local skill links resolve
4. Confirm installation examples use valid `owner/repo` sources
5. Review the final prose against the repository's writing guidelines
