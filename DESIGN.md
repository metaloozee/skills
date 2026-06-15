<!-- SEED: re-run `$impeccable document` once there's code to capture the actual tokens and components. -->

# Design System: Skills

## 1. Overview

**Creative North Star: "The Developer's Workbench"**

Clean, purposeful, and unadorned — like a well-organized tool wall. The Skills landing page communicates curatorial authority through restraint: generous whitespace, deliberate typographic hierarchy, and motion that reveals structure rather than decorating it. References: Stripe's editorial clarity and Apple's precision engineering. Explicitly rejects the over-designed AI aesthetic — no gradient text, no glassmorphism, no excessive rounding.

**Key Characteristics:**
- Generous whitespace with tight internal relationships
- Typography-led hierarchy; layout serves the type
- Purposeful motion that reveals information architecture
- Warm charcoal anchor with restrained accent color

## 2. Colors

**Character:** Minimal, warm-neutral restrained palette. Body background stays at chroma-0 white to avoid "AI cream" territory. A warm charcoal provides structure and depth as the primary text/surface anchor.

**The Restrained Rule.** A single accent color carries ≤10% of any surface. Its rarity is the point.

### Primary (Accent)
- **[To be resolved during implementation]**: Used sparingly for interactive elements, select highlights, and wayfinding. Never decorative.

### Neutral
- **Warm Charcoal** (`[to be resolved]`): Primary text and high-emphasis surfaces.
- **Off-white** (`[to be resolved]`): Body background. Chroma-0 or minimal chroma toward warm.
- **Muted Warm Gray** (`[to be resolved]`): Secondary text, borders, dividers.

## 3. Typography

**Direction:** Single sans-serif family. Technical precision with warmth.

**Character:** Clean, legible, utilitarian. Not geometric (too cold), not humanist (too soft). A neo-grotesque or technical sans with good language coverage.

### Hierarchy
- **Display** ([weight TBD], `clamp(2.25rem, 5vw, 4rem)`): Hero headings. Slight negative tracking, `text-wrap: balance`.
- **Headline** ([weight TBD], `[size]`): Section headings.
- **Body** ([weight TBD], `[size]`): Prose. 65–75ch measure.
- **Label/Mono** ([weight TBD], `[size]`): Code blocks, technical references, metadata.

## 4. Elevation

Flat surfaces at rest. Layering via subtle tonal shifts and borders, not shadows. Depth is reserved for interactive states (hover, active). Choreographed motion provides the sense of spatial structure.

## 5. Components

*[Omitted in seed mode. Components will be documented once implemented.]*

## 6. Do's and Don'ts

### Do:
- **Do** use generous whitespace to create breathing room
- **Do** let typography lead the hierarchy
- **Do** use motion to reveal structure (scroll-driven reveals, staggered entries)
- **Do** keep the palette restrained — one accent, well-placed

### Don't:
- **Don't** use gradient text, glassmorphism, or excessive border-radius
- **Don't** tint backgrounds toward warm/cream — keep neutrals clean
- **Don't** use side-stripe borders, numbered section markers, or tiny uppercase kickers
- **Don't** pair border + wide shadow on the same element
- **Don't** over-round cards (max 12–16px radius)
