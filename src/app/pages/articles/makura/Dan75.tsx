import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan75() {
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
          <div className="inline-block px-4 py-2 bg-[#FFE5A0] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第75段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            ありがたきもの
          </h1>
          <p className="text-xl text-white/80">
            「完璧なものなんてない」という現実を突く、シビアで鋭い人間観察。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFE5A0]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`ありがたきもの。舅（しうと）にほめらるる婿。また、姑（しうとめ）に思はるる嫁の君。

毛のよく抜くる銀（しろかね）の毛抜。

主（あるじ）そしらぬ従者（づさ）。

つゆの癖なき。かたち心ありさま、すぐれて、世にふるまで、いささかのきずなき。

同じ所に住む人の、かたみに恥ぢかはし、いささかのひまなく、心づかひしたる、つひに見えぬこそ、かたけれ。

物語、集など書き写すに、墨つけぬ。いとよき草子（さうし）などは、いと惜しんで書けど、必ずこそ汚るれ。

男、女の仲も、いとはかなし。`}
            </p>
          </div>
        </div>
      </section>

      {/* 現代語訳 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#B8F3D8]" />
            現代語訳
          </h2>
          <div className="bg-gradient-to-br from-[#FFE5A0] to-[#B8F3D8] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                <strong>めったにないもの（理想論でしかないもの）。</strong>
              </p>
              <p>
                舅（妻の父）にベタ褒めされるお婿さん。また、姑（夫の母）に心から大切にされるお嫁さん。
              </p>
              <p>
                毛がよく抜ける銀製の毛抜き。（※当時の銀は柔らかく、精度が悪かったため）
              </p>
              <p>
                自分の主人の悪口を一切言わない従者。
              </p>
              <p>
                ほんの少しの癖もない人。容姿も性格も立ち居振る舞いも完璧で、長く世間を渡ってきても、これっぽっちの欠点も見当たらないような人。
              </p>
              <p>
                同じ屋敷に住んでいる者同士が、互いに遠慮し合い、一瞬の油断もなく、ずっと気遣いをし続けている様子なんて、最後まで維持されることはまずあり得ない（必ずボロが出るものだわ）。
              </p>
              <p>
                物語や歌集などを書き写す時に、ページを墨で汚さないこと。とても上等な本などは、本当に大切に扱って書くのだけれど、どうしても汚れてしまうものなのよね。
              </p>
              <p>
                男と女の仲というのも、本当に（長く続くことは）めったにない、儚いものだわ。
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
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🏠 「嫁姑問題」は永遠のテーマ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                冒頭に家族の人間関係を持ってくるあたり、清少納言のリアルな視点が光ります。「そんな円満な家庭、見たことないわ」という彼女の冷ややかなツッコミが聞こえてきそうです。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🔧 「道具」へのこだわり</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「毛の抜ける毛抜き」という非常に具体的な不満。彼女は身の回りの道具の「機能性」にも厳しく、現代でいう「使い勝手の悪いガジェット」へのストレスと同じ感覚を持っています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🗣️ 「SNSの裏垢」のような心理</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「主人の悪口を言わない従者なんていない」と断言する潔さ。表面的には従順でも、裏では何を言っているか分からないという、人間の本質を突いています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#C3B7F5] mb-4">🙅‍♀️ 「完璧」の否定</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                どんなに気をつけていても本を汚してしまうことや、どんなに美男美女でも欠点はあること、そして男女の仲の移ろいやすさ。清少納言は「完璧な理想」を並べることで、逆に<strong className="text-[#FFE5A0]">「不完全なのが人間だよね」</strong>という諦念と愛着を表現しているのです。
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
