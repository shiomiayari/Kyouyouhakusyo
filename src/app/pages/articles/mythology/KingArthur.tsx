import { Star, Sparkles, BookOpen, Users, Brain, Heart, ChevronRight } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { Link } from 'react-router';

const charactersImage = '/arther.png';

export function KingArthur() {
  const radarData = [
    { subject: '人間関係の複雑度', value: 90, fullMark: 100 },
    { subject: '現代への転用力', value: 85, fullMark: 100 },
    { subject: 'エモ・情緒レベル', value: 95, fullMark: 100 },
    { subject: '哲学的深度', value: 80, fullMark: 100 },
    { subject: 'タイパ・読了難易度', value: 70, fullMark: 100 },
  ];

  const chapters = [
    { id: 'birth', title: 'アーサー王の誕生と「剣」の伝説', desc: '魔法、聖剣、そして王の証明。' },
    { id: 'knights', title: '円卓の騎士と騎士道精神', desc: '平等の象徴「円卓」と英雄たちの肖像。' },
    { id: 'holygrail', title: '聖杯探索（聖杯伝説）', desc: '究極の救済と魂の巡礼の物語。' },
    { id: 'camelot', title: 'キャメロットと悲劇の人間模様', desc: '光と影が交差する宮廷劇。' },
    { id: 'avalon', title: '王の最期とアヴァロンの島', desc: '伝説の終焉と再臨の予言。' },
    { id: 'history', title: 'アーサー王伝説の歴史的背景', desc: 'いかにして歴史は神話となったか。' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16">
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#FFD6A5] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            伝説・神話：Deep Report
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            アーサー王伝説の深淵<br />
            <span className="text-2xl md:text-3xl text-white/90">魔法、聖杯、騎士道。歴史と神話が交差する、英国最大の叙事詩。</span>
          </h1>
        </div>
      </section>

      {/* Catchphrase & Summary */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#FFD6A5] to-[#FFC2D1] p-8 md:p-12 rounded-3xl border-4 border-white mb-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">⚔️</div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1B2B44] leading-relaxed mb-4">
                  ただの英雄譚ではなく、「王の孤独と理想の崩壊」を描いた壮大な人間ドラマ
                </h2>
                <p className="text-[#1B2B44]/80 font-medium">
                  「平和で公正な国（キャメロット）を作る」という高潔な理想を掲げた王が、自らの血縁（モードレッド）と、最も信頼していた親友（ランスロット）によってその理想を内側から破壊されていく……。<br/>
                  この「完璧なはずの光」が「静かな影」に飲み込まれていくプロセスこそが、何世紀もの間、人々を惹きつけてやまない理由です。<br/>
                  ファンタジーの源流でありながら、結末はあくまで「泥臭く、切ない」のがこの物語の真骨頂です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters (Branching) */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFD6A5]" />
            詳細なストーリーへの扉（全6編）
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/article/mythology/king-arthur/${chapter.id}`}
                className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20 hover:border-[#FFD6A5] hover:bg-[#2A3B5A]/80 transition-all group flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD6A5] transition-colors">{chapter.title}</h3>
                  <p className="text-sm text-white/70">{chapter.desc}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-[#FFD6A5] transform group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Background */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Users className="w-8 h-8 text-[#B8F3D8]" />
            ルーツと時代：歴史の闇から生まれた叙事詩
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">時代背景（暗黒の5〜6世紀）</h3>
              <p className="text-white/80">
                ローマ帝国が去り、蛮族（サクソン人）が押し寄せる混沌のブリテン島。荒廃した大地で、人々は「いつか救世主が我々を守ってくれる」という「希望の象徴」としてアーサーという存在を捏造・定着させていきました。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#B3E5FC] mb-2">ルーツ（体系化のプロセス）</h3>
              <p className="text-white/80">
                12世紀、ジェフリー・オブ・モンマスがケルトの口承を歴史書風に整理したことで「歴史上の実在人物」としての格付けを得ました。これにより、単なる「おとぎ話」から「ヨーロッパの正史」へと昇格したのです。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">決定版（マロリーの魔法）</h3>
              <p className="text-white/80">
                15世紀の『アーサー王の死』は、断片化していた伝説を「王の誕生から崩壊まで」の全8巻にまとめ上げた偉業です。当時、印刷技術（グーテンベルク）の普及と重なったこともあり、この版が現代にまで続く「正典」となりました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Users className="w-8 h-8 text-[#FFC2D1]" />
            主要登場人物：光と影の相関図
          </h2>
          <div className="bg-white p-6 rounded-3xl border-4 border-white mb-8">
            <img src={charactersImage} alt="アーサー王伝説・登場人物" className="w-full h-auto rounded-xl" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20">
              <h3 className="text-lg font-bold text-[#FFD6A5] mb-2">アーサー王</h3>
              <p className="text-sm text-white/80">彼の悩みは「王である前に一人の人間であること」のジレンマ。聖剣という強大な力を持つ一方、冷徹な判断と情に厚い心の間で板挟みになります。</p>
            </div>
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20">
              <h3 className="text-lg font-bold text-[#B8F3D8] mb-2">マーリン</h3>
              <p className="text-sm text-white/80">アーサーの「頭脳」であり「メタ視点」を持つ予言者。彼の存在により、アーサーの破滅は最初から織り込み済みという悲劇性が漂います。</p>
            </div>
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20">
              <h3 className="text-lg font-bold text-[#FFC2D1] mb-2">ランスロットとグィネヴィア</h3>
              <p className="text-sm text-white/80">王の理想（騎士道）を象徴する二人が、王の理想（忠誠）を裏切るという「理想の矛盾」そのもの。この禁断の愛がキャメロットを腐敗させます。</p>
            </div>
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20">
              <h3 className="text-lg font-bold text-[#C3B7F5] mb-2">モーガン・ル・フェイ</h3>
              <p className="text-sm text-white/80">アーサーの異父姉であり魔術師。物語の「影」を担い、異教の魔法を司る存在として世界への抵抗を象徴します。</p>
            </div>
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">モードレッド</h3>
              <p className="text-sm text-white/80">王の息子（または甥）。反逆者としてカムランの戦いを引き起こし、「運命に逆らおうとした者ほど運命に食い殺される」冷徹な教訓を体現します。</p>
            </div>
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border-2 border-white/20">
              <h3 className="text-lg font-bold text-[#FFE5A0] mb-2">ガウェイン & パーシヴァル</h3>
              <p className="text-sm text-white/80">太陽の如き忠実な甥・ガウェインと、聖杯を見つけ出す清らかな心を持つパーシヴァル。円卓を支える個性的英雄たち。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Radar Chart & Game Impact */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <Heart className="w-8 h-8 text-[#C3B7F5]" />
              伝説の評価レーダー
            </h2>
            <div className="bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20 h-full">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#ffffff30" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#ffffff80' }} />
                  <Radar name="アーサー王伝説" dataKey="value" stroke="#FFD6A5" fill="#FFD6A5" fillOpacity={0.6} strokeWidth={3} />
                  <Legend wrapperStyle={{ color: '#ffffff' }} />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
                <p><strong className="text-[#FFC2D1]">💔 人間関係:</strong> 理想の騎士と王妃の不倫などドロドロの愛憎劇。</p>
                <p><strong className="text-[#FFD6A5]">⚔️ 転用力:</strong> 現代ファンタジーの雛形として圧倒的。</p>
                <p><strong className="text-[#C3B7F5]">😢 情緒レベル:</strong> 悲劇的な結末に魂が揺さぶられる。</p>
                <p><strong className="text-[#B8F3D8]">🤔 哲学的深度:</strong> キリスト教とケルト神話の交差点。</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <Brain className="w-8 h-8 text-[#FFE5A0]" />
              現代ゲームでの活躍
            </h2>
            <div className="bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20 space-y-6 h-full">
              <div>
                <h3 className="font-bold text-[#FFD6A5] mb-2">聖剣のメタファー</h3>
                <p className="text-sm text-white/80">「エクスカリバー」は単なる武器ではなく「王としての資格」を象徴。手に入れることは「正当な主人公」になることを意味します。</p>
              </div>
              <div>
                <h3 className="font-bold text-[#B3E5FC] mb-2">聖杯探索のクエスト構造</h3>
                <p className="text-sm text-white/80">「特定条件で手に入る最強アイテム探し」というRPGの構造は、まさに「聖杯探索」そのものです。</p>
              </div>
              <div>
                <h3 className="font-bold text-[#FFC2D1] mb-2">キャラクターの多様性</h3>
                <p className="text-sm text-white/80">「王＝騎士」というテンプレートを壊す（性別反転、悪の王など）ことがクリエイターの「伝説への挑戦」となっています。もはや時代ごとに姿を変える「鏡」なのです。</p>
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10 mt-4">
                <p className="text-sm text-white/60"><strong className="text-white/80">豆知識：</strong> アーサーは死んだのではなく、妖精の島アヴァロンで眠りについており、危機の時に戻ってくるという「救世主伝説」が組み込まれています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
