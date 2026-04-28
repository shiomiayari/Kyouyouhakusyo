import { Star, Sparkles, ArrowLeft, BookOpen, Brain, Anchor, Waves, Swords, Shield } from 'lucide-react';
import { Link } from 'react-router';

export function Dannoura() {
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
          <div className="inline-block px-4 py-2 bg-[#E53E3E] text-white rounded-full mb-6 font-bold border-2 border-white shadow-lg text-sm">
            Episode #04
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 text-white leading-tight">
            壇ノ浦の戦い
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            平家の滅亡。「波の下にも都がございます」と、幼い安徳天皇を抱いて入水する二位の尼。物語のクライマックスです。
          </p>
        </div>
      </section>

      {/* Image & Verse Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#E53E3E] to-[#2D3748] rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src="/heike-dannoura.png" alt="壇ノ浦の戦い 二位の尼" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Anchor className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">The End of Taira</span>
                  </div>
                  <p className="text-white font-serif text-lg italic">"波の下にも都の候ふ"</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1f1f3a] p-8 md:p-12 rounded-[2.5rem] border-2 border-white/10 backdrop-blur-xl relative shadow-2xl overflow-x-auto">
                <h2 className="text-2xl font-bold mb-8 text-[#FFB3B3] flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  原文と現代語訳
                </h2>
                
                <div className="flex flex-row-reverse gap-12 pb-4 h-[400px]" style={{ minWidth: 'max-content' }}>
                  {/* Vertical Original Text */}
                  <div className="px-8 border-l border-white/20">
                    <p className="text-white text-xl leading-loose font-serif h-full" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      二位の尼、これを見て、日ごろの望み遂げぬとや思はれけん、……「波の下にも都の候ふ」とて、いとけなき御身を抱き奉りて、千尋の底へぞ入り給ふ。悲しきかな、無常の春の風、たちまちに花の御姿を散らし、情なきかな、分段の荒き波、玉体を沈め奉る。
                    </p>
                  </div>

                  {/* Modern Translation */}
                  <div className="pr-8 flex flex-col justify-center max-w-sm">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <h4 className="text-[#FFB3B3] font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        現代語訳
                      </h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        二位の尼は敗北を見て、最期の覚悟を決められたのでしょう。「波の下にも、立派な都がございますから」と言って、幼い安徳天皇をしっかりとお抱き申し上げて、深い海の底へとお入りになった。悲しいことよ、無情な春の嵐が、たちまちに花のような天皇のお姿を散らし、荒波が尊いお身体を海の底へ沈めてしまった。
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/30 mt-6 text-right italic">← 原文は右から左へ縦に読みます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Background */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] border-2 border-white/10">
            <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
              <Brain className="w-10 h-10 text-[#FFB3B3]" />
              最終決戦の背景
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#E53E3E]/20 flex items-center justify-center border border-[#E53E3E]/40 text-[#E53E3E] font-bold">1185</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">壇ノ浦の戦い</h4>
                    <p className="text-white/70 leading-relaxed">山口県下関。船の上での最終決戦。潮の流れが変わり、さらに味方の裏切りもあって平家は絶望的な状況に陥ります。</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#E53E3E]/20 flex items-center justify-center border border-[#E53E3E]/40 text-[#E53E3E] font-bold">幼帝</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">「波の下の都」</h4>
                    <p className="text-white/70 leading-relaxed">わずか8歳の安徳天皇に対し、二位の尼は「波の下にも都がございます」と優しく嘘をつき、共に入水しました。</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f1f3a] p-8 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#E53E3E]" />
                  見るべきほどのことは見つ
                </h4>
                <p className="text-white/70 leading-relaxed italic">
                  平家の武将・平知盛が遺した最期の言葉。「見るべきものはすべて見た＝悔いはない」と言い残し、重い鎧を二枚着て、海へ身を投げました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emo Points */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-[#E53E3E]" />
            ここがエモい！注目ポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#E53E3E]/50 transition-all">
              <div className="text-3xl mb-4">💔</div>
              <h4 className="text-xl font-bold text-white mb-4">究極の「バッドエンド」の美学</h4>
              <p className="text-white/70">最強の軍団が、全滅して海に沈む。「引き際の潔さ」に日本特有の美学が凝縮されています。</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#E53E3E]/50 transition-all">
              <div className="text-3xl mb-4">🗡️</div>
              <h4 className="text-xl font-bold text-white mb-4">「三種の神器」の散逸</h4>
              <p className="text-white/70">天皇の証である神器も共に海へ。特に「草薙剣」は失われたままとなり、国家的な悲劇を象徴しました。</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#E53E3E]/50 transition-all">
              <div className="text-3xl mb-4">🚩</div>
              <h4 className="text-xl font-bold text-white mb-4">「赤」と「白」の対比</h4>
              <p className="text-white/70">平家の「赤旗」が次々と海に投げ捨てられ、波間に浮かぶ光景は、視覚的に強烈な印象を残します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <Link
            to="/article/literature/heike/yoichi"
            className="w-full md:w-auto px-10 py-5 bg-white/5 text-white/70 rounded-2xl hover:bg-white/10 transition-all border-2 border-white/10 font-bold text-xl text-center"
          >
            ← 前：那須与一
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
