import Image from 'next/image';
import { SITE_CONFIG } from '@/config/payment';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 sm:pt-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/30 to-gray-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-4 sm:mb-6">
          <Image
            src="/images/avatar.png"
            alt={SITE_CONFIG.author}
            width={120}
            height={120}
            className="mx-auto rounded-full border-4 border-purple-500/50 shadow-lg shadow-purple-500/20 w-24 h-24 sm:w-32 sm:h-32"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          {SITE_CONFIG.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="#contents"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm sm:text-base font-medium transition-colors border border-white/20"
          >
            コンテンツを見る
          </a>
          <a
            href="#donation"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm sm:text-base font-medium transition-colors"
          >
            応援する
          </a>
        </div>
      </div>
    </section>
  );
}
