// Stripe Payment Links Configuration
// Replace '#' with actual Stripe Payment Links when ready

export interface DonationOption {
  amount: number;
  label: string;
  link: string;
  emoji: string;
}

export const DONATION_OPTIONS: DonationOption[] = [
  { amount: 500, label: '¥500', link: '#', emoji: '☕' },
  { amount: 1000, label: '¥1,000', link: '#', emoji: '🍵' },
  { amount: 3000, label: '¥3,000', link: '#', emoji: '🍜' },
  { amount: 5000, label: '¥5,000', link: '#', emoji: '🍱' },
  { amount: 10000, label: '¥10,000', link: '#', emoji: '🎉' },
];

export const SITE_CONFIG = {
  name: 'しんちゃんとあそぼう',
  description: 'ゲーム・アプリ開発、AI活用、料理レシピなど、いろんなことを発信中',
  author: 'しんちゃん',
};
