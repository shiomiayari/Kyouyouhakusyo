import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan143() {
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
            第143段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            はしたなきもの
          </h1>
          <p className="text-xl text-white/80">
            期待外れや勘違いがもたらす、いたたまれない「気まずさ」の数々。
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
              {`はしたなきもの。異（こと）人を呼ぶに、我ぞとて差し出でたる。物など取らせむとて呼ぶには、いとど。

おのづから人の上など言ひうち笑ふに、あやしう、その人のさし入りて聞きたる。いと心づきなし。

ことよき人の、いみじう恥づかしがりて、隠れゐたるを、推し量りて、あらはに言ひ出だしたる。

京より下（くだ）りたる人の、国つ人とあなづりて、物言ひおくるに、いみじう心得、さるべき人のもとよりしたりける。

人を待つ夜、戸を叩く音。いと心ときめきて、人出だして見すれば、こと人にて、手にある物など持て来たる。`}
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
                <strong>きまずいもの。</strong>
              </p>
              <p>
                （別の）人を呼んでいるのに、自分のことだと思って返事をして、しゃしゃり出てしまった時。何か褒美をやろうとして呼んでいる場合などは、いっそう（勘違いした自分が）恥ずかしくてたまらない。
              </p>
              <p>
                ふとした拍子に誰かの噂話をして笑い合っている時に、変なタイミングで、その本人がひょっこり現れて聞いていた時。本当に嫌な気分になるわ。
              </p>
              <p>
                身分が高く立派な人が、すごく恥ずかしがって物陰に隠れているのを、気を利かせたつもりで（あるいは面白がって）あからさまに名前を呼んだり、正体を暴いたりすること。
              </p>
              <p>
                都から地方へ下ってきた人が、地元の人のことを「田舎者だ」と侮って、見下したような手紙を送ったところ、実はその相手がものすごく教養があって、立派な家柄の人だったと分かった時。
              </p>
              <p>
                恋人を待っている夜、門を叩く音がした。すごくドキドキして、召使いを出して見に行かせたら、全然別の人で、注文していた品物か何かを持って来ただけだった時。
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
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">😶 「自意識」との戦い</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                冒頭の「聞き間違い・勘違い」は、現代でも名前を呼ばれたと思って返事をしたのに、自分じゃなかった時のあの「穴があったら入りたい」感覚そのものです。清少納言はこうした、個人のプライドが揺らぐ瞬間を逃さず記録しています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">💬 「悪口」と「ニアミス」</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                噂話をしている最中に本人が登場する気まずさ。これはSNSの「誤爆」や、陰口を言っているチャットに本人が招待されていた時のパニックに近いリアリティがあります。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🎓 「田舎者」と侮ったしっぺ返し</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「都の人間（自分たち）は教養がある」と信じている清少納言ですが、相手を侮って恥をかくパターンも「はしたなし（きまずい）」として挙げています。ここには彼女の「知性に対するフェアな視点」が隠れています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#C3B7F5] mb-4">🚪 「期待」と「現実」のギャップ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                最後の「待っている人」のエピソードは、現代なら「LINEの通知が来た！と思って飛びついたら、公式アカウントからの広告だった」時のガッカリ感に似ています。期待が大きければ大きいほど、その後の「はしたなさ（いたたまれなさ）」は増大するのです。
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
