import { SITE_CONFIG } from '@/config/payment';

const SOCIAL_LINKS = [
  { name: 'Twitter / X', href: '#', icon: '𝕏' },
  { name: 'GitHub', href: '#', icon: '🐙' },
  { name: 'YouTube', href: '#', icon: '▶️' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 bg-gray-800 border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-3 text-gray-500 text-xs space-y-0.5">
              <p>返金方針: 原則返金不可／誤決済は連絡で対応</p>
              <p>
                連絡先:{' '}
                <a
                  href="mailto:shinsukedev.apps@gmail.com"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  shinsukedev.apps@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-700 hover:bg-purple-600 rounded-full text-base sm:text-lg transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {currentYear} {SITE_CONFIG.author}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
