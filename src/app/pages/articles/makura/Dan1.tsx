import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan1() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-16">
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
            to="/article/literature/makura"
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
          <div className="inline-block px-4 py-2 bg-[#B8F3D8] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第1段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            春はあけぼの
          </h1>
          <p className="text-xl text-white/80">
            四季それぞれの「ベストタイム」を独自の美学で定義した超有名段
          </p>
        </div>
      </section>

      {/* 原文 (Vertical Text) */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#B8F3D8]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20 overflow-x-auto">
            <div className="flex flex-row-reverse gap-8 pb-4" style={{ minWidth: 'max-content' }}>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                春はあけぼの。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                やうやう白くなりゆく山ぎは、<br />少しあかりて、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                紫だちたる雲の細くたなびきたる。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                夏は夜。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                月のころはさらなり、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                闇もなほ、<br />ほたるの多く飛びちがひたる。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                また、ただ一つ二つなど、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                ほのかにうち光りて行くもをかし。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                雨など降るもをかし。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                秋は夕暮れ。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                夕日のさして山の端いと近うなりたるに、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                烏の寝どころへ行くとて、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                三つ四つ、二つ三つなど<br />飛び急ぐさへあはれなり。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                まいて雁などのつらねたるが、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                いと小さく見ゆるは、いとをかし。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                日入りはてて、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                風の音、虫の音など、<br />はたいふべきにあらず。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                冬はつとめて。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                雪の降りたるはいふべきにもあらず、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                霜のいと白きも、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                またさらでもいと寒きに、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                火など急ぎおこして、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                炭持て渡るも、いとつきづきし。
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                昼になりて、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                ぬるくゆるびもていけば、
              </p>
              <p
                className="text-white text-lg leading-loose"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'upright',
                  minHeight: '300px'
                }}
              >
                火桶の火も白き灰がちになりてわろし。
              </p>
            </div>
            <p className="text-sm text-white/50 mt-4 text-center">← 横にスクロールできます →</p>
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
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-4">
              <p>
                <strong className="text-xl">🌸 春</strong><br />
                春は、夜明け前（あけぼの）が最高。だんだん白くなっていく山際の空が、少し明るくなって、紫がかった雲が細くたなびいているのが、すごくいい。
              </p>
              <p>
                <strong className="text-xl">🌙 夏</strong><br />
                夏は、夜。月が出ている時はもちろん、闇夜でも蛍がたくさん飛び交っているのは最高。また、たった一つ二つ、ぼんやり光って飛んでいくのも、趣がある。雨が降る夜も素敵。
              </p>
              <p>
                <strong className="text-xl">🍂 秋</strong><br />
                秋は、夕暮れ。夕日が差して、山の端がすごく近くなったところに、カラスが寝床へ帰ろうと、三つ四つ、二つ三つと飛び急ぐ様子さえ、しみじみと胸に迫る。まして、雁（かり）などが列を作って、すごく小さく見えるのは、さらに趣深い。日が落ちてしまってから聞こえる、風の音や虫の音は、もう言うまでもなく最高。
              </p>
              <p>
                <strong className="text-xl">❄️ 冬</strong><br />
                冬は、早朝（つとめて）。雪が降っているのは言うまでもないけれど、霜がすごく白い時や、そうでなくても、とても寒い朝に、火を急いでおこして、炭を持って廊下を通っていく様子は、まさに冬の朝っていう感じ。昼になって寒さが緩むと、火桶の炭も白い灰ばかりになって、締まりがなくなっちゃうのは残念だけど。
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
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">📚 「をかし」の教科書</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                この段は『枕草子』全体のトーンを決める重要な冒頭です。平安文学のキーワードである「もののあはれ（しみじみとした情趣）」に対し、清少納言は<strong className="text-[#FFE5A0]">「をかし（明るい知性、センスの良さ、興味深い）」</strong>という新しい価値観を提示しました。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🎬 動的な美しさ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                静止画としての風景ではなく、雲が「たなびく」、蛍が「飛び交う」、カラスが「飛び急ぐ」、炭を「持って通る」といった、<strong className="text-[#B8F3D8]">動きのある瞬間</strong>を捉えているのが彼女の特徴です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💬 「わろし」という毒舌</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                最後に「わろし（良くない、ダサい）」という言葉で締めている点に注目。ただ「綺麗��ね」で終わらせず、自分の美学に反するもの（燃え尽きた炭の灰）をハッキリ否定するあたりに、<strong className="text-[#FFC2D1]">彼女の性格</strong>がよく表れています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 現代に活かせるポイント */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#FFE5A0]" />
            現代に活かせるポイント
          </h2>
          <div className="bg-gradient-to-br from-[#C3B7F5] to-[#FFC2D1] p-8 rounded-3xl border-4 border-white">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <h4 className="font-bold text-xl text-[#1B2B44] mb-2">自分の「好き」を言語化する力</h4>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    「春は夜明けが好き」「夏は夜が好き」と明確に言い切る清少納言。SNS時代の今、自分の価値観をはっきり示すことは、個性を発信する第一歩です。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✨</div>
                <div>
                  <h4 className="font-bold text-xl text-[#1B2B44] mb-2">日常の中に「エモさ」を見つける視点</h4>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    特別なイベントではなく、朝の光や夜の虫の音など、毎日の中にある小さな美しさに気づく感性。これこそが、日々を豊かに生きる秘訣です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              to="/article/literature/makura"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2A3B5A] text-white rounded-2xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
              一覧に戻る
            </Link>
            <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFE5A0] to-[#B8F3D8] text-[#1B2B44] rounded-2xl border-4 border-white font-bold">
              <Sparkles className="w-5 h-5" />
              次の段へ（準備中）
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}