import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan301() {
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
            第301段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            五月ばかりに、信濃の国より
          </h1>
          <p className="text-xl text-white/80">
            中宮定子と清少納言が交わす機知に富んだ「知のゲーム」。
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
              {`五月ばかりに、信濃の国より、人のもとへ、をかしき櫛（くし）の笥（け）を、薄様（うすやう）して包みて、持て来たり。
「これは、かの少納言に奉（たてまつ）れ」と言ひければ、持て来たるなり。
「いみじうをかしきものかな。いかなる人の、かやうなる事もし給ふらむ。あやし」とて、御前（おまへ）に持て参りて、御覧ぜすれば、
「これは、信濃の国の、木曽の懸橋（かけはし）といふなり」
と仰せらるるに、いみじうをかし。
「よし。さらば、歌よまむ」とて、
「踏み見れば  心も空に  なりぬべき  木曽の懸橋  書きておこせよ」
といふ。`}
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
                五月ごろに、信濃の国（長野県）から、ある人のもとへ、風雅な櫛の箱（櫛を入れる器）を、薄紙で包んで持ってきた人がありました。
              </p>
              <p>
                「これは、あの方（清少納言）に差し上げなさい」と言われたとのことで、私のところへ持ってきたのです。
              </p>
              <p>
                「あら、とても素敵なものね。一体どんな方が、こんな（風流な）ことをしてくださるのかしら。不思議（あやし）だわ」と言って、中宮様（定子）の御前に持って参って、ご覧に入れますと、
              </p>
              <p>
                「これは、信濃の国の『木曽の懸橋（かけはし）』というものよ」<br />
                とおっしゃるのが、本当におかしくて面白いのです。
              </p>
              <p>
                （私はその言葉を受けて）「いいわ。それなら、歌を詠みましょう」と言って、<br />
                「踏み（手紙と「踏む」を掛けて）見てみると、あまりの素晴らしさに、心も空に浮き立ってしまいそうな、この『木曽の懸橋』のことを、手紙に書いて寄こしてくださいな」<br />
                と詠んだのでした。
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
            詳しい解説
          </h2>
          <div className="space-y-6">
            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#E1BEE7] mb-4">🌉 「木曽の懸橋」のダブルミーニング</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                当時、信濃の「木曽の懸橋」は、断崖絶壁に架けられた非常に危険でスリリングな名所として知られていました。中宮定子は、届いた「櫛の箱（くしのけ）」と「懸橋（かけはし）」を言葉の響きや形状で掛け合わせ、知的でユーモラスな冗談を飛ばしたのです。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🧩 定子と少納言の「知のゲーム」</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                中宮定子が「これは懸橋よ」と振れば、少納言は即座にその意図を汲み取り、さらに「踏み（手紙／足で踏む）」という言葉を掛けた和歌を返します。第299段（香炉峰の雪）と同様、二人の間には高い教養を前提とした「言葉遊び」の文化が息づいていました。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🏔️ 「遠い国」への憧れ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                都の人にとって信濃は果てしなく遠い異郷。そこから届いた美しい贈り物は、単なる「物」以上の、ロマンや物語を感じさせる特別な存在でした。
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
