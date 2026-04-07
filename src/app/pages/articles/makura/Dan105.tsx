import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan105() {
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
            第105段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            うらやましきもの
          </h1>
          <p className="text-xl text-white/80">
            教養あふれる知的な姿や、情報のハブとなる人への強い憧れ。
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
              {`うらやましきもの。物忌（ものいみ）に、いと清げに、人のもとへ、文（ふみ）書きおこしたる。

経（きゃう）など、いみじう習ひ知りて、よどまず読みたる。

人の上（うへ）など言ふに、いとよう心得、さるべきこと、また、あやしきことなど、言ひあはせたる。

よき人の、いとよう見知れるが、もののいみじう言ひおこしたる。

物語、集など、多く持ちたる。

心えぬ事を聞く人は、いとうらやまし。`}
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
          <div className="bg-gradient-to-br from-[#B8F3D8] to-[#E1BEE7] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                <strong>羨ましいもの。</strong>
              </p>
              <p>
                物忌み（外出を控える期間）の退屈な時に、とても美しく整った筆致で、誰かのもとへ手紙を書き送っている人。
              </p>
              <p>
                お経などを、実によく習い覚えていて、つっかえることもなくスラスラと読み上げている人。
              </p>
              <p>
                誰かの噂話などをしている時に、事情を実によく把握していて、納得のいく意見や、あるいは不思議な裏事情などを、うまく話し合わせている人。
              </p>
              <p>
                身分が高く立派な人で、こちらのことをよく理解してくれている人が、わざわざ心のこもった便りを寄せてくれた人。
              </p>
              <p>
                物語の本や、歌集などを、たくさん持っている人。
              </p>
              <p>
                （自分が）わけのわからないと思っていることを、ちゃんと理解して聞いている人は、本当に羨ましいわ。
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
              <h3 className="text-2xl font-bold text-[#E1BEE7] mb-4">📚 「教養」への強い憧れ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                お経をスラスラ読めることや、本をたくさん持っていることを羨ましがるのは、清少納言が何よりも<strong>「知識」と「知性」</strong>に価値を置いていたからです。現代でいえば「語学が堪能な人」や「膨大な蔵書を持つ知識人」へのリスペクトに近い感覚です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">💬 「情報のハブ」への羨望</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                噂話の事情通を羨むのは、単なる野次馬根性ではありません。複雑な人間関係や宮廷の動静を的確に把握し、それを面白くアウトプットできる「情報の整理能力」に知性を感じているのです。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💌 「手紙」の美学</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                物忌みの最中に美しい手紙を書く。それは、時間に追われるのではなく、ゆったりとした時間の中で「優雅さ」を保っている証拠です。心の余裕がある暮らしぶりへの憧れが透けて見えます。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🤔 「理解できる人」への嫉妬</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                最後の一文、「自分にはわからないことを理解している人」を羨むのは、彼女の強い向上心の裏返しです。常に「もっと知りたい」「もっと分かりたい」と願う、彼女の知的な貪欲さが表れています。
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
