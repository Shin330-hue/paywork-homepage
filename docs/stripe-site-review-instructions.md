# Stripe Site Review Implementation Instructions

## Purpose
- Add contact and refund policy details to the LP so Stripe can verify the business website.

## Approved Copy
- Contact: shinsukedev.apps@gmail.com
- Refund policy: 原則返金不可／誤決済は連絡で対応
- Description: このページはコンテンツ制作の応援（投げ銭）ページです。

## Implementation Targets
1) `src/components/Donation.tsx`
   - Add a short info block under the donation buttons.
   - Use small, readable text.
   - Include a `mailto:shinsukedev.apps@gmail.com` link.
   - Display the three lines:
     - このページはコンテンツ制作の応援（投げ銭）ページです。
     - 返金方針: 原則返金不可／誤決済は連絡で対応
     - 連絡先: shinsukedev.apps@gmail.com

2) `src/components/Footer.tsx` (optional but recommended)
   - Add contact + refund policy under the site description or above social links.
   - Keep styling consistent with existing footer text.

## UI Notes
- Preserve the dark/purple theme.
- Keep typography small (`text-xs` to `text-sm`), with adequate contrast.
- Do not use images for these details; text must be visible in HTML.
