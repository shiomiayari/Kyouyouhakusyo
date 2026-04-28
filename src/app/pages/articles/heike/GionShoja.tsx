import { Star, Sparkles, ArrowLeft, BookOpen, Brain, Music, Volume2 } from 'lucide-react';
import { Link } from 'react-router';

export function GionShoja() {
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
          <div className="inline-block px-4 py-2 bg-[#FF4D4D] text-white rounded-full mb-6 font-bold border-2 border-white shadow-lg text-sm">
            Episode #01
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 text-white leading-tight">
            祇園精舎
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            すべての始まり。「形あるものは必ず壊れる」という、この物語の「魂」が詰まった超有名イントロ。
          </p>
        </div>
      </section>

      {/* Gion Image & Text Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF4D4D] to-[#4D79FF] rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src="/heike-gion.png" alt="祇園精舎の鐘" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">The Sound of the Bell</span>
                  </div>
                  <p className="text-white font-serif text-lg italic">"諸行無常の響きあり"</p>
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
                  <div className="flex flex-row-reverse gap-8 px-8 border-l border-white/20">
                    <p className="text-white text-2xl leading-loose font-serif h-full" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      祇園精舎の鐘の声、諸行無常の響きあり。
                    </p>
                    <p className="text-white text-2xl leading-loose font-serif h-full" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      娑羅双樹の花の色、盛者必衰の理をあらはす。
                    </p>
                    <p className="text-white text-2xl leading-loose font-serif h-full" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      奢れる人も久しからず、ただ春の夜の夢のごとし。
                    </p>
                    <p className="text-white text-2xl leading-loose font-serif h-full" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      猛き者もつひにはほろびぬ、ひとへに風の前の塵に同じ。
                    </p>
                  </div>

                  {/* Modern Translation Content (Horizontal for readability in contrast) */}
                  <div className="pr-8 flex flex-col justify-center max-w-md">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <h4 className="text-[#FFB3B3] font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        現代語訳
                      </h4>
                      <p className="text-white/80 text-lg leading-relaxed">
                        祇園精舎で鳴り響く鐘の音には、「この世のすべては移り変わり、永遠なものなどない（諸行無常）」という響きが含まれている。<br /><br />
                        （お釈迦様が亡くなる時に白く枯れたという）娑羅双樹の花の色は、「勢いのある者も必ず衰える（盛者必衰）」というこの世の真理を示している。<br /><br />
                        権力を手に入れて威張っている人も、その栄光は長くは続かない。まるで春の夜に見る短い夢のようなものだ。<br /><br />
                        勢い盛んで勇猛な者も、最後には滅んでしまう。それはまったく、風に吹き飛ばされる塵（ちり）と同じようにはかないものなのだ。
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/30 mt-6 text-right italic">← 原文は右から左へ縦に読みます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#FF4D4D]" />
            重要なキーワード解説
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FF4D4D]/20 to-transparent p-10 rounded-[3rem] border-2 border-[#FF4D4D]/30 backdrop-blur-md shadow-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-[#FFB3B3]">諸行無常（しょぎょうむじょう）</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                「形あるものはすべて変化し、一瞬たりとも同じ状態ではない」という考え。平家が頂点に立ち、そして沈んでいくスピード感を象徴しています。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#4D79FF]/20 to-transparent p-10 rounded-[3rem] border-2 border-[#4D79FF]/30 backdrop-blur-md shadow-xl hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-[#B3C6FF]">盛者必衰（じょうしゃひっすい）</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                「勢いがある者も、いつかは必ず衰える」というルール。どんなに最強の軍団でも、この宇宙の法則からは逃げられないという、平家への死亡フラグのような言葉です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Setting Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] border-2 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Music className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3 text-center md:text-left">
                <Music className="w-10 h-10 text-[#FFE5A0]" />
                舞台設定のこだわり
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF4D4D]/20 flex items-center justify-center shrink-0 border border-[#FF4D4D]/50 text-[#FF4D4D] text-2xl font-bold shadow-lg">鐘</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">祇園精舎とは</h4>
                    <p className="text-lg text-white/70 leading-relaxed">
                      中インドにあった、お釈迦様（ブッダ）が説法を行ったお寺のことです。当時の読者にとって、インドは「はるか遠くにある聖地」。物語の幕開けを異国の聖地の音から始めることで、<strong className="text-[#FF4D4D]">スケールの大きさ</strong>を演出しています。
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#4D79FF]/20 flex items-center justify-center shrink-0 border border-[#4D79FF]/50 text-[#4D79FF] text-2xl font-bold shadow-lg">花</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">娑羅双樹（さらそうじゅ）</h4>
                    <p className="text-lg text-white/70 leading-relaxed">
                      お釈迦様が亡くなった時、その四方にあった4対8本の木が、悲しみのあまり一斉に白い花を咲かせ、鶴のように白くなって枯れたという伝説があります。<strong className="text-[#4D79FF]">「死」や「別れ」の象徴</strong>として、平家の最後を予感させています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <Link
            to="/article/literature/heike"
            className="w-full md:w-auto px-8 py-4 bg-white/5 text-white/70 rounded-2xl hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md font-bold text-center"
          >
            平家物語一覧へ
          </Link>
          <Link
            to="/article/literature/heike/atsumori"
            className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-[#FF4D4D] to-[#4D79FF] text-white rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform border-2 border-white text-center"
          >
            次：敦盛の最期
          </Link>
        </div>
      </section>
    </div>
  );
}
