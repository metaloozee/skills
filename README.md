# Skills

This repository is my personal, opinionated toolkit for working with artificial intelligence (AI) coding agents and agent harnesses. The current collection contains 38 skills that shape how my agents plan work, write code, review changes, design interfaces, manage issues, and communicate.

This is not a universal list of the “best” skills. It records the workflows and constraints I find useful. You can browse the collection, adopt individual skills, or use it as a starting point for your own toolkit.

## Install a skill

Browse the wider ecosystem on [skills.sh](https://skills.sh/). 
Install skills from the following command:
```bash
npx skills add metaloozee/skills
```

## Planning and product discovery

These skills help me define the problem before an agent starts changing code.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`brainstorming`](skills/brainstorming/SKILL.md) | Explore intent, requirements, constraints, and design choices before creative or implementation work begins. | [obra/superpowers](https://github.com/obra/superpowers/blob/HEAD/skills/brainstorming/SKILL.md) |
| [`grill-me`](skills/grill-me/SKILL.md) | Stress-test a plan through a focused interview that resolves assumptions and decision branches. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grill-me/SKILL.md) |
| [`grill-with-docs`](skills/grill-with-docs/SKILL.md) | Challenge a plan against the project’s domain language, context documents, and architecture decision records. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/grill-with-docs/SKILL.md) |
| [`product-thinking`](skills/product-thinking/SKILL.md) | Plan user-facing changes to React Doctor’s public surfaces, compatibility artifacts, documentation, telemetry, and success metrics. This skill is specific to React Doctor. | [millionco/react-doctor](https://github.com/millionco/react-doctor/blob/HEAD/.agents/skills/product-thinking/SKILL.md) |
| [`request-refactor-plan`](skills/request-refactor-plan/SKILL.md) | Interview the maintainer, break a refactor into small commits, and publish the plan as an issue. The upstream skill is marked deprecated. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/deprecated/request-refactor-plan/SKILL.md) |
| [`writing-plans`](skills/writing-plans/SKILL.md) | Convert an approved specification into an implementation plan with exact files, commands, tests, and small execution steps. | [obra/superpowers](https://github.com/obra/superpowers/blob/HEAD/skills/writing-plans/SKILL.md) |

## Engineering and debugging

These skills guide implementation, diagnosis, architecture work, and test strategy.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`diagnose`](skills/diagnose/SKILL.md) | Debug difficult failures and performance regressions through reproduction, minimization, hypotheses, instrumentation, fixes, and regression tests. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/diagnose/SKILL.md) |
| [`find-similar-functions`](skills/find-similar-functions/SKILL.md) | Search JavaScript and TypeScript code for existing helpers before adding or refactoring reusable functionality. | [millionco/react-doctor](https://github.com/millionco/react-doctor/blob/HEAD/.agents/skills/find-similar-functions/SKILL.md) |
| [`improve`](skills/improve/SKILL.md) | Audit a codebase and produce prioritized implementation plans for another agent. It is intentionally read-only. | [shadcn/improve](https://github.com/shadcn/improve/blob/HEAD/skills/improve/SKILL.md) |
| [`improve-codebase-architecture`](skills/improve-codebase-architecture/SKILL.md) | Find refactoring opportunities that improve module boundaries, testability, domain alignment, and agent navigation. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/improve-codebase-architecture/SKILL.md) |
| [`tdd`](skills/tdd/SKILL.md) | Build features and fix bugs with a test-driven development (TDD) red-green-refactor loop. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/tdd/SKILL.md) |
| [`zoom-out`](skills/zoom-out/SKILL.md) | Step up a level of abstraction and map unfamiliar modules, callers, and domain relationships before editing. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/zoom-out/SKILL.md) |

## React and frontend architecture

These skills cover React performance, component application programming interfaces (APIs), diagnostics, and native view transitions.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`react-doctor`](skills/react-doctor/SKILL.md) | Scan React work for lint, accessibility, bundle size, and architecture problems before a change is finished or committed. | [millionco/react-doctor](https://github.com/millionco/react-doctor/blob/HEAD/skills/react-doctor/SKILL.md) |
| [`vercel-composition-patterns`](skills/vercel-composition-patterns/SKILL.md) | Design scalable React component APIs with composition, compound components, providers, and fewer boolean props. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/composition-patterns/SKILL.md) |
| [`vercel-react-best-practices`](skills/vercel-react-best-practices/SKILL.md) | Apply React and Next.js performance guidance for data fetching, bundles, rendering, rerenders, and server work. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/react-best-practices/SKILL.md) |
| [`vercel-react-view-transitions`](skills/vercel-react-view-transitions/SKILL.md) | Add native-feeling route, shared-element, list, and state transitions with React’s View Transition APIs. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/react-view-transitions/SKILL.md) |

## User interface, user experience, and accessibility

