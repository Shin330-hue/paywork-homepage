# Next.js Minimal Payment Link Site Specification

## Overview
- **Site Name**: しんちゃんとあそぼう
- **Goal**: Build a minimal creator landing page with tip jar functionality using Stripe Payment Links, deployable via Vercel + GitHub.
- **Background**: Personal side project for sharing content about game/app development, AI usage, cooking recipes, hunting, volunteering, and more.

## Scope
- Single-page landing site.
- Payment: Tip jar with 5 fixed amounts (¥500, ¥1,000, ¥3,000, ¥5,000, ¥10,000).
- Deployment: Vercel with GitHub integration.

## Out of Scope
- On-site checkout (API/Checkout integration).
- User auth, membership, inventory, shipping.
- Webhook-based post-payment state updates.
- Custom amount input.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Repository**: GitHub
- **Payments**: Stripe Payment Links

## Pages
- `/` - Home (single page)

## Content / UI Requirements

### Header
- Fixed position with blur backdrop
- Site name with link to top
- "応援する" (Support) button linking to donation section

### Hero Section
- Site name: "しんちゃんとあそぼう"
- Description of content types
- CTA buttons: "コンテンツを見る" and "応援する"
- Gradient background with purple accent

### Contents Section
- 6 content category cards:
  - ゲーム・アプリ開発 (Game/App Development)
  - AI活用 (AI Usage)
  - 料理レシピ (Cooking Recipes)
  - 狩猟 (Hunting)
  - ボランティア (Volunteering)
  - その他いろいろ (Miscellaneous)
- Responsive grid: 1 column (mobile) → 2 columns (sm) → 3 columns (lg)
- Card hover effects with purple accent

### Donation Section (Tip Jar)
- 5 fixed amount buttons:
  - ¥500 (☕ Coffee)
  - ¥1,000 (🍵 Tea)
  - ¥3,000 (🍜 Ramen)
  - ¥5,000 (🍱 Bento)
  - ¥10,000 (🎉 Celebration)
- Each button links to external Stripe Payment Link
- Hover effects with purple accent

### Footer
- Site name and description
- Social links (X/Twitter, GitHub, YouTube) - placeholder
- Copyright notice

## Behavior
- Smooth scroll navigation between sections
- Donation buttons open Stripe Payment Links in new tab
- Payment URLs configurable via `src/config/payment.ts`
- Responsive design (mobile-first)

## Responsive Breakpoints
| Breakpoint | Width | Description |
|------------|-------|-------------|
| Default (mobile) | < 640px | Single column, compact spacing |
| `sm` | >= 640px | 2-column grid, larger text |
| `md` | >= 768px | Enhanced typography |
| `lg` | >= 1024px | 3-column grid for contents |

## Non-Functional Requirements
- Fast load (static rendering)
- SEO optimized (title, description, OG tags, Twitter cards)
- Accessibility (semantic HTML, proper headings, link labels)
- Dark mode design (gray-900 base with purple accents)

## Configuration

### Payment Links (`src/config/payment.ts`)
```typescript
export const DONATION_OPTIONS = [
  { amount: 500, label: '¥500', link: '#', emoji: '☕' },
  { amount: 1000, label: '¥1,000', link: '#', emoji: '🍵' },
  { amount: 3000, label: '¥3,000', link: '#', emoji: '🍜' },
  { amount: 5000, label: '¥5,000', link: '#', emoji: '🍱' },
  { amount: 10000, label: '¥10,000', link: '#', emoji: '🎉' },
];
```

## Future Extensibility
- Firebase Auth for user accounts
- Firestore for content management
- Webhook integration for payment tracking
- Blog/article section
- Custom amount input

## Resolved Questions
- **Payment provider**: Stripe
- **Billing type**: One-time (tip jar style)
- **Product name**: しんちゃんとあそぼう
- **Visual tone**: Dark, modern, creator-style with purple accents
- **Placeholder links**: Yes, using `#` until Stripe Payment Links are created
