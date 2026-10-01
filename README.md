# ByteSpace New

A responsive landing page for **ByteSpace**, an online course platform where learners discover courses and creators publish their own. Built with Next.js (App Router) and Tailwind CSS, based on a 1440px-wide Figma design.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- **Styling:** Tailwind CSS with custom design tokens (`shuttle`, `lime`, `brand`, `ink`, `font-heading`)
- **Fonts:**
  - Poppins via `next/font/google` (weights 500, 600, exposed as `--font-poppins`)
  - Satoshi and Clash Display via Fontshare (loaded in `app/layout.tsx`)
- **Images:** `next/image` with assets in `public/images` and `public/icons`

## Getting Started

```bash
npm install
npm run dev
# or: yarn dev / pnpm dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

Production build:

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, viewport, theme color
  page.tsx            # Home page: composes all sections
  globals.css         # Tailwind setup, design tokens, utilities (bg-grid, container-page)
components/
  Navbar.tsx
  Hero.tsx            # Headline, search form, student visual, stat cards
  StatCards.tsx       # CategoryStatCard, LearningProgressCard, HappyStudentsCard
  LogoStrip.tsx       # Partner / trust logos
  CoursesSection.tsx  # Category tabs (client component) + course grid
  CourseCard.tsx      # Single course card + Course type
  LearningPaths.tsx
  GrowthSection.tsx
  CreatorCta.tsx      # "Join as Creator" call to action with 3D ornaments
  Testimonials.tsx
  Footer.tsx
public/
  images/             # Hero visuals, course thumbnails, ornaments
  icons/              # SVG icons (e.g. search.svg)
```

## Page Layout

`app/page.tsx` renders the sections in this order:

1. **Navbar + Hero** (wrapped in `bg-grid`, `overflow-hidden`)
2. **LogoStrip**
3. **CoursesSection** (`id="courses"`, the Hero search form links to `#courses`)
4. **LearningPaths**
5. **GrowthSection**
6. **CreatorCta**
7. **Testimonials**
8. **Footer**

## Key Implementation Notes

### Hero

- Text and search form are in normal flow and centered.
- The student visual is built on a fixed **1440×512 design canvas**, scaled down on smaller screens with `scale-[0.48]`, `sm:scale-[0.6]`, `md:scale-75`, `lg:scale-100`. The wrapper height is adjusted per breakpoint to match.
- `bgclip.png` is the 3D ornament background, positioned absolutely behind the content (`-z-10`).
- `Image` uses the `preload` prop for above-the-fold images.

### CoursesSection

- Client component (`"use client"`), keeps the active category in state.
- Categories are laid out in rows of 8 / 6 / 4 (+ "More") to match the design.
- Tabs use `role="tablist"` / `role="tab"` / `aria-selected` for accessibility.
- Course grid: 1 column on mobile, 2 on `sm`, 3 on `lg`.

### CreatorCta

- Ornaments are edge-pinned: the left group uses `left`, the right group uses `right`, so they stay at the screen edges on wide displays instead of clustering in the middle.
- Offsets are calculated from the 1440px design (left: `720 + x`, right: `720 - x - size`).
- On small and medium screens each group is scaled from its own corner (`origin-top-left` / `origin-top-right`).

## Design Conventions

- Reference design width: **1440px**.
- Use the shared `container-page` utility for horizontal page padding and max width.
- Headings use `font-heading`, body copy uses the Satoshi stack.
- Primary accent is `lime` (buttons, selected tabs), brand color is `brand`, theme color is `#003be2`.
- Existing design patterns and spacing values should be preserved when editing sections.

## Adding a New Course

Edit the `courses` array in `components/CoursesSection.tsx`:

```ts
{ title: "Course title", image: "/images/courses/your-image.png" }
```

Then add the image to `public/images/courses/`.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
