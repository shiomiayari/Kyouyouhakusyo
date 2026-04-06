import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan22() {
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
          <div className="inline-block px-4 py-2 bg-[#C3B7F5] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第22段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            すさまじきもの
          </h1>
          <p className="text-xl text-white/80">
            期待外れや場違いなものがもたらす「ガッカリ感」を描く。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#C3B7F5]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`すさまじきもの。昼ほゆる犬。春の紅梅（かうばい）。

宵（よひ）に、人待つ夜、門（かど）を叩く音。いと心ときめきて、人出だして見すれば、こと人にて、手にある物など持て来たる。

人のもとに、あやしきことありて、文（ふみ）やり、たづねなどするに、心得（こころえ）顔に、さるべき事も言ひ送らぬ。

除目（ぢもく）に司（つかさ）得ぬ人の家。

除目の明くる日、いと心もとなう、昨日の車、一昨日（をとつひ）の車の立ちし跡を、かきつづりて、人おこせぬ所を見わたして、門（かど）などの、あやしう引き放ちたる。

人の召しにあひて、物語などして、いと思ふ所ある人の、寝たる。

子（こ）なき人の、子を愛（め）づる。`}
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
          <div className="bg-gradient-to-br from-[#B3E5FC] to-[#B8F3D8] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                <strong>興ざめなもの（ガッカリするもの）。</strong>
              </p>
              <p>
                真昼間に吠えている犬。春になって（他の花が咲き揃っているのに）まだ咲き残っている紅梅。
              </p>
              <p>
                夜、恋人を待っている時に、門を叩く音。すごく胸をときめかせて、召使いを出して見に行かせたら、全然別の人で、注文していた品物か何かを持って来ただけだった時。
              </p>
              <p>
                知人の身に妙な事件が起きて、心配して手紙を送ったり事情を尋ねたりしているのに、分かっているくせに、ちゃんとした返事もよこさないこと。
              </p>
              <p>
                「除目（じもく／役人の任命式）」で、お目当ての役職を得られなかった人の家。
              </p>
              <p>
                任命式の翌朝、とても不安な気持ちで（敗れた人の家の様子を伺えば）、昨日や一昨日まであんなにたくさん並んでいた牛車の車輪の跡を、虚しく見つめるばかり。お祝いの使いも来ない様子を見渡して、門のあたりが、妙にひっそりと片付けられて（人気がなくなって）しまっている様子。
              </p>
              <p>
                自分を呼んだ相手と、楽しく語り合いたいと思ってやって来たのに、肝心の相手が（待ちきれずに）寝てしまっている時。
              </p>
              <p>
                子供のいない人が、他人の子をやたらと可愛がっている様子。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 詳しい解説 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#FFE5A0]" />
            詳しい解説
          </h2>
          <div className="space-y-6">
            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B3E5FC] mb-4">🌸 「季節外れ」への違和感</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「昼の犬」や「春の紅梅」など、本来あるべき時間や季節からズレているものに対して、彼女は「風情がない」とバッサリ切り捨てます。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">💔 「期待」の落差</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                第143段でも出てきた「待っている人違い」のエピソード。ここでも「心ときめき」が「すさまじ（ガッカリ）」に転じる残酷な瞬間を、ドラマチックに描写しています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🏠 「除目」の敗者の哀愁</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                この段の白眉は、出世争いに敗れた人の家の描写です。数日前まであんなに賑やかだったのに、結果が出た途端に誰も来なくなるという、権力の移ろいと人間の現金（げんなま）さを、車輪の跡という視覚的イメージで表現しています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💤 「すれ違い」の虚しさ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                会いたいと思って訪ねたのに相手が寝ている。現代でいえば、楽しみにしていたデートで相手が遅刻してきたり、寝過ごしたりしている時の、あの冷めていく感情に近いものがあります。
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
