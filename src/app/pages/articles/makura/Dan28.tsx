import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan28() {
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
            第28段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            にくきもの
          </h1>
          <p className="text-xl text-white/80">
            人間の本性に迫る、リアルすぎる「嫌なやつ」の数々。
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
              {`にくきもの。急ぐ事あるをりに来て、長戸りして喋りゐたる人。いとよく聞きえたる事を、うち消して、ことやうにのみ言ひ送りたる。物語するに、さし出でして、我ひとり知り顔に、うち言ひたる、いとにくし。

人のもとに、あやしきことありて、文やり、たづねなどするに、心得顔に、さるべき事も言ひ送らぬ。

清げなる所に、唾を吐き、墨のすき間などに塗りつけたる。

法師の、声をわろくして経読みたる。人のそしりなどしたる。男の、酒飲みて、あめき、口をしがちなる。また、心なき人の、いとよく聞きえたる事を、うち消して、ことやうにのみ言ひ送りたる。

ねぶたしと思ひて臥したるに、蚊の細声にわびしげに名のりて、顔のほどに飛びありく。羽風さへ、その身のほどにあるこそ、いとにくけれ。

きしめく車に乗る人。耳かしかまし。わが乗るは、主のきしめかすにやあらむ。また、にくきもの。鼻ひて、ふつといふ事。

待つ人。夜、暁などに、門たたく。

心なき人の、人の物語を、我ひとり知り顔に、うち言ひたる。

男の、をかしと思ふ女の、褒めなどする。また、宮仕へに、いとあぢきなう、人にはしたなう、物言ひおくる男。

産屋（うぶや）にて、産む人のいと苦しがるを、さらぬ顔に、いとあぢきなう、まどろみゐたる男。

人の上に、ことさらにもあらぬ人の、あしう言ひ、笑ひなどする。

しひて酒飲ませ、強ひて物食はする人。

にくきもの。まいて、わづらふ人のある所に。

心えぬ事を聞く人は、いとにくし。`}
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
                <strong>憎たらしいもの。</strong>
              </p>
              <p>
                急ぎの用事がある時にやって来て、長居をしてダラダラと喋り続けている人。自分がよく知っている出来事を、（こっちが話しているのに）わざわざ否定して、さも別の真相があるかのように言ってくる人。
              </p>
              <p>
                誰かが話をしている時に、横から口を出して、「自分だけが知っています」という顔で喋りまくるのは、本当に憎たらしい。
              </p>
              <p>
                知人の身に妙な事件が起きて、心配して手紙を送ったり事情を尋ねたりしているのに、事情を知っているくせに、ちゃんとした返事もよこさない人。
              </p>
              <p>
                綺麗な場所に、ツバを吐いたり、壁の隙間などに墨を塗りつけたりする無作法な人。
              </p>
              <p>
                お坊さんで、声が悪いくせにお経を読んでいる人。他人の悪口を言っている人。男が酒を飲んで、大声を出し、愚痴っぽくなること。また、デリカシーのない人が、こちらのよく知っている出来事を否定して、別のことのように言いふらしていること。
              </p>
              <p>
                眠いと思って横になっているのに、蚊が細い声で情けなく名乗りを上げるように、顔のまわりを飛び回ること。あの小さな体に見合った「羽風」を律儀に送ってくるのさえ、本当に憎たらしい。
              </p>
              <p>
                ギシギシと音を立てる車に乗っている人。耳障りでうるさい。私が乗っている車も、持ち主のせいでギシギシ鳴っているのかしら（と思うと恥ずかしい）。また、憎たらしいのが、クシャミをしてから「ふつ」と呪文を唱えること。
              </p>
              <p>
                待ち合わせをしている人。夜中や夜明けに、バタバタと門を叩く音。
              </p>
              <p>
                無神経な人が、人の話を横取りして、自分だけが知っているという顔で話すこと。
              </p>
              <p>
                男が、自分が「素敵だ」と思っている別の女性のことを、これ見よがしに褒めちぎること。また、宮廷で働く女性に対して、思いやりもなく、恥をかかせるような物言いをしてくる男。
              </p>
              <p>
                出産間近の妻が苦しんでいるのに、平然とした顔で、ちっとも気にかける様子もなく居眠りをしている夫。
              </p>
              <p>
                他人のことを、それほど親しくもない人が悪く言ったり、笑いものにしたりすること。
              </p>
              <p>
                無理やり酒を飲ませたり、強引に物を食べさせたりする人。
              </p>
              <p>
                それは本当に憎たらしい。ましてや、病人がいる場所でそんなことをするのは最悪だ。
              </p>
              <p>
                わけのわからないことを言ってくる人は、本当に憎たらしい。
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
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💡 「知性」と「配慮」の欠如への怒り</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                清少納言が嫌うものの共通点は、相手の状況を察しない「想像力の欠如」です。急いでいる時の長話や、他人の話への割り込みなど、現代のコミュニケーションマナーにも通じる鋭い指摘が並びます。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">👂 五感で感じる不快感</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                蚊の羽音、車のきしみ、クシャミの後の呪文、さらには「ツバを吐く」といった生理的な嫌悪感をストレートに表現しています。こうした「本音」を隠さず書いたことが、1000年経っても色褪せないリアリティを生んでいます。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">👁️ 男性への厳しい審美眼</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                特に出産の場面での夫の態度は、現代でいう「ワンオペ育児」や「立ち会い出産での無関心」への怒りに近く、時代を超えて女性の共感を集めるポイントです。
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
