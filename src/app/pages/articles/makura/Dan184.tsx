import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan184() {
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
            第184段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            あやしきもの
          </h1>
          <p className="text-xl text-white/80">
            清少納言の潔癖な美学が光る、「ミスマッチ」と「マナー違反」への辛口リスト。
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
              {`あやしきもの。下衆（げす）の家に、雪の降りたる。月のおし照りたる。

いみじき人、病（やまひ）して、久しくなりぬる。

人のもとに、あやしきことありて、文やり、たづねなどするに、心得顔に、さるべき事も言ひ送らぬ。

乳母（めのと）のあだなる。

人の乳（ち）を飲む。

夕日の影。

法師の、声をわろくして経読みたる。

人のそしりなどしたる。`}
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
                <strong>身分が低く、見苦しいもの（あるいは不釣り合いなもの）。</strong>
              </p>
              <p>
                身分の低い下衆（げす）のボロ家に、雪が綺麗に降り積もっている様子。また、月の光が煌々と照らし出している様子。（※美しい自然現象が、みすぼらしい家にあるのは不釣り合いで、かえって見苦しいという感覚）
              </p>
              <p>
                立派な人が、病気になって、それが長く長引いている様子。
              </p>
              <p>
                知人の身に妙な事件が起きて、心配して手紙を送ったり事情を尋ねたりしているのに、事情を分かっているくせに、ちゃんとした返事もよこさないこと。
              </p>
              <p>
                乳母（育ての親）が、浮気っぽく誠実でないこと。
              </p>
              <p>
                （大人が）人の乳を飲むこと。
              </p>
              <p>
                夕日の光。
              </p>
              <p>
                お坊さんで、声が悪いくせにお経を読んでいること。
              </p>
              <p>
                他人の悪口を言っていること。
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
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">✨ 貴族の特権意識と美学</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                冒頭の「下衆の家に雪や月」という表現は、現代の感覚からすると少し残酷に聞こえるかもしれません。しかし清少納言にとって、<strong>「美しいものは、それにふさわしい場所（洗練された貴族の邸宅など）にあってこそ完成する」</strong>という徹底した美学がありました。ミスマッチを「あやし（見苦しい）」と感じる彼女の潔癖さがよく表れています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">📱 「既読スルー」への重ねての怒り</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                第28段（にくきもの）や第179段（いみじきもの）でも登場した「返事をよこさない人」への怒りがここでも再登場します。彼女にとって、マナー違反は「憎い」だけでなく「見苦しく（あやし）」、「度を越して（いみじ）」いる許しがたい行為でした。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🏥 「病（やまひ）」への忌避感</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                立派な人が病気で衰えていく姿を「あやし」とするのは、彼女が「若々しく、快活で、知的な状態」を至高の価値としていたからです。衰退していくものへの直感的な拒絶反応が読み取れます。
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
