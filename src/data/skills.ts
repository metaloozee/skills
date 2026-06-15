export interface Skill {
  name: string
  description: string
  source: string
}

export interface Category {
  name: string
  description: string
  skills: Skill[]
}

export const categories: Category[] = [
  {
    name: "Planning & Discovery",
    description: "Define the problem before an agent starts changing code.",
    skills: [
      { name: "brainstorming", description: "Explore intent, requirements, constraints, and design choices before creative or implementation work begins.", source: "obra/superpowers" },
      { name: "grill-me", description: "Stress-test a plan through a focused interview that resolves assumptions and decision branches.", source: "mattpocock/skills" },
      { name: "grill-with-docs", description: "Challenge a plan against the project's domain language, context documents, and architecture decision records.", source: "mattpocock/skills" },
      { name: "product-thinking", description: "Plan user-facing changes to React Doctor's public surfaces, compatibility artifacts, documentation, and telemetry.", source: "millionco/react-doctor" },
      { name: "request-refactor-plan", description: "Interview the maintainer, break a refactor into small commits, and publish the plan as an issue.", source: "mattpocock/skills" },
      { name: "writing-plans", description: "Convert an approved specification into an implementation plan with exact files, commands, tests, and small execution steps.", source: "obra/superpowers" },
    ],
  },
  {
    name: "Engineering & Debugging",
    description: "Guide implementation, diagnosis, architecture work, and test strategy.",
    skills: [
      { name: "diagnose", description: "Debug difficult failures and performance regressions through reproduction, minimization, hypotheses, instrumentation, fixes, and regression tests.", source: "mattpocock/skills" },
      { name: "find-similar-functions", description: "Search JavaScript and TypeScript code for existing helpers before adding or refactoring reusable functionality.", source: "millionco/react-doctor" },
      { name: "improve", description: "Audit a codebase and produce prioritized implementation plans for another agent. Intentionally read-only.", source: "shadcn/improve" },
      { name: "improve-codebase-architecture", description: "Find refactoring opportunities that improve module boundaries, testability, domain alignment, and agent navigation.", source: "mattpocock/skills" },
      { name: "tdd", description: "Build features and fix bugs with a test-driven development red-green-refactor loop.", source: "mattpocock/skills" },
      { name: "zoom-out", description: "Step up a level of abstraction and map unfamiliar modules, callers, and domain relationships before editing.", source: "mattpocock/skills" },
    ],
  },
  {
    name: "React & Frontend Architecture",
    description: "React performance, component APIs, diagnostics, and native view transitions.",
    skills: [
      { name: "react-doctor", description: "Scan React work for lint, accessibility, bundle size, and architecture problems before a change is finished or committed.", source: "millionco/react-doctor" },
      { name: "vercel-composition-patterns", description: "Design scalable React component APIs with composition, compound components, providers, and fewer boolean props.", source: "vercel-labs/agent-skills" },
      { name: "vercel-react-best-practices", description: "Apply React and Next.js performance guidance for data fetching, bundles, rendering, rerenders, and server work.", source: "vercel-labs/agent-skills" },
      { name: "vercel-react-view-transitions", description: "Add native-feeling route, shared-element, list, and state transitions with React's View Transition APIs.", source: "vercel-labs/agent-skills" },
    ],
  },
  {
    name: "UI / UX & Accessibility",
    description: "Interfaces that feel deliberate, remain accessible, and perform well.",
    skills: [
      { name: "baseline-ui", description: "Apply a practical baseline for spacing, hierarchy, typography, primitives, responsive layout, and interaction states.", source: "ibelick/ui-skills" },
      { name: "emil-design-eng", description: "Apply Emil Kowalski's design-engineering approach to polish, component details, interaction, and animation decisions.", source: "emilkowalski/skill" },
      { name: "fixing-accessibility", description: "Audit and fix keyboard navigation, focus behavior, labels, form errors, color contrast, and ARIA usage.", source: "ibelick/ui-skills" },
      { name: "fixing-metadata", description: "Audit and fix titles, descriptions, canonical URLs, social cards, favicons, structured data, and crawler directives.", source: "ibelick/ui-skills" },
      { name: "fixing-motion-performance", description: "Diagnose stuttering animation, layout thrashing, expensive visual effects, and scroll-linked motion.", source: "ibelick/ui-skills" },
      { name: "impeccable", description: "Design, critique, polish, or harden frontend interfaces across visual hierarchy, UX, accessibility, responsiveness, motion, and theming.", source: "pbakaus/impeccable" },
      { name: "ui-skills-root", description: "Route a user interface task through the ui-skills CLI and load the smallest relevant design context.", source: "ibelick/ui-skills" },
      { name: "web-design-guidelines", description: "Review interface code against Vercel's current web design and user experience guidelines.", source: "vercel-labs/agent-skills" },
    ],
  },
  {
    name: "Reviews & Code Quality",
    description: "Check changes, remove accidental complexity, and keep review feedback actionable.",
    skills: [
      { name: "caveman-review", description: "Produce compressed code-review findings with a location, problem, severity, and concrete fix.", source: "juliusbrussee/caveman" },
      { name: "deslop", description: "Simplify recently changed code without altering behavior by removing needless abstractions, nesting, indirection, and dead scaffolding.", source: "millionco/react-doctor" },
      { name: "review", description: "Review a branch or change set against both repository standards and its originating specification.", source: "mattpocock/skills" },
    ],
  },
  {
    name: "Documentation & Knowledge",
    description: "Preserve context and help agents explain work to humans or other agents.",
    skills: [
      { name: "handoff", description: "Compact the current conversation and project state into a document another agent can continue from.", source: "mattpocock/skills" },
      { name: "teach", description: "Teach a concept inside the current workspace with examples grounded in the repository.", source: "mattpocock/skills" },
      { name: "writing-guidelines", description: "Review documentation and product prose against Vercel's current writing guidance.", source: "vercel-labs/agent-skills" },
    ],
  },
  {
    name: "Issues & Project Workflow",
    description: "Turn conversations and plans into trackable work on an issue tracker.",
    skills: [
      { name: "qa", description: "Run a conversational quality assurance session and file the reported problems as issues.", source: "mattpocock/skills" },
      { name: "to-issues", description: "Break a plan, specification, or PRD into independently deliverable vertical-slice issues.", source: "mattpocock/skills" },
      { name: "to-prd", description: "Turn the current context into a product requirements document and publish it to the project's issue tracker.", source: "mattpocock/skills" },
      { name: "triage", description: "Classify issues, request missing information, and move work through states such as ready for an agent or ready for a human.", source: "mattpocock/skills" },
    ],
  },
  {
    name: "Agent Communication",
    description: "Reduce conversational overhead while retaining technical information.",
    skills: [
      { name: "caveman", description: "Switch agent responses into a persistent, compressed communication style when token efficiency matters.", source: "juliusbrussee/caveman" },
      { name: "caveman-commit", description: "Write concise Conventional Commit messages with an imperative subject and only the context the diff cannot explain.", source: "juliusbrussee/caveman" },
      { name: "caveman-compress", description: "Compress natural-language agent memory files while preserving instructions, code, URLs, and document structure.", source: "juliusbrussee/caveman" },
    ],
  },
  {
    name: "Creating Skills",
    description: "Add new capabilities without turning a skill file into an unstructured prompt dump.",
    skills: [
      { name: "write-a-skill", description: "Create an agent skill with focused instructions, progressive disclosure, references, examples, and scripts when needed.", source: "mattpocock/skills" },
    ],
  },
]
