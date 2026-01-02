# Architecture Design Document

## Project: しんちゃんとあそぼう

### Document Info
- **Version**: 1.0
- **Created**: 2026-01-02
- **Framework**: Next.js 16 (App Router)

---

## 1. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Next.js Application                     │    │
│  │                                                      │    │
│  │  ┌──────────────────────────────────────────────┐   │    │
│  │  │                 App Router                    │   │    │
│  │  │                                              │   │    │
│  │  │  ┌─────────┐  ┌─────────┐  ┌─────────────┐  │   │    │
│  │  │  │ layout  │  │  page   │  │  globals    │  │   │    │
│  │  │  │  .tsx   │  │  .tsx   │  │   .css      │  │   │    │
│  │  │  └─────────┘  └─────────┘  └─────────────┘  │   │    │
│  │  └──────────────────────────────────────────────┘   │    │
│  │                        │                             │    │
│  │  ┌─────────────────────┼─────────────────────────┐  │    │
│  │  │              Components                        │  │    │
│  │  │                     │                          │  │    │
│  │  │  ┌────────┐ ┌──────┴──────┐ ┌──────────────┐  │  │    │
│  │  │  │ Header │ │    Hero     │ │   Contents   │  │  │    │
│  │  │  └────────┘ └─────────────┘ └──────────────┘  │  │    │
│  │  │                                                │  │    │
│  │  │  ┌──────────────┐  ┌──────────────────────┐   │  │    │
│  │  │  │   Donation   │  │       Footer         │   │  │    │
│  │  │  └──────────────┘  └──────────────────────┘   │  │    │
│  │  └────────────────────────────────────────────────┘  │    │
│  │                        │                             │    │
│  │  ┌─────────────────────┼─────────────────────────┐  │    │
│  │  │               Config                           │  │    │
│  │  │                     │                          │  │    │
│  │  │            ┌────────┴────────┐                 │  │    │
│  │  │            │   payment.ts    │                 │  │    │
│  │  │            └─────────────────┘                 │  │    │
│  │  └────────────────────────────────────────────────┘  │    │
│  └─────────────────────────────────────────────────────┘    │
│                              │                               │
└──────────────────────────────┼───────────────────────────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Stripe Payment     │
                    │      Links          │
                    │  (External Service) │
                    └─────────────────────┘
```

---

## 2. Directory Structure

```
peycheckwork/
├── docs/
│   ├── nextjs-payment-site-spec.md    # Specification document
│   └── architecture.md                 # This file
├── public/                             # Static assets
│   ├── favicon.ico
│   └── images/                         # Optimized images
│       ├── og-image.png                # OGP/SNS share image
│       ├── hero-bg.png                 # Hero section background
│       ├── avatar.png                  # Profile avatar
│       ├── icon-game.png               # Game/App icon
│       ├── icon-ai.png                 # AI icon
│       ├── icon-cooking.png            # Cooking icon
│       ├── icon-hunting.png            # Hunting icon
│       ├── icon-volunteer.png          # Volunteer icon
│       ├── icon-misc.png               # Misc icon
│       ├── favicon.png                 # Favicon source
│       └── donation-bg.png             # Donation section bg
├── scripts/
│   └── optimize-images.mjs             # Image optimization script
├── src/
│   ├── app/                            # Next.js App Router
│   │   ├── layout.tsx                  # Root layout (SEO, fonts)
│   │   ├── page.tsx                    # Home page
│   │   └── globals.css                 # Global styles
│   ├── components/                     # React components
│   │   ├── Header.tsx                  # Fixed header navigation
│   │   ├── Hero.tsx                    # Hero section
│   │   ├── Contents.tsx                # Content categories
│   │   ├── Donation.tsx                # Tip jar section
│   │   └── Footer.tsx                  # Footer
│   └── config/                         # Configuration
│       └── payment.ts                  # Payment options & site config
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tailwind.config.ts (auto-generated)
```

---

## 3. Component Design

### 3.1 Component Hierarchy

```
RootLayout (layout.tsx)
└── Home (page.tsx)
    ├── Header
    ├── main
    │   ├── Hero
    │   ├── Contents
    │   └── Donation
    └── Footer
