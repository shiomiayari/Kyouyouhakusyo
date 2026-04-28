import { Star, Sparkles, ArrowLeft, BookOpen, Brain, Sparkle, Target, Wind } from 'lucide-react';
import { Link } from 'react-router';

export function NasuNoYoichi() {
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
        <Sparkle className="w-7 h-7" />
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
          <div className="inline-block px-4 py-2 bg-[#F6AD55] text-white rounded-full mb-6 font-bold border-2 border-white shadow-lg text-sm">
            Episode #03
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 text-white leading-tight">
            那須与一
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            「扇の的」を射抜く一瞬。敵味方双方がその技術を称賛し、一瞬だけ戦場が静まり返る、スポーツ的な爽快感と美しさがある場面。
          </p>
        </div>
      </section>

      {/* Image & Verse Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F6AD55] to-[#4299E1] rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src="/heike-yoichi.png" alt="那須与一 扇の的" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">The One Shot One Kill</span>
                  </div>
                  <p className="text-white font-serif text-lg italic">"あの扇の真ん中射させてたばせたまへ"</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1f1f3a] p-8 md:p-12 rounded-[2.5rem] border-2 border-white/10 backdrop-blur-xl relative shadow-2xl overflow-x-auto">
                <h2 className="text-2xl font-bold mb-8 text-[#FFE5A0] flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  原文と現代語訳
                </h2>
                
                <div className="flex flex-row-reverse gap-12 pb-4 h-[420px]" style={{ minWidth: 'max-content' }}>
                  {/* Vertical Original Text */}
                  <div className="px-8 border-l border-white/20">
                    <p className="text-white text-xl leading-loose font-serif h-full" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                      与一、目をふさいで、「南無八幡大菩薩、我が国の神明、日光の権現、宇都宮、那須の湯泉大明神、願はくは、あの扇の真ん中射させてたばせたまへ。これを射損ずるものならば、弓切り折り自害して、人に再び面を向かふべからず。今一度本国へ帰さんと思し召さば、この矢はづさせたまふな」と心のうちに念じて、目を見開いたれば、風も少し吹き弱り、扇も射よければ、鏑を取ってつがひ、よっ引いてひょうど放つ。
                    </p>
                  </div>

                  {/* Modern Translation */}
                  <div className="pr-8 flex flex-col justify-center max-w-sm">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <h4 className="text-[#FFE5A0] font-bold mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        現代語訳
                      </h4>
                      <p className="text-white/80 text-base leading-relaxed">
                        与一は、目を閉じて、「南無八幡大菩薩、故郷の神々よ、どうかあの扇の真ん中を射抜かせてください。もし射損じれば、弓を折り自害します。再起は期しません。故郷へ帰そうとお思いなら、この矢を外させないでください」と心の中で祈って目を見開くと、風も弱まり、扇も射やすい状態になった。与一は鏑矢（かぶらや）をつがえ、十分に引き絞って放った。
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
              <Brain className="w-10 h-10 text-[#FFE5A0]" />
              ストーリー解説
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6AD55]/20 flex items-center justify-center border border-[#F6AD55]/40 text-[#F6AD55] font-bold text-xl">1</div>
                <h4 className="text-xl font-bold text-white">シチュエーション</h4>
                <p className="text-white/70 leading-relaxed">平家軍が舟で海へ逃げ、源氏軍が岸に構える「屋島の戦い」。平家側から一艘の小舟が現れ、扇を立てて「射抜いてみよ」と挑発します。</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6AD55]/20 flex items-center justify-center border border-[#F6AD55]/40 text-[#F6AD55] font-bold text-xl">2</div>
                <h4 className="text-xl font-bold text-white">抜擢された若武者</h4>
                <p className="text-white/70 leading-relaxed">命じられたのは、下野国（栃木県）出身の若き名手・那須与一。失敗すれば源氏の恥、成功しても奇跡という極限状態。</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6AD55]/20 flex items-center justify-center border border-[#F6AD55]/40 text-[#F6AD55] font-bold text-xl">3</div>
                <h4 className="text-xl font-bold text-white">最高の結果</h4>
                <p className="text-white/70 leading-relaxed">矢は見事に扇の要を射抜き、扇は空高く舞い上がって海へ落ちました。この鮮やかさに、敵も味方も共に大喝采を送ったのです。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emo Points */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-[#F6AD55]" />
            ここがエモい！注目ポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#F6AD55]/50 transition-all">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-4">敵味方を超えた「美」への賞賛</h4>
              <p className="text-white/70">圧倒的な技術と勇気の前では、人は等しく心を動かされるという、武士道の清々しさが描かれています。</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#F6AD55]/50 transition-all">
              <div className="text-3xl mb-4">⚖️</div>
              <h4 className="text-xl font-bold text-white mb-4">プレッシャーとの戦い</h4>
              <p className="text-white/70">「射損じたら自害する」という不退転の決意。神頼みだけでなく、自らの命を賭けた精神力が奇跡を呼び込みました。</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#F6AD55]/50 transition-all">
              <div className="text-3xl mb-4">🎨</div>
              <h4 className="text-xl font-bold text-white mb-4">視覚的な美しさ</h4>
              <p className="text-white/70">夕日を浴びる海、揺れる小舟、赤い日の丸の扇。カラー映画のような色彩豊かな描写は、際立って美しいシーンです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <Link
            to="/article/literature/heike/atsumori"
            className="w-full md:w-auto px-10 py-5 bg-white/5 text-white/70 rounded-2xl hover:bg-white/10 transition-all border-2 border-white/10 font-bold text-xl text-center"
          >
            ← 前：敦盛の最期
          </Link>
          <Link
            to="/article/literature/heike/dannoura"
            className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-[#F6AD55] to-[#4299E1] text-white rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform border-4 border-white text-center"
          >
            次：壇ノ浦の戦い
          </Link>
        </div>
      </section>
    </div>
  );
}
