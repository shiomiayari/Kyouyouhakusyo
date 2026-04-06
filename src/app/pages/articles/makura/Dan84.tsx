import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan84() {
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
            第84段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            心ときめきするもの
          </h1>
          <p className="text-xl text-white/80">
            期待やセルフケアがもたらす、時代を超えた普遍的な「ときめき」。
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
              {`心ときめきするもの。雀の子飼ふ。ちご遊ばする所の前わたる。

いみじき香（か）おこして、ひとり臥（ふ）したる。

鏡の曇りたるを拭（ふ）きたる。

よき男の、車止めて案内（あない）せしめたる。

頭（かしら）洗ひ、化粧（けさう）して、香（か）どおしいたる衣（きぬ）着たる。

とりわきて見る人なき所にても、心のうちは、いとなまめかし。

待つ人ある夜、雨の音、風の吹きくるも、ふと驚かる。`}
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
                <strong>胸がワクワクして、ドキドキするもの。</strong>
              </p>
              <p>
                雀（すずめ）の子を飼うこと。
              </p>
              <p>
                可愛らしい子供が遊んでいる場所の前を通りかかること。
              </p>
              <p>
                極上の香を焚きこめて、一人でゆったりと横になっている時。
              </p>
              <p>
                鏡が曇っているのを、きれいに拭きあげた時。
              </p>
              <p>
                素敵な男性が、（私の家の前に）牛車を止めて、取り次ぎの者に面会を求めてきた時。
              </p>
              <p>
                髪を洗い、お化粧をして、香をしっかり焚きしめた着物を着た時。
              </p>
              <p>
                特に誰が見ているわけでもない場所であっても、自分自身の心の中は、とても優雅で凛とした気持ちになれるわ。
              </p>
              <p>
                恋人を待っている夜。雨の音や、風が吹いてくる音にさえ、「（彼が来たのかしらと）ハッとして、つい反応してしまう。
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
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">💅 「自分磨き」の喜び</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                髪を洗い、お化粧をし、香を焚いた服を着る。誰に見せるためでもなく、自分自身の気分を高めるために装うことを「心のうちは、いとなまめかし（心の中はとても優雅だ）」と表現しています。現代でいう「セルフケア」や「お気に入りのルームウェア」で過ごす充足感と同じですね。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🪞 「生活の整え」への感性</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「曇った鏡を拭く」という一見地味な行為を「ときめき」に分類するあたり、清少納言の繊細さが光ります。視界がクリアになる瞬間の清々しさを、彼女は「心のときめき」として大切にしていました。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💓 「期待」というスパイス</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                待っている人の足音だと思って雨風の音に敏感になる様子。スマホがない時代の、あの「通知を待つ」よりもずっと身体的で、切実なドキドキ感が伝わってきます。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#C3B7F5] mb-4">🎁 「よき男」の登場</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                平安時代の「車を止める」は、現代でいうなら「気になる人が家の前に車で迎えに来た」あるいは「サプライズで訪ねてきた」ようなシチュエーション。その緊張感と期待は、時代を超えた普遍的な「ときめき」です。
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
