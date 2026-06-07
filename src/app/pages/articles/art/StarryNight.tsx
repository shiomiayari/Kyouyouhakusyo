import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Moon, Star, Church } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function StarryNight() {
  const radarData = [
    { subject: '感情の爆発度', A: 5, fullMark: 5 },
    { subject: '写実性', A: 1, fullMark: 5 },
    { subject: '色彩のコントラスト', A: 5, fullMark: 5 },
    { subject: '神秘性', A: 4, fullMark: 5 },
    { subject: '構図の安定感', A: 3, fullMark: 5 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16 pt-12 px-6 sm:px-8 lg:px-12 bg-[#1B2B44]">
      <div className="max-w-4xl mx-auto text-white">
        <Link to="/" className="inline-flex items-center gap-2 text-[#C3B7F5] hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-5 h-5" />
          ホームに戻る
        </Link>
        
        <div className="inline-block px-4 py-2 bg-[#C3B7F5] text-[#1B2B44] rounded-full mb-4 font-bold text-sm">
          西洋絵画
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
          魂を揺さぶる青と黄：<br/>ゴッホ『星月夜』の深淵
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#FFE5A0] mb-12">
          <p className="text-xl font-bold text-[#FFE5A0] italic leading-relaxed">
            「うねる夜空、爆発する星々。精神の暗闇の中で、ゴッホが狂気の手前で捕まえた不滅の光。」
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/gogh-starry-night.png" alt="星月夜 フィンセント・ファン・ゴッホ" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">壮大な概要：この絵が描かれた「狂気と静寂」の場所</h2>
            <p className="mb-6 text-white/80">
              『星月夜』が描かれたのは1889年。ゴッホが自らの左耳を切り落とすという有名な事件を起こした後、南フランスのサン＝レミにある<strong>精神病院（療養所）の格子窓から見えた、日の出前の夜空</strong>がベースになっています。
            </p>
            <p className="mb-6 text-white/80">
              この絵の最大の特徴は、狂おしいほどにうねる「青い夜空」と、まるで太陽のように強烈な光を放つ「黄色い星や三日月」の強烈なコントラストです。現実の風景を写実的に描くのではなく、<strong>ゴッホ自身の燃え上がるような内面（感情）を夜空に投影して描いた</strong>、表現主義の先駆けとなる作品です。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              画面を読み解く3つの重要シンボル
            </h2>
            <p className="mb-6">『星月夜』の画面は、いくつかの象徴的な要素で構成されています。</p>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2 flex items-center gap-2">
                  <Moon className="w-5 h-5"/> ① 天へと手を伸ばす「糸杉（いとすぎ）」
                </h3>
                <p>
                  画面左手前に大きく描かれている黒暗い木は「糸杉」です。ヨーロッパにおいて糸杉は、墓地によく植えられることから「死や喪失」の象徴とされています。不気味にゆらめきながら天に向かってそびえ立つ姿は、地上の苦悩（死）から天上の救いへと手を伸ばす、ゴッホ自身の祈りのようでもあります。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5"/> ② 宇宙のエネルギー：うねる「渦巻き」
                </h3>
                <p>
                  夜空の中央で激しく回転するダイナミックな渦巻き。ゴッホは当時、天文学の雑誌などで紹介され始めていた<strong>「渦巻銀河（星雲）」のイラスト</strong>からインスピレーションを得たと言われています。彼は夜空を「静かな闇」ではなく、<strong>「凄まじいエネルギーで満ちた生き物」</strong>として捉えていました。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2 flex items-center gap-2">
                  <Church className="w-5 h-5"/> ③ 現実にはなかった「故郷の教会」
                </h3>
                <p>
                  画面下に広がる静かな村の風景。実はこれ、ゴッホが病院の窓から見ていた実際の景色とは異なります。中央にそびえ立つ高い尖塔を持つ教会は、彼が幼少期を過ごした<strong>母国オランダの教会</strong>のカタチです。激しい精神の発作に苦しむ中で、彼は絵の中に「優しかった故郷の記憶」をそっと埋め込んだのです。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">珠玉の豆知識（トリビア）</h2>
            
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">① 実際の「星の配置」と一致している？</h3>
                <p className="text-white/80">
                  天文学者がこの絵が描かれた1889年6月中旬のサン＝レミの夜空をシミュレーションしたところ、当時、明け方の東の空に「金星」が異常に明るく輝いていたことが分かっています。画面中央の糸杉のすぐ右側にある、ひときわ大きく白い輝きを放つ星――。これはゴッホが目撃したリアルな金星の輝きだったのです。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">② 本人はこの絵を「失敗作」だと思っていた？</h3>
                <p className="text-white/80">
                  現代では100億円を優に超える価値を持つ世界的な名作ですが、ゴッホ自身は弟のテオへの手紙の中で、「今回の夜の習作は、形が誇張されすぎていて、何の愛着も湧かない（失敗作だ）」と語っていました。彼にとっては、自分の頭の中のビジョンが強烈に出すぎてしまい、コントロールを失った絵に見えたのかもしれません。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">③ 北斎の「グレート・ウェーブ」との関係</h3>
                <p className="text-white/80">
                  印象派と同じく、ゴッホも日本の浮世絵（ジャポニスム）に狂熱していました。特に、葛飾北斎の『富嶽三十六景 神奈川沖浪裏』の大波のダイナミズムに強い衝撃を受けており、この『星月夜』の夜空のうねりは、「北斎の波のエネルギーを、そのまま夜空にトランスポート（翻訳）したものだ」とも言われています。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置</h2>
            <p className="mb-6 text-white/80">
              ニューヨーク近代美術館（MoMA）の至宝として君臨するこの絵は、のちの「表現主義」の画家たちに決定的な影響を与えました。
              「目に見えるものをそのまま描く（写実主義）」時代から、「光の印象を描く（印象派）」時代を経て、ゴッホは「自分の心の中にある情熱を描く（表現主義）」という、現代アートに続く新しい扉を完全にこじ開けたのです。
            </p>

            <div className="mt-8 bg-[#1B2B44] p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-6">独自分析：レーダーチャート（ゴッホ『星月夜』編）</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="#ffffff40" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 13 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#ffffff80' }} />
                    <Radar
                      name="星月夜"
                      dataKey="A"
                      stroke="#FFE5A0"
                      fill="#FFE5A0"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#FFE5A0]">感情の爆発度（エモーショナル）：5</strong> 画家の孤独、祈り、狂気がそのまま絵の具のうねりとなっている</li>
                <li><strong className="text-[#FFE5A0]">写実性（リアル度）：1</strong> 実際の風景ではなく、ゴッホの脳内と魂が再現した主観的夜空</li>
                <li><strong className="text-[#FFE5A0]">色彩のコントラスト：5</strong> 補色である「深い青」と「鮮烈な黄」が互いを引き立て合う完璧な配色</li>
                <li><strong className="text-[#FFE5A0]">神秘性（オカルト・宇宙度）：4</strong> 銀河の渦巻きや星々の輝きが、スピリチュアルな領域に達している</li>
                <li><strong className="text-[#FFE5A0]">構図の安定感：3</strong> 激しいうねりに対し、左の糸杉と右の三日月、下の村が絶妙なバランスで破綻を防いでいる</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
