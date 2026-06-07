import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Activity, Shield, HeartPulse, Flag, Flame } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function HeroicPolonaise() {
  const radarData = [
    { subject: '躍動感・リズムの推進力', A: 5, fullMark: 5 },
    { subject: '音響的ダイナミクス', A: 5, fullMark: 5 },
    { subject: '技術的・肉体的負荷', A: 4, fullMark: 5 },
    { subject: '内省的・儚さの度合い', A: 1, fullMark: 5 },
    { subject: '愛国心・民族性の純度', A: 5, fullMark: 5 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16 pt-12 px-6 sm:px-8 lg:px-12 bg-[#1B2B44]">
      <div className="max-w-4xl mx-auto text-white">
        <Link to="/" className="inline-flex items-center gap-2 text-[#FFE5A0] hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-5 h-5" />
          ホームに戻る
        </Link>
        
        <div className="inline-block px-4 py-2 bg-[#FFE5A0] text-[#1B2B44] rounded-full mb-4 font-bold text-sm">
          クラシック音楽
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
          鳴り響く祖国の足音、病床の天才が覚醒した瞬間：<br/>ショパン『英雄ポロネーズ』が秘めた民族の誇りと幻覚の五線譜
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#FFD6A5] mb-12">
          <p className="text-xl font-bold text-[#FFD6A5] italic leading-relaxed">
            「私の身体は滅びても、この旋律（いのち）は祖国を裏切らない。」――体重40キロを切った“ピアノの詩人”が、最期の力を振り絞って召喚した幻影の騎士団。
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/chopin-heroic.png" alt="フレデリック・ショパン 英雄ポロネーズ" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 壮大な概要</h2>
            <p className="mb-6 text-white/80">
              冒頭、地鳴りのように湧き上がる上昇音型。そして、誰もが胸を熱くする、誇り高く堂々としたあの王者の旋律――。フレデリック・ショパンが1842年に作曲したポロネーズ第6番 変イ長調、通称『英雄ポロネーズ（Polonaise héroïque）』。この曲は、数あるクラシック音楽の中でも「最も華やかで、最もエネルギーに満ちたピアノ曲」として、世界中で愛され続けています。
            </p>
            <p className="mb-6 text-white/80">
              しかし、この作品の本当の姿は、単なる「きらびやかで景気の良い名曲」ではありません。
            </p>
            <p className="text-white/80">
              この曲が書かれた当時、ショパンの身体は結核に蝕まれ、すでに死の影が色濃く忍び寄っていました。生きる気力さえ失いかけていた、繊細で病弱な天才。彼がなぜ、自らの物理的な限界を遥かに超えるような、これほどまでに獰猛で圧倒的な「力」に満ちた音楽を生み出すことができたのか。それは、この曲が<strong>「引き裂かれた祖国への血を吐くような思慕」</strong>と<strong>「抑圧された民族の怒り」</strong>を一本の五線譜に凝縮した、音楽による文字通りの戦闘宣言だったからです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFC2D1] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 作者の人物像と時代背景：亡国のプリンスと、引き裂かれたワルシャワ
            </h2>
            <p className="mb-6 text-white/80">
              19世紀前半のヨーロッパは、ナショナリズム（民族主義）が激しく燃え盛った時代でした。ショパン（1810-1849）の祖国ポーランドは、当時、ロシア帝国、プロイセン王国、オーストリア帝国という大国によって分割され、地図上からその名を消されていました。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80 mb-4">
                20歳で音楽家としての成功を夢見てウィーンへ旅立った直後、祖国でロシアの圧政に対する「11月蜂起（1830年）」が勃発。ショパンはそのまま、二度と故郷の土を踏むことができない「終身亡命者」となったのです。
              </p>
              <p className="text-white/80">
                パリに渡ったショパンは、その端正な容姿と貴族的な洗練された物腰から「ピアノの詩人」と持て囃されました。しかし、彼の精神は常に「祖国を捨てて一人生き延びてしまった」という激しい罪悪感と孤独に引き裂かれていました。
              </p>
            </div>
            
            <p className="text-white/80">
              晩年の彼の体重は、成人男性でありながら<strong>40キロ未満</strong>。ピアノの鍵盤を強く叩く筋力さえ残されておらず、彼の演奏は「まるで風の囁きのようだ」と評されるほど繊細で儚いものでした。この「肉体の極限の脆弱さ」と、内に秘めた「狂気的なまでの愛国心」の凄まじいギャップこそが、ショパンという芸術家の本質だったのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="w-8 h-8" />
              3. 制作の意図と作品に込められた意味：恋人の制止を振り切った「幻影の召喚」
            </h2>
            
            <p className="mb-6 text-white/80">
              『英雄ポロネーズ』は、ショパンが恋人である男勝りの文豪ジョルジュ・サンドとともに過ごした、フランス中部の田舎町ノアンの別荘で作曲されました。
            </p>
            <p className="mb-6 text-white/80">
              「ポロネーズ（Polonaise）」とは、もともとポーランドの宮廷で踊られていた「宮廷行列舞踊」のことです。つまり、ショパンにとってポロネーズを書くということは、かつて祖国が栄華を極めていた時代の、誇り高き騎士たちや貴婦人たちの姿を音楽として再現する儀式に他なりませんでした。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80 mb-4">
                この曲を作曲している最中、ショパンは高熱と結核の幻覚に襲われていました。薄暗い部屋でピアノに向かっていると、<strong>突然、壁を突き破って、中世のポーランドの甲冑を身にまとった騎士たちの亡霊が、自分に向かって次々と行進してくる幻影</strong>を見たのです。
              </p>
              <p className="text-white/80">
                ショパンは恐怖のあまり悲鳴を上げ、アトリエから逃げ出したとサンドの回想録に記されています。
              </p>
            </div>

            <p className="text-white/80">
              それでも彼はピアノに戻り、その恐怖と興奮をそのまま鍵盤に叩きつけました。彼が本当に描きたかったもの。それは、現実には大国に踏みにじられ、消え去ろうとしているポーランドの魂を、<strong>音楽の力によって「不滅の英雄」として現世に召喚し、永遠の命を与えること</strong>だったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Flame className="w-6 h-6" />
              4. 当時の主流文化に対するスタンス：舞曲への「強烈なカウンター」
            </h2>
            <p className="mb-6 text-white/80">
              当時のパリのサロンや音楽界において、ワルツやポロネーズといった「民族舞曲」は、貴族たちがステップを踏んで楽しむための、あるいはお洒落な雰囲気を演出するための「お気軽なエンターテインメント（BGM）」に過ぎませんでした。
            </p>
            <p className="mb-6 text-white/80">
              ショパンの『英雄ポロネーズ』は、この安易な消費文化に対する極めて強烈なカウンター（反逆）でした。
            </p>
            
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <p className="text-white/80 mb-4">
                彼は、ポロネーズから「踊るための実用性」を完全に剥ぎ取りました。あまりにも激しいテンポの変化、オーケストラが咆哮するような巨大な音響、そして複雑極まる和声進行。それは、サロンでシャンパンを片手に聴くにはあまりにも重く、危険な政治的メッセージを孕んでいました。
              </p>
              <blockquote className="border-l-4 border-[#FFD6A5] pl-4 text-[#FFD6A5] font-bold italic mb-4">
                「これは、お前たちの退屈を紛らわすためのダンス音楽ではない。一国が滅びゆく瞬間の、最後の咆哮だ。」
              </blockquote>
              <p className="text-white/80">
                華やかなパリの社交界のド真ん中で、亡国の怨念と誇りを最高純度の芸術として突きつける。それまでのクラシック界の常識を鮮やかに裏切る、孤高のテロリズムだったのです。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">5. 技法や表現の秘密：左手の「馬の足音」と音響工学</h2>
            <p className="text-white/80 mb-6">
              ショパンがこの曲で仕掛けた、聴き手の脳をダイレクトに揺さぶる独自の芸術的・科学的アプローチが、中盤の「中間部（トリオ）」で炸裂します。ここでは、左手が「16分音符のオクターブ（E⇒D♯⇒C♯⇒B）」を、まるで地響きのように延々と、何百回と高速で繰り返し演奏するという、凄まじい技法が使われています。
            </p>
            
            <div className="bg-black/30 p-4 rounded-xl border border-white/10 mb-6 overflow-x-auto">
              <pre className="text-[#FFE5A0] font-mono text-sm leading-relaxed whitespace-pre">
{`【中間部（トリオ）における音響的二重構造】

 右手： [ 鳴り響くトランペットの咆哮 ] ──> 遙か彼方から進軍してくる騎兵隊
 
 左手： [ 執拗なオクターブの高速連打 ] ──> 蹄（ひづめ）が大地を震わせる「馬の足音」
        （※同じパターンをクレッシェンドで延々と反復し、トランス状態へ）`}
              </pre>
            </div>

            <p className="text-white/80 mb-4">
              この左手の技法は、単に「難しいから凄い」のではありません。人間が最も興奮を覚える「一定のリズムの執拗な反復（ミニマリズムの先駆）」をピアノの最低音域で鳴らすことにより、倍音（共鳴する音の成分）を極限まで発生させています。
            </p>
            <p className="text-white/80">
              結果として、「1台のピアノから、まるで何騎もの騎兵隊が押し寄せてくるような立体音響（サラウンド）」を作り出すことに成功しているのです。この圧倒的な音圧とダイナミクスは、現代の音響工学の観点から見ても、ピアノという楽器の限界のポテンシャルを引き出す完璧な計算に基づいています。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#B3E5FC] mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              6. 深掘りするミステリー：「英雄」というタイトルの罠と、ショパンの拒絶
            </h2>
            <p className="mb-6 text-white/80">
              現在、誰もが「英雄（Heroic）」と呼ぶこの曲ですが、ベートーヴェンの『月光』同様、<strong>このタイトルはショパン自身が付けたものではありません。</strong>
            </p>
            <p className="mb-6 text-white/80">
              この曲が出版された際、ショパンの生前にはこの副題はありませんでした。のちに恋人であるジョルジュ・サンドが手紙の中で「抑圧に立ち向かう人々の主権の象徴、つまり『英雄』のようだ」と書いたこと、そしてパリの出版商が商業的なキャッチコピーとして大々的に売り出したことから定着したのです。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <p className="text-white/80 mb-4">
                ここに、ひとつの大きなミステリーがあります。<strong>ショパン本人は、この「英雄」というロマンチックなラベルを、生涯徹底的に嫌い、拒絶し続けていた</strong>という点です。
              </p>
              <p className="text-white/80">
                なぜ彼は、自分の祖国への愛が「英雄」と呼ばれることを嫌ったのか？ 一説には、ショパンにとって祖国ポーランドの闘いは、外から見て「英雄的」と称賛されるような美化されたものではなく、もっと泥臭く、血塗られた、現在進行形の「絶望的な悲劇」だったからだと言われています。彼は安っぽいヒーローの物語ではなく、もっと抽象的で普遍的な「民族の記憶」そのものを遺したかったのです。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <HeartPulse className="w-8 h-8" />
              7. 珠玉の歴史トリビア：恋人の愛が壊れた日――『英雄』の完成と天才の破滅
            </h2>
            <p className="mb-6 text-white/80">
              この『英雄ポロネーズ』の完成は、音楽史上最もドラマチックで、最も痛ましい「ある大恋愛の終焉」の引き金となりました。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
              <p className="text-white/80 mb-4">
                ショパンとジョルジュ・サンドの関係は、病弱な息子（ショパン）を、母性の塊である愛の巨人（サンド）が包み込むような歪なバランスで成り立っていました。しかし、ノアンの別荘で『英雄ポロネーズ』という巨大な傑作が書き上げられた1842年頃を境に、二人の関係は急激に冷え込んでいきます。
              </p>
              <p className="text-white/80 mb-4">
                結核の咳を吐き続けるショパンの介護に、さしものサンドも精神的な限界を迎えていました。サンドはこの時期、ショパンをモデルにした小説『ルクレツィア・フロリアーニ』を執筆し、彼を「あまりにも繊細すぎて、周囲のすべてを精神的に絞り尽くす、美しくも残酷な寄生虫」として辛辣に描き出しました。
              </p>
              <p className="text-white/80">
                『英雄ポロネーズ』が誕生したそのアトリエは、同時に、彼の人生を支えた唯一の愛が、音を立てて崩壊していく生き地獄の舞台でもあったのです。この曲の持つ圧倒的なエネルギーは、皮肉にも、二人の関係の「最後の、最も激しい命の火花」だったのかもしれません。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置と鑑賞のリアル</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFD6A5] mb-2 flex items-center gap-2"><Flag className="w-4 h-4"/> アニメにおける「自己超越」のアイコン</h3>
                <p className="text-sm text-white/80">
                  クラシック音楽を題材にした名作アニメ『ピアノの森』で、主人公・雨宮修平が自身の呪縛を打ち破るコンクールの舞台で演奏するのがこの曲です。「圧倒的な覚醒感」が、キャラクターの精神的成長を視覚的・聴覚的にこれ以上ない説得力で表現します。
                </p>
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFD6A5] mb-2 flex items-center gap-2"><Flag className="w-4 h-4"/> 映画における「大逆転」のBGM</h3>
                <p className="text-sm text-white/80">
                  多くの映画やドラマで、絶体絶命の危機から反撃を開始するシーンの背景に鳴り響きます。180年経った今も人間の脳内に「勝利と誇り」のドーパミンを強制的に分泌させる、最強のスイッチとして機能しています。
                </p>
              </div>
            </div>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-6">独自分析：レーダーチャート</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="#ffffff40" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#ffffff80' }} />
                    <Radar
                      name="ショパン『英雄ポロネーズ』"
                      dataKey="A"
                      stroke="#FFC2D1"
                      fill="#FFC2D1"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#FFC2D1]">躍動感・リズムの推進力：5</strong> 胸を突き動かすような凄まじい前進力とエネルギーを持つ</li>
                <li><strong className="text-[#FFC2D1]">音響的ダイナミクス（音圧）：5</strong> 左手のオクターブ連打による倍音の融合。ピアノをオーケストラへ拡張</li>
                <li><strong className="text-[#FFC2D1]">技術的・肉体的負荷：4</strong> 左手の連打など、スタミナと完璧な脱力を要求される難所</li>
                <li><strong className="text-[#FFC2D1]">内省的・儚さの度合い：1</strong> 壊れそうな静寂や引き算の要素は極限まで削ぎ落とされている</li>
                <li><strong className="text-[#FFC2D1]">愛国心・民族性の純度：5</strong> ポーランドの栄光と亡国の怨念が詰め込まれた民族音楽の結晶</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-4">結び：ショパンの心臓が眠る、ワルシャワの聖十字教会へ</h3>
              <p className="text-white/80 mb-4">
                ショパンの遺体は、フランス・パリのペール・ラシェーズ墓地に眠っています。しかし、彼の遺言によって、彼の「心臓」だけは、アルコールに漬けられて密かに国境を越え、現在もポーランド・ワルシャワの聖十字教会の柱の下に安置されています。肉体はフランスの土になっても、その心臓だけは、今も祖国ポーランドの地面の鳴動を聴き続けているのです。
              </p>
              <p className="text-white/80">
                あなたが次にこの『英雄ポロネーズ』の誇り高き旋律を耳にするときは、ぜひ演奏者の華やかな指の動きだけでなく、その鍵盤の奥から立ち上がってくる「亡国の騎士たちの足音」と、病床で血を吐きながら五線譜に命を刻みつけた一人の男の、引き裂かれた心臓の鼓動を感じてみてください。
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
