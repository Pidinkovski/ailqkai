# ailqkai

Working on AI setup service.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel (deployment)

## Development

```bash
npm install
npm run dev
```

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (navbar + footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── services/page.tsx   # Services page
│   ├── about/page.tsx      # About page
│   ├── faq/page.tsx        # FAQ page
│   ├── contact/page.tsx    # Contact form
│   └── api/contact/route.ts # Contact form API
└── components/
    ├── Navbar.tsx           # Navigation bar
    └── Footer.tsx           # Footer
```
