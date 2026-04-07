import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan179() {
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
            第179段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            いみじきもの
          </h1>
          <p className="text-xl text-white/80">
            既読スルーへの激怒から夕日の美しさまで、メーターを振り切る感情の記録。
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
              {`いみじきもの。人のもとに、あやしきことありて、文やり、たづねなどするに、心得顔に、さるべき事も言ひ送らぬ。

乳母（めのと）のあだなる。

人の乳（ち）を飲む。

夕日の影。

法師の、声をわろくして経読みたる。

人のそしりなどしたる。

にくきものに、物のいみじう言ひおこしたる。

心えぬ事を聞く人は、いといみじ。`}
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
                <strong>はなはだしいもの（並大抵ではないもの）。</strong>
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
              <p>
                大嫌いな相手に対して、こちらが言いたいことを思いきり言い返してやった時。
              </p>
              <p>
                わけのわからないことを言ってくる人は、本当にはなはだしく（嫌なものだ）。
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
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">📱 「既読スルー」への激怒</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                第28段（にくきもの）や第22段（すさまじきもの）でも登場した「返事をよこさない人」。清少納言はこの不作法を「憎い」「興ざめ」だけでなく、「いみじ（度を越している）」とまで表現しており、彼女にとって最大のタブーであったことがわかります。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🌇 「夕日」の圧倒的な美</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「いみじ」には感動の意味も含まれます。夕日の光が差し込む光景を、彼女は理屈抜きに「圧倒的だ」と感じていました。第1段の「夕日のさして、山の端いと近うなりたるに」という描写にも通じる感性です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🗯️ 「スカッとする」のも「いみじ」</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                嫌いな相手に言い返してやった時の、あのメーターを振り切るようなスッキリ感。これも彼女にとっては、日常の平穏を突き抜ける「いみじき」瞬間でした。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#C3B7F5] mb-4">🍼 「人の乳を飲む」の衝撃</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                これについては諸説ありますが、大人が母乳を薬や滋養強壮として飲む風習への、彼女らしい「うわっ、ありえない！」という潔癖なまでの驚きが込められていると言われています。
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