These skills help agents produce interfaces that feel deliberate, remain accessible, and perform well.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`baseline-ui`](skills/baseline-ui/SKILL.md) | Apply a practical baseline for spacing, hierarchy, typography, primitives, responsive layout, and interaction states. | [ibelick/ui-skills](https://github.com/ibelick/ui-skills/blob/HEAD/skills/baseline-ui/SKILL.md) |
| [`emil-design-eng`](skills/emil-design-eng/SKILL.md) | Apply Emil Kowalski’s design-engineering approach to polish, component details, interaction, and animation decisions. | [emilkowalski/skill](https://github.com/emilkowalski/skill/blob/HEAD/skills/emil-design-eng/SKILL.md) |
| [`fixing-accessibility`](skills/fixing-accessibility/SKILL.md) | Audit and fix keyboard navigation, focus behavior, labels, form errors, color contrast, and Accessible Rich Internet Applications (ARIA) usage. | [ibelick/ui-skills](https://github.com/ibelick/ui-skills/blob/HEAD/skills/fixing-accessibility/SKILL.md) |
| [`fixing-metadata`](skills/fixing-metadata/SKILL.md) | Audit and fix titles, descriptions, canonical URLs, social cards, favicons, structured data, and crawler directives. | [ibelick/ui-skills](https://github.com/ibelick/ui-skills/blob/HEAD/skills/fixing-metadata/SKILL.md) |
| [`fixing-motion-performance`](skills/fixing-motion-performance/SKILL.md) | Diagnose stuttering animation, layout thrashing, expensive visual effects, and scroll-linked motion. | [ibelick/ui-skills](https://github.com/ibelick/ui-skills/blob/HEAD/skills/fixing-motion-performance/SKILL.md) |
| [`impeccable`](skills/impeccable/SKILL.md) | Design, critique, polish, or harden frontend interfaces across visual hierarchy, user experience, accessibility, responsiveness, motion, and theming. | [pbakaus/impeccable](https://github.com/pbakaus/impeccable/blob/HEAD/.agents/skills/impeccable/SKILL.md) |
| [`ui-skills-root`](skills/ui-skills-root/SKILL.md) | Route a user interface task through the `ui-skills` command-line interface and load the smallest relevant design context. | [ibelick/ui-skills](https://github.com/ibelick/ui-skills/blob/HEAD/skills/ui-skills-root/SKILL.md) |
| [`web-design-guidelines`](skills/web-design-guidelines/SKILL.md) | Review interface code against Vercel’s current web design and user experience guidelines. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/web-design-guidelines/SKILL.md) |

## Reviews and code quality

These skills help me check changes, remove accidental complexity, and keep review feedback actionable.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`caveman-review`](skills/caveman-review/SKILL.md) | Produce compressed code-review findings with a location, problem, severity, and concrete fix. | [juliusbrussee/caveman](https://github.com/juliusbrussee/caveman/blob/HEAD/skills/caveman-review/SKILL.md) |
| [`deslop`](skills/deslop/SKILL.md) | Simplify recently changed code without altering behavior by removing needless abstractions, nesting, indirection, and dead scaffolding. | [millionco/react-doctor](https://github.com/millionco/react-doctor/blob/HEAD/.agents/skills/deslop/SKILL.md) |
| [`review`](skills/review/SKILL.md) | Review a branch or change set against both repository standards and its originating specification. The upstream skill is marked in progress. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/in-progress/review/SKILL.md) |

## Documentation and knowledge transfer

These skills preserve context and help agents explain work to humans or other agents.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`handoff`](skills/handoff/SKILL.md) | Compact the current conversation and project state into a document another agent can continue from. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/handoff/SKILL.md) |
| [`teach`](skills/teach/SKILL.md) | Teach a concept inside the current workspace with examples grounded in the repository. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/teach/SKILL.md) |
| [`writing-guidelines`](skills/writing-guidelines/SKILL.md) | Review documentation and product prose against Vercel’s current writing guidance. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/writing-guidelines/SKILL.md) |

## Issues, product requirements, and project workflow

These skills turn conversations and plans into trackable work on an issue tracker.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`qa`](skills/qa/SKILL.md) | Run a conversational quality assurance session and file the reported problems as issues. The upstream skill is marked deprecated. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/deprecated/qa/SKILL.md) |
| [`to-issues`](skills/to-issues/SKILL.md) | Break a plan, specification, or product requirements document into independently deliverable vertical-slice issues. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/to-issues/SKILL.md) |
| [`to-prd`](skills/to-prd/SKILL.md) | Turn the current context into a product requirements document (PRD) and publish it to the project’s issue tracker. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/to-prd/SKILL.md) |
| [`triage`](skills/triage/SKILL.md) | Classify issues, request missing information, and move work through states such as ready for an agent or ready for a human. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/triage/SKILL.md) |

## Agent communication and token efficiency

These skills reduce conversational overhead while retaining technical information.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`caveman`](skills/caveman/SKILL.md) | Switch agent responses into a persistent, compressed communication style when token efficiency matters. | [juliusbrussee/caveman](https://github.com/juliusbrussee/caveman/blob/HEAD/skills/caveman/SKILL.md) |
| [`caveman-commit`](skills/caveman-commit/SKILL.md) | Write concise Conventional Commit messages with an imperative subject and only the context the diff cannot explain. | [juliusbrussee/caveman](https://github.com/juliusbrussee/caveman/blob/HEAD/skills/caveman-commit/SKILL.md) |
| [`caveman-compress`](skills/caveman-compress/SKILL.md) | Compress natural-language agent memory files while preserving instructions, code, URLs, and document structure. | [juliusbrussee/caveman](https://github.com/juliusbrussee/caveman/blob/HEAD/skills/caveman-compress/SKILL.md) |

## Creating and maintaining skills

This skill helps me add new capabilities without turning a skill file into an unstructured prompt dump.

| Skill | Use it for | Source |
| --- | --- | --- |
| [`write-a-skill`](skills/write-a-skill/SKILL.md) | Create an agent skill with focused instructions, progressive disclosure, references, examples, and scripts when needed. | [mattpocock/skills](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/write-a-skill/SKILL.md) |

## Credits

I curate this collection, but I did not author most of these skills. Credit belongs to the maintainers and contributors of each linked upstream repository.

Use the source links for current documentation, licenses, release history, and contributions. The copies under [`skills/`](skills/) reflect the versions I use in this toolkit and may differ from their upstream projects over time.
