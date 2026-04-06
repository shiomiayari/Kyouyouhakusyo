import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan145() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-16 bg-[#1B2B44]">
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-96 right-1/3 text-white/20 animate-pulse delay-200">
        <Sparkles className="w-7 h-7" />
      </div>

      {/* Back Button */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/article/literature/makuranososhi"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A3B5A] text-white rounded-xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            枕草子一覧に戻る
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#FFC2D1] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第145段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            うつくしきもの
          </h1>
          <p className="text-xl text-white/80">
            日本の「カワイイ文化」の原点。小さな命やミニチュアへの愛あふれる名段。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFC2D1]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`うつくしきもの。瓜にかきたるちごの顔。

雀の子の、ねず鳴きすれば、をどり来る。

二つ三つばかりなるちごの、急ぎて這ひ来る道に、いと小さき塵のありけるを、目ざとく見つけて、いとをかしき指（および）にとらへて、大人などに見せたる、いとうつくし。

頭（かしら）は尼そぎなるちごの、目に髪の覆へるを、かきはらはずて、うち傾きて物など見たるも、うつくし。

大きにはあらぬ、班猫（はんめう）の、いとをかし。

雛（ひひな）の調度。蓮（はちす）の浮き葉のいと小さきを、池より取り上げたれば、いとをかし。

葵（あふひ）の、いと小さき。何も何も、小さきものは、みなうつくし。`}
            </p>
          </div>
        </div>
      </section>

      {/* 現代語訳 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#FFE5A0]" />
            現代語訳
          </h2>
          <div className="bg-gradient-to-br from-[#FFE5A0] to-[#FFC2D1] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                <strong>かわいらしいもの。</strong>
              </p>
              <p>
                瓜（うり）の表面に描いた、幼子の顔。
              </p>
              <p>
                雀（すずめ）の子が、人間がネズミの鳴き真似（チッチッという音）をすると、ピョンピョン踊るように寄って来ること。
              </p>
              <p>
                二、三歳くらいの幼児が、急いで這って来る途中に、とても小さなチリが落ちているのを、目ざとく見つけて、すごく可愛らしい指先でつまんで、大人などに見せている様子は、本当にかわいい。
              </p>
              <p>
                おかっぱ頭（尼そぎ）の幼い子が、目に髪がかかっているのに、それを手で払いのけようともせず、首をかしげて物を見ている様子も、本当にかわいい。
              </p>
              <p>
                （それほど）大きくはない、ハンミョウ（斑猫。ここでは美しい模様の猫か虫）が、とても面白い。
              </p>
              <p>
                雛人形（ひな人形）の、ミニチュアの道具たち。蓮（はす）の浮き葉の、すごく小さいのを、池からすくい上げてみたのも、とても趣がある。
              </p>
              <p>
                葵（あおい）の葉の、すごく小さいもの。
              </p>
              <p>
                （とにかく）何であっても、小さいものは、みんなみんな、かわいらしいわ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 詳しい解説 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#C3B7F5]" />
            詳しい解説
          </h2>
          <div className="space-y-6">
            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💖 「小さいもの＝正義」という定義</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                最後に言い切っている「何も何も、小さきものは、みなうつくし」というフレーズは、日本の「カワイイ文化」の原点とも言われています。大きく立派なものよりも、ミニチュアの世界や、儚いものに価値を見出す清少納言の感性が凝縮されています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">👶 「幼児」への細やかな観察眼</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                チリを見つけて大人に見せるしぐさや、髪を払わずに首をかしげる様子など、実際に子供をじっと見守っていないと書けないような、リアリティ溢れる描写です。彼女が宮廷の喧騒の中でも、こうした「小さな命の輝き」を愛でていたことがわかります。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🏠 「おままごと」のような世界観</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                雛人形の道具（ミニチュア家具）を愛でる感覚は、現代の私たちがシルバニアファミリーやカプセルトイ（ガチャガチャ）を「かわいい！」と喜ぶ感覚と全く同じです。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#C3B7F5] mb-4">✨ 五感で楽しむ「うつくし」</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                雀を呼ぶ音、チリをつまむ指先の感覚、池から上げた蓮の葉の質感。清少納言は、視覚だけでなく、動きや感触を含めた「生きている可愛さ」を全肯定しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              to="/article/literature/makuranososhi"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2A3B5A] text-white rounded-2xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
              一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
