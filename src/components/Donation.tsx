import Image from 'next/image';
import { DONATION_OPTIONS } from '@/config/payment';

export default function Donation() {
  return (
    <section id="donation" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/donation-bg.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-800/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Donation Box */}
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gray-700/50 shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">☕</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              応援する
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              コンテンツが役に立った、面白かったと思ったら、
              コーヒー1杯分から応援していただけると嬉しいです！
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 max-w-3xl mx-auto">
            {DONATION_OPTIONS.map((option) => (
              <a
                key={option.amount}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-3 sm:p-4 bg-gray-800/80 rounded-lg sm:rounded-xl border border-gray-700/50 hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform">
                  {option.emoji}
                </span>
                <span className="text-sm sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  {option.label}
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs sm:text-sm mt-6">
            ※ Stripeを通じて安全に決済されます
          </p>
        </div>
      </div>
    </section>
  );
}
