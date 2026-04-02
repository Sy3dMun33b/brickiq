# BrickIQ Landing Page

A clean, modern landing page for BrickIQ, a UK property investing tool that helps users analyse deals quickly and avoid costly mistakes.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript for type safety
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with custom animations
- **Development**: Turbopack for fast builds
- **Linting**: ESLint with Next.js configuration
- **Build Tool**: PostCSS with Autoprefixer

## What This Page Includes

- **Hero**: clear value proposition in plain language
- **Problem**: why current deal analysis is slow and risky
- **Features**: core product capabilities
- **How It Works**: simple 3-step flow
- **Example Deal Output**: practical sample numbers
- **Testimonials**: trust-building social proof
- **Pricing**: Starter and Pro plans
- **Final CTA**: early access conversion section

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended package manager for this template)
- [Cursor IDE](https://cursor.sh/) (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd brickiq
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   bun run dev
   ```

4. **Open locally**
   - Visit [http://localhost:3000](http://localhost:3000)
   - If port 3000 is busy, Next.js will use the next available port (for example 3001)

## Project Structure

```
brickiq/
├── docs/                       # Documentation (ignored in git by default)
├── for-agent/                  # Agent helper files (ignored in git by default)
├── src/                       # Source code
│   ├── app/
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   └── favicon.ico        # App favicon
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.mjs            # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
└── package.json               # Dependencies and scripts
```

## Brand and Design Direction

- White background, dark text, and subtle neutral accents
- Minimal and professional UI with strong spacing and typography
- Practical, human tone (no hype language)
- In-page anchor links for smooth navigation between sections

## Testing

Run the test suite:

```bash
bun run test        # Watch mode
bun run test:run    # Single run
```

Tests use Vitest and React Testing Library.

## Environment

Copy `.env.example` to `.env.local` and fill in values. Use `getEnv()` from `src/lib/env.ts` for validated access. Extend the Zod schema when adding Clerk, Convex, or other services.

## Editing the Landing Page

- Main content sections are in `src/app/page.tsx`
- Global styles are in `src/app/globals.css`
- Site metadata (title/description/social tags) is in `src/app/layout.tsx`

## Deployment

### Build for Production
```bash
bun run build
```

### Start Production Server
```bash
bun run start
```

The template is ready to deploy to Vercel, Netlify, or any other hosting platform that supports Next.js.

## Contributing

This template is designed to be extended and customized. Feel free to:
- Add new components
- Modify the styling
- Extend functionality
- Share your improvements

## License

This project is open source and available under the [MIT License](LICENSE).
