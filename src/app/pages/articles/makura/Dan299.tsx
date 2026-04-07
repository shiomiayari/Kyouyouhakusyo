import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan299() {
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
          <div className="inline-block px-4 py-2 bg-[#B3E5FC] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第299段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            雪のいと高う降りたるを
          </h1>
          <p className="text-xl text-white/80">
            中宮定子と清少納言の、言葉を超えた知的な「秘密の合言葉」。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#B3E5FC]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`雪のいと高う降りたるを、例ならず御格子（みかうし）まゐりて、炭櫃（すびつ）に火おこして、物語などして集まり侍（はべ）るに、

「少納言よ。香炉峰（かうろほう）の雪はいかならむ」

とおほせらるれば、御格子上げさせて、御簾（みす）を高く上げたれば、笑はせたまふ。

人々も、「さることは知り、歌などにさへ歌へど、思ひこそよらざりつれ。なほ、この宮の人には、さるべきなめり」と言ふ。`}
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
          <div className="bg-gradient-to-br from-[#B3E5FC] to-[#E1BEE7] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                雪がたいそう高く降り積もっているのに、いつもとは違って格子をすべて下ろし、火鉢に火をおこして、女房たちが集まってお喋りなどをして控えておりました。
              </p>
              <p>
                すると中宮様が、<br />
                「少納言よ。香炉峰の雪は、今どうなっているかしらね」<br />
                とおっしゃいました。
              </p>
              <p>
                （私はすぐにその意図を察して）女官に格子を上げさせ、御簾（みす）を高く巻き上げたところ、中宮様は（満足そうに）お笑いになりました。
              </p>
              <p>
                周りにいた女房たちも、「（香炉峰の雪の詩は）知識としては知っているし、歌に詠んだりもするけれど、とっさにそんな行動をすることまでは思いつきもしませんでしたわ。やはり、この中宮様にお仕えする人としては、あなたのような機転が利くのがふさわしいようですね」と言い合いました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 詳しい解説 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#B8F3D8]" />
            解説：なぜ「カーテン（御簾）」を上げたのか？
          </h2>
          <div className="space-y-6">
            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#E1BEE7] mb-4">📖 白楽天の漢詩の知識</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                この段には、当時の教養人なら誰もが知っていた白楽天（白居易）の漢詩の知識が隠されています。<br /><br />
                <strong>元ネタの詩：</strong> 「香炉峰の雪は、簾（すだれ）を撥（かか）げて看（み）る」<br />
                <strong>中宮定子のフリ：</strong> 「香炉峰の雪はどうかしら？」と聞くことで、「ねえ、あの詩の通りにやってみて？」というクイズを出しました。<br />
                <strong>清少納言の回答：</strong> 言葉で説明するのではなく、<strong>黙って御簾を高く上げる</strong>ことで、「はい、詩の通りに雪を見ていますよ」と行動で答えました。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">✨ ここが「エモい」ポイント</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                清少納言は、中宮定子が自分を試しているのではなく、<strong>「二人だけの秘密の合言葉」</strong>を楽しもうとしていることを瞬時に見抜きました。二人の高い知性と、言葉を超えた絆がこの短い文章に凝縮されています。
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
