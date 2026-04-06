import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan146() {
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
          <div className="inline-block px-4 py-2 bg-[#B8F3D8] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第146段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            心地よきもの
          </h1>
          <p className="text-xl text-white/80">
            お気に入りの道具から、溜まったストレスの放出まで、最高の「すっきり感」。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#B8F3D8]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`心地よきもの。よき筆（ふで）、白き紙に、いとよう書け、心にかなひたる。

よき硯（すずり）に、墨のいと黒うすられたる。

よき人の、いとよう見知れるが、もののいみじう言ひおこしたる。

にくきものに、物のいみじう言ひおこしたる。

胸のふたがりたるに、物などの言ひ明かされたる。

頭（かしら）洗ひたる。

心にかなへる人の、めでたき事を言ひたる。`}
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
          <div className="bg-gradient-to-br from-[#B8F3D8] to-[#B3E5FC] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                <strong>気分がすっきりして、心地よいもの。</strong>
              </p>
              <p>
                質の良い筆で、真っ白な紙に、とても上手く（文字が）書けて、自分の理想通りに仕上がった時。
              </p>
              <p>
                質の良い硯（すずり）で、墨がとても黒々と滑らかに磨（す）れた時。
              </p>
              <p>
                身分が高く立派な人で、こちらのことをよく理解してくれている人が、わざわざ心のこもった便りを寄せてくれた時。
              </p>
              <p>
                （逆に）大嫌いな相手に対して、こちらが言いたいことを思いきり言い返してやった時。
              </p>
              <p>
                胸がモヤモヤと塞がっていた時に、誰かに悩みや思いをすべて打ち明けて、すっかり晴れ晴れとした時。
              </p>
              <p>
                髪を洗った時。
              </p>
              <p>
                自分の心にかなう大切な人が、素晴らしい褒め言葉を言ってくれた時。
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
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🖋️ 「書くこと」へのこだわり</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                清少納言にとって、筆・紙・墨の状態はクリエイティビティに直結します。現代でいえば「新しいガジェットの動作がサクサクな時」や「お気に入りの文房具でノートが綺麗に書けた時」の快感と同じです。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🗯️ 「毒舌」の裏返し</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「にくきもの（嫌いな人）」に言い返してやった、という一文に清少納言らしさが溢れています。ただ上品なだけでなく、負けん気の強さと、溜まったストレスを放出する瞬間のカタルシスを正直に肯定しています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B3E5FC] mb-4">🚿 「デトックス」の精神</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「胸のふたがり」を言葉で解き放つことや、「髪を洗う」という物理的な清浄。彼女は、心と体の「淀み」を取り除くことが、最高に「心地よい」ことだと知っていました。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">👑 「承認」の喜び</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                尊敬する人からの便りや、愛する人からの褒め言葉。自分の価値を認めてもらえる瞬間は、いつの時代も最高の「心地よさ」をもたらしてくれます。
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
