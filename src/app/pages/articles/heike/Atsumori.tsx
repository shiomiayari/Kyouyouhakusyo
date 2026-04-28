import { Star, Sparkles, ArrowLeft, BookOpen, Brain, Heart, Swords, Music, Shield } from 'lucide-react';
import { Link } from 'react-router';

export function Atsumori() {
  const points = [
    {
      icon: <Music className="w-8 h-8 text-[#FFE5A0]" />,
      title: '① 「笛」が繋ぐ風流と悲劇',
      content: '敦盛の遺体を見ると、腰に一本の笛（小枝：さえだ）が差されていました。彼は戦の最中でも、明け方まで笛を吹いて風流を楽しんでいたのです。「坂東武者（源氏）は荒々しいけれど、平家の公達はなんと優雅なことか」と直実は号泣します。この「風流（美）」と「殺生（暴力）」の対比が、読者の心を打ちます。',
    },
    {
      icon: <Heart className="w-8 h-8 text-[#FF4D4D]" />,
      title: '② 「親の心」という普遍的な葛藤',
      content: '直実はこの戦いで、自分の息子も負傷させていました。「自分の子が少し傷ついただけでこんなに辛いのに、この少年の父（平経盛）は、息子が殺されたと知ったらどれほど嘆だろうか」という、立場を超えた親心が描かれています。',
    },
    {
      icon: <Brain className="w-8 h-8 text-[#C3B7F5]" />,
      title: '③ 直実の出家（セカンドキャリア）',
      content: 'この出来事がトラウマとなり、直実はのちに武士を捨てて出家します。「なぜ人は殺し合わねばならないのか」という問いが、彼を宗教へと向かわせたのです。一人の少年の死が、一人の武人の人生を完全に変えてしまったという重みがあります。',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16 bg-[#1a1a2e]">
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-10 text-white/10 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/5 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-96 right-1/3 text-white/10 animate-pulse delay-200">
        <Sparkles className="w-7 h-7" />
      </div>

      {/* Back Button */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/article/literature/heike"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white/70 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            平家物語一覧に戻る
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#4D79FF] text-white rounded-full mb-6 font-bold border-2 border-white shadow-lg text-sm">
            Episode #02
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 text-white leading-tight">
            敦盛の最期
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            わずか16歳の美少年・平敦盛と、彼を討たねばならなかったベテラン武士・熊谷直実の悲劇。戦場における「情」と「残酷さ」が交錯する屈指の名シーン。
          </p>
        </div>
      </section>

      {/* Profile Card Section */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1f1f3a] rounded-[3rem] border-4 border-white/20 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-black mb-10 text-white flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#B3C6FF]" />
                  敦盛とはだれ？
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 font-bold text-[#B3C6FF]">年齢</div>
                    <div className="text-xl text-white">16歳（高校1年生くらい）</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 font-bold text-[#B3C6FF]">ビジュアル</div>
                    <div className="text-xl text-white">お歯黒をし、薄化粧をした絶世の美少年</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-20 font-bold text-[#B3C6FF]">持ち物</div>
                    <div className="text-xl text-white">名笛「小枝（さえだ）」。祖父・忠盛が鳥羽上皇から賜った家宝</div>
                  </div>
                  <div className="pt-6 border-t border-white/10 mt-6">
                    <p className="text-lg italic text-white/80 leading-relaxed">
                      「名乗らなくても、私の首を取って人に聞けば、誰だかすぐに分かるはずだ」
                    </p>
                    <p className="text-sm text-white/40 mt-2 text-right">― 名前を迫られた際の凜としたマインド</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <img src="/heike-atsumori.png" alt="平敦盛" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f3a] to-transparent md:block hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Text & Summary Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Story Summary */}
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border-2 border-white/10 flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <Swords className="w-6 h-6 text-[#FF4D4D]" />
                敦盛の最期：あらすじ
              </h2>
              <div className="text-lg text-white/80 leading-relaxed space-y-4 flex-grow">
                <p>一ノ谷の戦い（神戸）で平家が敗走する中、16歳の美少年・<strong className="text-white">平敦盛</strong>は、沖の船へ逃げ遅れてしまいます。</p>
                <p>そこへ、手柄を立てようと迫ったのが源氏のベテラン武士・<strong className="text-white">熊谷直実（くまがい なおざね）</strong>。</p>
                <p>直実が敦盛を組み伏せ、首を斬ろうと顔を見ると、自分の息子と同じ年頃の、驚くほど美しい少年でした。直実は助けたいと願いますが、背後からは味方の軍勢が迫っています。「中途半端に助けて敵に辱めを受けさせるよりは、せめて自分の手で葬り、供養しよう」と、涙ながらに敦盛の首を撥ねる……という悲劇です。</p>
              </div>
            </div>

            {/* Original Text & Translation */}
            <div className="bg-[#1f1f3a] p-8 md:p-12 rounded-[2.5rem] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
              <h2 className="text-2xl font-bold mb-8 text-[#B3C6FF] flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                印象的なシーン
              </h2>
              <div className="space-y-8 flex-grow">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-sm font-bold text-white/40 mb-3 uppercase tracking-widest">Original Text</h4>
                  <p className="text-xl font-serif text-white leading-relaxed italic">
                    「あはれ、助けまゐらせんと存じ候へども、味方の軍兵雲霞のごとく候ふ。よも逃れさせ給はじ。」
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-[#4D79FF]/30">
                  <h4 className="text-sm font-bold text-[#4D79FF] mb-3 uppercase tracking-widest">Modern Translation</h4>
                  <p className="text-lg text-white/80 leading-relaxed">
                    「ああ、お助けしたいのは山々なのですが、味方の軍勢が雲や霧のように押し寄せてきております。もはや逃げ切ることはできないでしょう。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emo Points Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3 text-center md:text-left">
            <Sparkles className="w-10 h-10 text-[#FFE5A0]" />
            ここがエモい！3つのポイント
          </h2>
          <div className="grid gap-6">
            {points.map((point, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-white/30 transition-all group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <Link
            to="/article/literature/heike/gion"
            className="w-full md:w-auto px-10 py-5 bg-white/5 text-white/70 rounded-2xl hover:bg-gradient-to-r hover:from-[#FF4D4D] hover:to-[#4D79FF] hover:text-white transition-all border-2 border-white/10 font-bold text-xl text-center"
          >
            ← 前：祇園精舎
          </Link>
          <Link
            to="/article/literature/heike"
            className="w-full md:w-auto px-10 py-5 bg-white text-[#1a1a1e] rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform border-4 border-white text-center"
          >
            平家物語目次へ
          </Link>
        </div>
      </section>
    </div>
  );
}
