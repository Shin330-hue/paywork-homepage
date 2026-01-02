import Image from 'next/image';

const CONTENT_ITEMS = [
  {
    icon: '/images/icon-game.png',
    title: 'ゲーム・アプリ開発',
    description: 'ゲームやアプリの開発ノウハウ、技術的なTipsを共有しています。',
  },
  {
    icon: '/images/icon-ai.png',
    title: 'AI活用',
    description: 'ChatGPTやその他のAIツールの使い方、プロンプトエンジニアリングなど。',
  },
  {
    icon: '/images/icon-cooking.png',
    title: '料理レシピ',
    description: '簡単で美味しい料理レシピを紹介。開発の合間の息抜きに。',
  },
  {
    icon: '/images/icon-hunting.png',
    title: '狩猟',
    description: '狩猟の経験や知識、ジビエ料理、自然との向き合い方について。',
  },
  {
    icon: '/images/icon-volunteer.png',
    title: 'ボランティア',
    description: '地域活動やボランティア経験、社会貢献についての記録。',
  },
  {
    icon: '/images/icon-misc.png',
    title: 'その他いろいろ',
    description: '日々の発見や面白いと思ったこと、雑多なコンテンツ。',
  },
];

export default function Contents() {
  return (
    <section id="contents" className="py-16 sm:py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
          コンテンツ
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-xl mx-auto">
          いろんなジャンルのコンテンツを発信しています
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CONTENT_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
