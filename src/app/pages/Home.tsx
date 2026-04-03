import { BookOpen, Palette, TrendingUp, Music, History, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router';

const logoImage = '/logo.png';

export function Home() {
  const categories = [
    {
      id: 'literature',
      name: '日本の古典文学',
      description: '千年前の恋愛や人間ドラマから学ぶ',
      icon: <BookOpen className="w-6 h-6" />,
      color: '#FFC2D1',
      count: 12,
    },
    {
      id: 'art',
      name: '西洋絵画',
      description: '名画に隠された物語と美術史',
      icon: <Palette className="w-6 h-6" />,
      color: '#C3B7F5',
      count: 8,
    },
    {
      id: 'economy',
      name: '政治・経済',
      description: '世界を動かす仕組みを理解する',
      icon: <TrendingUp className="w-6 h-6" />,
      color: '#B3E5FC',
      count: 6,
    },
    {
      id: 'music',
      name: 'クラシック音楽',
      description: '作曲家の人生と名曲の魅力',
      icon: <Music className="w-6 h-6" />,
      color: '#FFE5A0',
      count: 10,
    },
    {
      id: 'history',
      name: '世界史',
      description: '歴史を知れば、今が見える',
      icon: <History className="w-6 h-6" />,
      color: '#B8F3D8',
      count: 7,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-20 left-10 text-white/30 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute top-40 right-20 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute bottom-40 left-1/4 text-white/25 animate-pulse delay-200">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="absolute top-60 right-1/3 text-white/20 animate-pulse delay-300">
        <Sparkles className="w-7 h-7" />
      </div>
      <div className="absolute bottom-60 right-10 text-white/30 animate-pulse">
        <Star className="w-6 h-6 fill-current" />
      </div>

      {/* Hero Section with Logo */}
      <section className="relative py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <img 
              src={logoImage} 
              alt="大人の教養白書" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            知的好奇心を、もっと楽しく。
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            古典文学、絵画、音楽、歴史、経済。<br />
            大人が知りたい教養を、わかりやすく、面白く。
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              カテゴリーから探す
            </h2>
            <p className="text-lg text-white/70">
              気になるテーマをクリックしてください
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative"
              >
                <div 
                  className="relative overflow-hidden rounded-3xl p-8 transition-all hover:scale-105 hover:shadow-2xl border-4 border-white"
                  style={{ backgroundColor: category.color }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white shadow-lg"
                      style={{ backgroundColor: '#1a2744' }}
                    >
                      <div style={{ color: category.color }}>
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-xl mb-2 text-[#1a2744] text-center">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#1a2744]/70 text-center mb-3">
                    {category.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 bg-white/90 rounded-full text-sm font-medium text-[#1a2744]">
                      {category.count}記事
                    </span>
                  </div>

                  {/* Decorative stars */}
                  <div className="absolute top-3 right-3 text-white/50">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="absolute bottom-3 left-3 text-white/40">
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              おすすめの記事
            </h2>
            <p className="text-lg text-white/70">
              まずはこの記事から始めてみませんか？
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <Link
              to="/article/literature/genji"
              className="group relative"
            >
              <div className="bg-[#FFB3D9] rounded-3xl p-8 border-4 border-white hover:scale-105 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1a2744] rounded-2xl flex items-center justify-center text-[#FFB3D9] border-4 border-white shadow-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1a2744]/70">日本の古典文学</div>
                    <h3 className="text-2xl font-bold text-[#1a2744]">源氏物語</h3>
                  </div>
                </div>
                <p className="text-[#1a2744]/80 mb-4 leading-relaxed">
                  千年愛される、究極の恋愛ストーリー。光源氏の恋愛模様から学ぶ、人間関係のサバイバル術。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-[#1a2744] font-medium">
                    恋愛
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-[#1a2744] font-medium">
                    宮廷
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-[#1a2744] font-medium">
                    人間ドラマ
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-white/50">
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link
              to="/article/art/monalisa"
              className="group relative"
            >
              <div className="bg-[#D4B8FF] rounded-3xl p-8 border-4 border-white hover:scale-105 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1a2744] rounded-2xl flex items-center justify-center text-[#D4B8FF] border-4 border-white shadow-lg">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1a2744]/70">西洋絵画</div>
                    <h3 className="text-2xl font-bold text-[#1a2744]">モナ・リザ</h3>
                  </div>
                </div>
                <p className="text-[#1a2744]/80 mb-4 leading-relaxed">
                  世界で最も有名な微笑み。レオナルド・ダ・ヴィンチが描いた謎多き女性の正体とは？
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-[#1a2744] font-medium">
                    ルネサンス
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-[#1a2744] font-medium">
                    肖像画
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-[#1a2744] font-medium">
                    ダ・ヴィンチ
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-white/50">
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center border-4 border-white bg-gradient-to-br from-[#FFB3D9] via-[#D4B8FF] to-[#B8E6E1]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
                さあ、始めよう
              </h2>
              <p className="text-lg text-[#1a2744]/80 mb-8">
                左のサイドバーから、気になるカテゴリーを選んでください
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg border-4 border-[#1a2744]">
                <Sparkles className="w-5 h-5 text-[#1a2744]" />
                <span className="font-bold text-[#1a2744]">記事は随時追加中！</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 text-white/30">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <div className="absolute bottom-6 left-6 text-white/30">
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}