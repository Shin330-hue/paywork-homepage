import { SITE_CONFIG } from '@/config/payment';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <nav className="flex items-center justify-between gap-2">
          <a
            href="/"
            className="text-base sm:text-xl font-bold text-white hover:text-purple-400 transition-colors truncate"
          >
            {SITE_CONFIG.name}
          </a>
          <a
            href="#donation"
            className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs sm:text-sm font-medium transition-colors"
          >
            応援する
          </a>
        </nav>
      </div>
    </header>
  );
}
