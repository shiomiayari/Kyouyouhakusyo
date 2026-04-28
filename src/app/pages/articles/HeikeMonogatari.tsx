import { Star, Sparkles, BookOpen, Users, Brain, Heart, Swords, Waves, Target, Anchor, Music, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';
import { Link } from 'react-router';

const heroImage = '/heike-hero.png';
const book1Image = '/heike-book1.png';
const book2Image = '/heike-book2.png';
const book3Image = '/heike-biwa.png';

export function HeikeMonogatari() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const radarData = [
    {
      subject: 'ドラマ性',
      value: 100,
      fullMark: 100,
    },
    {
      subject: 'エモさ（無常感）',
      value: 100,
      fullMark: 100,
    },
    {
      subject: 'バイオレンス',
      value: 80,
      fullMark: 100,
    },
    {
      subject: '教養・哲学',
      value: 80,
      fullMark: 100,
    },
    {
      subject: '疾走感',
      value: 60,
      fullMark: 100,
    },
  ];

  const episodes = [
    {
      id: 1,
      title: '① 祇園精舎（ぎおんしょうじゃ）',
      icon: <Waves className="w-6 h-6" />,
      content: 'すべての始まり。「形あるものは必ず壊れる」という、この物語の「魂」が詰まった超有名イントロ。',
      color: '#FFB3B3',
      path: '/article/literature/heike/gion',
    },
    {
      id: 2,
      title: '② 敦盛の最期（あつもりのさいご）',
      icon: <Swords className="w-6 h-6" />,
      content: 'わずか16歳の美少年・平敦盛と、彼を討たねばならなかったベテラン武士・熊谷直実の悲劇。戦場における「情」と「残酷さ」が交錯する屈指の名シーン。',
      color: '#B3C6FF',
      path: '/article/literature/heike/atsumori',
    },
    {
      id: 3,
      title: '③ 那須与一（なすのよいち）',
      icon: <Target className="w-6 h-6" />,
      content: '「扇の的」を射抜く一瞬。敵味方双方がその技術を称賛し、一瞬だけ戦場が静まり返る、スポーツ的な爽快感と美しさがある場面。',
      color: '#FFE5A0',
      path: '/article/literature/heike/yoichi',
    },
    {
      id: 4,
      title: '④ 壇ノ浦の戦い',
      icon: <Anchor className="w-6 h-6" />,
      content: '平家の滅亡。「波の下にも都がございます」と、幼い安徳天皇を抱いて入水する二位の尼。物語のクライマックスです。',
      color: '#B8F3D8',
      path: '/article/literature/heike/dannoura',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16 bg-[#1a1a2e]">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 text-white/10 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/5 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-96 right-1/4 text-white/10 animate-pulse delay-200">
        <Sparkles className="w-10 h-10" />
      </div>

      {/* Back Button */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white/70 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/10 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            ホームに戻る
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF4D4D] to-[#4D79FF] text-white rounded-full mb-6 font-bold border-2 border-white shadow-lg text-sm">
            大人の教養白書：Deep Report #03
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4D4D] to-[#4D79FF] rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#1f1f3a] rounded-[2rem] border-4 border-white/20 overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                  <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
                    『平家物語』<br />
                    <span className="text-2xl md:text-3xl bg-gradient-to-r from-[#FFB3B3] to-[#B3C6FF] bg-clip-text text-transparent italic">
                      〜滅びの美学と人間ドラマ〜
                    </span>
                  </h1>
                  <blockquote className="border-l-4 border-[#FF4D4D] pl-4 py-2 mb-6">
                    <p className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed italic">
                      「奢れる者も久しからず。最強の軍団が、一瞬で海に消えるまでの壮大なバッドエンド・ストーリー」
                    </p>
                  </blockquote>
                </div>
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="壇ノ浦の戦い"
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#1f1f3a] md:block hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFB3B3]" />
            全体要約
          </h2>
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border-2 border-white/20 shadow-2xl">
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              平安時代末期、栄華を極めた「平氏」が、ライバルである「源氏」に追い詰められ、壇ノ浦の戦いで滅亡するまでの約20年間を描いた物語。
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              単なる戦争記録ではなく、仏教的な<strong className="text-[#FFB3B3]">「諸行無常（この世に永遠なものはない）」</strong>をベースに、勝者の傲慢と敗者の悲哀を、琵琶法師たちの語り（音楽）によって語り継がれてきた、エンターテインメントの原点です。
            </p>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Music className="w-8 h-8 text-[#B3C6FF]" />
            重要なエピソード
          </h2>
          <div className="grid gap-6">
            {episodes.map((episode) => (
              <Link
                key={episode.id}
                to={episode.path}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-white/30 transition-all duration-300 block"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform"
                      style={{ backgroundColor: episode.color, color: '#1a1a2e' }}
                    >
                      {episode.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                        {episode.title}
                      </h3>
                      {episode.path !== '#' && (
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1 block">Click to Deep Dive →</span>
                      )}
                    </div>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {episode.content}
                  </p>
                </div>
                <div 
                  className="absolute bottom-0 left-0 h-1 transition-all duration-300 w-0 group-hover:w-full"
                  style={{ backgroundColor: episode.color }}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* History & Taira Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FF4D4D]/20 to-transparent p-8 rounded-[2rem] border-2 border-[#FF4D4D]/30 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-[#FF4D4D]" />
                時代背景
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                貴族が政治をしていた「平安時代」が終わり、刀を持った「武士」が主役になる激動の転換期。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#4D79FF]/20 to-transparent p-8 rounded-[2rem] border-2 border-[#4D79FF]/30 backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <Users className="w-6 h-6 text-[#4D79FF]" />
                平家とは
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                「平氏にあらずんば人にあらず」と言い放つほど権力を独占。しかし、その強すぎる「エリート意識」が、野性味溢れる源氏の逆襲を招くことに。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border-2 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Music className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Users className="w-8 h-8 text-[#FFE5A0]" />
                作者と成立のナゾ
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                作者：特定の一人ではなく、信濃前司行長（しなののぜんじゆきなが）が土台を作り、それを琵琶法師たちが各地で語り継ぐ中で、どんどんドラマチックに肉付けされていった「集合知」の作品。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Radar Chart Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#FF4D4D]" />
            独自分析：レーダーチャート
          </h2>
          <div className="bg-[#1f1f3a] p-8 md:p-12 rounded-[3rem] border-4 border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#ffffff30" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 'bold' }} 
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fill: '#ffffff50' }} 
                    />
                    <Radar
                      name="平家物語"
                      dataKey="value"
                      stroke="#FF4D4D"
                      fill="#FF4D4D"
                      fillOpacity={0.6}
                      strokeWidth={4}
                    />
                    <Legend wrapperStyle={{ color: '#ffffff', paddingTop: '20px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <strong className="text-xl text-[#FFB3B3] block mb-2">🎭 ドラマ性：5</strong>
                  <p className="text-white/70">とにかくキャラが濃い！</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <strong className="text-xl text-[#B3C6FF] block mb-2">💧 エモさ（無常感）：5</strong>
                  <p className="text-white/70">涙なしには読めない</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <strong className="text-xl text-[#FF4D4D] block mb-2">⚔️ バイオレンス：4</strong>
                  <p className="text-white/70">戦なのでそれなりに激しい</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <strong className="text-xl text-[#FFE5A0] block mb-2">📜 教養・哲学：4</strong>
                  <p className="text-white/70">仏教思想が根底にある</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <strong className="text-xl text-[#B8F3D8] block mb-2">🐎 疾走感：3</strong>
                  <p className="text-white/70">前半は少し重厚ですが、後半の合戦シーンは一気です</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Books Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFE5A0]" />
            平家物語について深めたい人にお勧めの本
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Book 1 */}
            <div className="group bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-8 border-2 border-white/10 hover:border-[#FFB3B3]/50 transition-all hover:-translate-y-2">
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl">
                <img src={book1Image} alt="平家物語 (古川日出男 訳)" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">『平家物語（全4巻）』</h3>
              <p className="text-sm font-bold text-[#FFB3B3] mb-4">河出文庫 / 古川日出男（訳）</p>
              <div className="space-y-4 text-sm text-white/70">
                <p><strong>おすすめ理由：</strong><br />とにかくリズムが良い。琵琶法師が語っていた「声の文学」であることを意識した文体で、スラスラ読めるのに重厚感があります。</p>
                <p><strong>ここがポイント：</strong><br />難しい注釈を読み飛ばさなくても、物語の流れとして頭に入ってくる圧倒的なリーダビリティ。全巻読み通す達成感を味わいたいなら、この新訳がベストです。</p>
              </div>
            </div>

            {/* Book 2 */}
            <div className="group bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-8 border-2 border-white/10 hover:border-[#B3C6FF]/50 transition-all hover:-translate-y-2">
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl">
                <img src={book2Image} alt="アニメ 平家物語" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">『平家物語』</h3>
              <p className="text-sm font-bold text-[#B3C6FF] mb-4">山田尚子（監督）・高野文子（キャラ原案）</p>
              <div className="space-y-4 text-sm text-white/70">
                <p><strong>おすすめ理由：</strong><br />「滅びの美学」を「色」と「光」で表現したアニメの美しさは衝撃的でした。その背景にある、平家一門の一人ひとりを「一人の人間」として丁寧に描く視点を深めることができます。</p>
                <p><strong>ここがポイント：</strong><br />重苦しい古典のイメージを覆す、パステル調の繊細なビジュアル。これを見ると、壇ノ浦のシーンで絶対に泣けます。</p>
              </div>
            </div>

            {/* Book 3 */}
            <div className="group bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-8 border-2 border-white/10 hover:border-[#FFE5A0]/50 transition-all hover:-translate-y-2">
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl">
                <img src={book3Image} alt="平家物語の舞台裏" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">『平家物語の舞台裏』</h3>
              <p className="text-sm font-bold text-[#FFE5A0] mb-4">角川ソフィア文庫 / 兵藤裕己（著）</p>
              <div className="space-y-4 text-sm text-white/70">
                <p><strong>おすすめ理由：</strong><br />「なぜこの物語は作られたのか？」というプロデューサー視点で書かれた一冊。死者の鎮魂という側面を解説しています。</p>
                <p><strong>ここがポイント：</strong><br />「那須与一はなぜあの場面で呼ばれたのか？」といった、物語の構造的な面白さを知ることができます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] p-12 text-center border-4 border-white/20 bg-gradient-to-br from-[#FF4D4D] via-[#1f1f3a] to-[#4D79FF] shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                栄華のあとに残るものは？
              </h2>
              <p className="text-xl text-white/80 mb-10">
                『平家物語』の深淵なる世界、楽しんでいただけましたか？<br />
                次は、源氏の物語をもう一度読み直してみるのもいいかもしれません。
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#1a1a1e] rounded-2xl shadow-xl hover:scale-105 transition-transform font-bold text-lg border-2 border-white"
              >
                <Sparkles className="w-5 h-5" />
                他の教養も見てみる
              </Link>
            </div>
            {/* Decorative Stars */}
            <div className="absolute top-6 right-6 text-white/20">
              <Star className="w-12 h-12 fill-current" />
            </div>
            <div className="absolute bottom-6 left-6 text-white/20">
              <Star className="w-10 h-10 fill-current" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