```

### 3.2 Component Details

| Component | Type | Description |
|-----------|------|-------------|
| `Header` | Server Component | Fixed navigation bar with site title and CTA |
| `Hero` | Server Component | Landing section with site intro and buttons |
| `Contents` | Server Component | Grid of content category cards |
| `Donation` | Server Component | Tip jar with 5 amount options |
| `Footer` | Server Component | Site info, social links, copyright |

### 3.3 Data Flow

```
payment.ts (Config)
     │
     ├──────────────────┬──────────────────┐
     ▼                  ▼                  ▼
  Header            Donation            Footer
(SITE_CONFIG)   (DONATION_OPTIONS)   (SITE_CONFIG)
```

---

## 4. Configuration Schema

### 4.1 Site Configuration

```typescript
// src/config/payment.ts

interface SiteConfig {
  name: string;        // Site display name
  description: string; // Site description for SEO
  author: string;      // Author name for copyright
}

export const SITE_CONFIG: SiteConfig = {
  name: 'しんちゃんとあそぼう',
  description: 'ゲーム・アプリ開発、AI活用、料理レシピなど...',
  author: 'しんちゃん',
};
```

### 4.2 Donation Options

```typescript
// src/config/payment.ts

interface DonationOption {
  amount: number;   // Amount in JPY
  label: string;    // Display label (e.g., "¥500")
  link: string;     // Stripe Payment Link URL
  emoji: string;    // Visual emoji icon
}

export const DONATION_OPTIONS: DonationOption[] = [
  { amount: 500,   label: '¥500',    link: '#', emoji: '☕' },
  { amount: 1000,  label: '¥1,000',  link: '#', emoji: '🍵' },
  { amount: 3000,  label: '¥3,000',  link: '#', emoji: '🍜' },
  { amount: 5000,  label: '¥5,000',  link: '#', emoji: '🍱' },
  { amount: 10000, label: '¥10,000', link: '#', emoji: '🎉' },
];
```

---

## 5. Styling Architecture

### 5.1 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary BG | `gray-900` (#111827) | Page background |
| Secondary BG | `gray-800` (#1f2937) | Cards, footer |
| Accent | `purple-600` (#9333ea) | Buttons, hovers |
| Text Primary | `white` | Headings |
| Text Secondary | `gray-300`, `gray-400` | Body text |
| Border | `gray-700`, `gray-800` | Card borders |

### 5.2 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Default | < 768px | Single column, stacked layout |
| `md` | >= 768px | 2-column grid, side-by-side elements |

### 5.3 CSS Architecture

```css
/* globals.css */
@import "tailwindcss";

html {
  scroll-behavior: smooth;  /* Smooth anchor scrolling */
}

body {
  background: #111827;      /* gray-900 */
  color: #f3f4f6;           /* gray-100 */
}
```

---

## 6. SEO & Metadata

### 6.1 Metadata Configuration

```typescript
// src/app/layout.tsx

export const metadata: Metadata = {
  title: 'しんちゃんとあそぼう',
  description: 'ゲーム・アプリ開発、AI活用、料理レシピなど...',
  openGraph: {
    title: 'しんちゃんとあそぼう',
    description: '...',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'しんちゃんとあそぼう',
    description: '...',
  },
};
```

---

## 7. Deployment Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Developer  │────▶│    GitHub    │────▶│    Vercel    │
│   Machine    │     │  Repository  │     │   Hosting    │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                     │
       │                    │                     │
    Local Dev          Push/PR              Auto Deploy
   (npm run dev)                           (Production)
```

### 7.1 Build Process

1. Static Site Generation (SSG) - All pages pre-rendered
2. No server-side runtime required
3. CDN distribution via Vercel Edge Network

---

## 8. Future Architecture (Phase 2)

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Application                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Pages     │  │    API      │  │     Components      │  │
│  │  (SSG/SSR)  │  │   Routes    │  │                     │  │
│  └─────────────┘  └──────┬──────┘  └─────────────────────┘  │
└──────────────────────────┼───────────────────────────────────┘
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │  Firebase   │ │  Firestore  │ │   Stripe    │
    │    Auth     │ │   Database  │ │   Webhooks  │
    └─────────────┘ └─────────────┘ └─────────────┘
```

### Planned Features:
- User authentication (Firebase Auth)
- Content management (Firestore)
- Payment tracking (Stripe Webhooks)
- Blog/Article system
