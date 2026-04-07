import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan63() {
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
          <div className="inline-block px-4 py-2 bg-[#E1BEE7] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第63段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            節は
          </h1>
          <p className="text-xl text-white/80">
            季節の行事を彩る、鮮やかな色彩と「祭りのあと」の美学。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#E1BEE7]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`節は、五月（さつき）の菖蒲（あやめ）。三月（やよひ）の三日。
九月（ながつき）の九日。十一月（しもつき）の五節（ごせち）。
一月（むつき）の一日。七月（ふづき）の七日。
臨時の祭のほど、いみじうをかし。
五月の菖蒲の、青うつややかなるに、物忌（ものいみ）の札の赤きをさしたる、いとをかし。
重陽（てうやう）の日は、明けはなつるほど、菊の露のいみじう降りたるに、綿（わた）の濡れたるなど、いとをかし。
祭の返（かへ）り立ち。
五節の果てなど、いみじうあはれなり。`}
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
          <div className="bg-gradient-to-br from-[#E1BEE7] to-[#B8F3D8] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                季節の節目（行事）は、まずは五月五日の端午の節句。三月三日の上巳（じょうし）の節句。<br />
                九月九日の重陽（ちょうよう）の節句。十一月の五節（ごせち）の舞姫の行事。<br />
                一月一日の元旦。七月七日の七夕。<br />
                （それから節句ではないけれど）賀茂の臨時祭のころなどは、本当に素晴らしいわ。
              </p>
              <p>
                五月の菖蒲（しょうぶ）が、青々としてツヤツヤしているところに、物忌みの赤い札を差してある様子は、とても趣がある。<br />
                九月九日の重陽の日は、夜が明けきるころ、菊の露がたっぷり降りていて、（香りを移すための）着せ綿がしっとり濡れている様子などは、本当に素敵だわ。
              </p>
              <p>
                お祭りが終わって、行列が帰っていく時。<br />
                五節の行事がすべて終わったあとなど、なんとも言えずしみじみとした情趣（あはれ）があるわね。
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
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🎨 「色」のコントラスト</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「菖蒲の青（緑）」と「物忌札の赤」。清少納言は、植物の自然な色に人工的な鮮やかな色を添えるセンスを「をかし」として絶賛しています。彼女の色彩感覚は常にビビッドです。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#E1BEE7] mb-4">🌼 「着せ綿（きせわた）」の風流</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                重陽の節句では、前夜に菊の花に綿を被せ、翌朝にその露と香りが染み込んだ綿で肌を拭うと長寿になると信じられていました。その「濡れた綿」に美を見出すあたり、非常に繊細な感性です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🏮 「祭りのあと」の美学</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                最高潮に盛り上がっている瞬間だけでなく、すべてが終わったあとの静寂や名残惜しさに「あはれ」を感じる。この「動」から「静」への移り変わりを愛でるのが、清少納言の美学の深みです。
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
