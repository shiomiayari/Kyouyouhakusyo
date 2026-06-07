import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Map, Paintbrush, Eye, Search, Leaf } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function TheDream() {
  const radarData = [
    { subject: '幻想の爆発度', A: 5, fullMark: 5 },
    { subject: '写実性・パース', A: 1, fullMark: 5 },
    { subject: '色彩の深み', A: 5, fullMark: 5 },
    { subject: '常識への従順さ', A: 1, fullMark: 5 },
    { subject: '後世への影響度', A: 5, fullMark: 5 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pb-16 pt-12 px-6 sm:px-8 lg:px-12 bg-[#1B2B44]">
      <div className="max-w-4xl mx-auto text-white">
        <Link to="/" className="inline-flex items-center gap-2 text-[#B8F3D8] hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-5 h-5" />
          ホームに戻る
        </Link>
        
        <div className="inline-block px-4 py-2 bg-[#B8F3D8] text-[#1B2B44] rounded-full mb-4 font-bold text-sm">
          西洋絵画
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
          ジャングルの密林に横たわる、届かない指先：<br/>アンリ・ルソー『夢』が魅せる偽りのパラダイス
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#FFD6A5] mb-12">
          <p className="text-xl font-bold text-[#FFD6A5] italic leading-relaxed">
            「私は一度も、この密林（パラダイス）を旅したことがない。」――孤独な税関吏が死の直前に見た、究極の白昼夢。
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/rousseau-the-dream.png" alt="夢 アンリ・ルソー" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 壮大な概要</h2>
            <p className="mb-6 text-white/80">
              1910年、パリの美術界を驚愕させた1枚の巨大なキャンバスがありました。縦2メートル、横3メートルにも及ぶその大作の名は『夢（Le Rêve）』。画面を埋め尽くすのは、異常なほど細部まで描き込まれた熱帯の植物、闇からこちらをじっと見つめるライオン、謎めいた黒人の笛吹き、そしてなぜかジャングルの真ん中に置かれた高級な赤いソファーに横たわる裸婦。
            </p>
            <p className="mb-6 text-white/80">
              この絵が西洋絵画史において「不滅の傑作」と称される理由は、これが<strong>「現実のどこにも存在しない、完全なる脳内の記憶と幻想だけで構築されたパラダイス」</strong>だからです。
            </p>
            <p className="mb-6 text-white/80">
              作者のアンリ・ルソーは、この作品を完成させたわずか数ヶ月後にこの世を去りました。彼が文字通り命を削り、困窮の中で巨大なキャンバスを買い求めて描いた『夢』。それは、写実主義や印象派が追い求めた「目の前の現実をどう描くか」という命題を軽々と飛び越え、のちのシュルレアリスム（超現実主義）の扉をこじ開ける、美術史の壮大な転換点となったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 作者の人物像と時代背景：税関吏という「愛すべき狂気」
            </h2>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="mb-4">
                アンリ・ルソー（1844-1910）という画家を語る上で欠かせないのが、「日曜画家（素人画家）」という特異な出自です。彼は美術の専門教育を一切受けていません。本業はパリの税関の通行税徴収係（厳密には税関吏ではないが、親しみを込めて「ルソー ＝ ル・ドゥアニエ（税関吏）」と呼ばれた）。40代になるまで、ただ趣味として、独学で絵を描き続けていました。
              </p>
              <p className="mb-4">
                当時のパリは、カメラの発明や科学の発展に伴い、芸術も「目に見える光の分析（印象派）」から「内省的な象徴（象徴主義）」へと激しく移り変わる過渡期にありました。しかし、ルソーはそのどちらの文脈からも完全に孤立していました。
              </p>
            </div>
            
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">ポジティブすぎる圧倒的な天然性</h3>
              <p>
                ルソーの「狂気」とも言える特徴は、天才的なまでの「思い込みの激しさ」と「純真さ」にあります。彼は当時の大家のような絵が描けると本気で信じており、プロの画家たちが自分の絵を「稚拙だ」「パース（遠近法）が狂っている」と嘲笑しても、それを「照れ隠しの称賛」だと本気で受け止めていました。この周囲の冷笑をすべてポジティブに変換してしまう情熱が、プロの教育を受けた者には絶対に真似できない「独自の宇宙」を誕生させたのです。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 制作の意図と作品に込められた意味：届かない指先と過去の恋</h2>
            
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="mb-4 italic text-[#C3B7F5]">ルソーがこの絵について添えた詩：</p>
              <blockquote className="border-l-4 border-[#C3B7F5] pl-4 text-white/80">
                美しい夢の中でまどろみながら<br/>
                ヤドヴィガは優しく眠りにつく<br/>
                親切な蛇使いが奏でる<br/>
                葦の笛の音を聴きながら<br/>
                月光が輝くとき<br/>
                花々や、緑の木々や、野生の蛇たちも<br/>
                その調べに耳を傾ける
              </blockquote>
            </div>

            <p className="mb-6 text-white/80">
              画面左側に横たわる裸婦のモデルは、ルソーが若い頃に恋い慕ったとされるポーランド人女性「ヤドヴィガ」だと言われています。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#C3B7F5] mb-4">なぜジャングルにソファーがあるのか？</h3>
              <p className="mb-4">
                批評家たちから「一貫性がない」と突っ込まれたルソーは、<strong>「ソファーに座っている女性が、ジャングルの夢を見ている設定なのだ」</strong>と言い張りました。
              </p>
              <p>
                しかし、絵をよく観察すると、女性の右手はジャングルの深淵を指し示していますが、その指先は植物の葉や獣たちに決して届くことはありません。ルソーにとって「夢」とは、現実からの単なる逃避ではなく、二度と戻れない過去（若き日の恋）や、決して行くことのできない未開の地への切ない憧憬そのもの。触れてしまえば霧のように消えてしまう、<strong>「届かないものへの永遠のノスタルジー」</strong>が、この絵の真のテーマなのです。
              </p>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFC2D1] mb-6 flex items-center gap-2">
              <Paintbrush className="w-6 h-6" />
              4. 当時の主流文化に対するスタンス：常識を嘲笑う「無自覚なカウンター」
            </h2>
            <p className="mb-6">
              19世紀末から20世紀初頭のパリ美術界において、ルソーの絵は「強烈なカウンター（反逆）」として機能しました。ただし、本人は「当時のアカデミー（正統派）の巨匠のようになりたい」と切望していたため、これは<strong>完全な無自覚による反逆</strong>でした。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-4">完全に無視された3つの常識</h3>
              <ul className="space-y-3 mb-4">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#FFC2D1]"></div>正確な遠近法（線遠近法や空気遠近法）</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#FFC2D1]"></div>解剖学に基づいた正確な人体描写</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#FFC2D1]"></div>陰影による立体感の表現</li>
              </ul>
              <p className="text-white/80">
                ルソーの『夢』は、これらをすべて無視しています。ソファーの傾きは不自然で、裸婦の身体はどこか平面的です。ジャングルの植物は手前のものも奥のものも同じように鮮明に描かれており、空間の奥行きが圧縮されています。
              </p>
            </div>
            
            <p className="text-white/80">
              この「写実の崩壊」が、当時の前衛芸術家たちの目には、従来の古臭いルールを破壊する「奇跡の原始芸術（プリミティヴィズム）」として映りました。ピカソやゴーギャン、アポリネールらは、ルソーのこの計算のない純粋さに、絵画の新しい可能性（心象世界を描くこと）を見出し、彼を熱狂的に支持したのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">5. 技法や表現の秘密：植物図鑑のシャッフルと「50色の緑」</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-4 flex items-center gap-2"><Map className="w-5 h-5"/> ① 一度もジャングルに行っていない事実</h3>
                <p className="text-white/80">
                  ルソーは生前、若い頃にメキシコ遠征に行き、そこでジャングルを見たという「嘘」を語っていました。しかし実際の彼は、生涯フランスから一歩も出たことがありません。<br/><br/>
                  インスピレーション源は、パリ植物園の温室、動物園、そして当時の植物図鑑や児童書でした。脳内でそれらを何倍にも拡大・シャッフルして、この世にない密林をキャンバス上に再構築したのです。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-4 flex items-center gap-2"><Leaf className="w-5 h-5"/> ② 「50色以上の緑」を操る積層の魔術</h3>
                <p className="text-white/80">
                  単調になりがちな緑の空間に圧倒的な深みとリズムを与えるため、一説には50種類以上の異なるトーンの緑色を使い分けたとされています。<br/><br/>
                  葉の一枚一枚の輪郭を非常にくっきりと描き、魚の鱗のように何層にも重ねていきました。この「均一なピント」によって、吸い込まれそうになるサイケデリックな没入感が生まれています。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFE5A0] mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              6. 深掘りするミステリー：絵の中に潜む「視線の罠」
            </h2>
            <p className="mb-6 text-white/80">この『夢』には、美術評論家の間でも今なお議論が続く、奇妙な「視線のミステリー」が存在します。</p>

            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 mb-6 overflow-x-auto">
              <pre className="text-[#FFE5A0] font-mono text-sm leading-relaxed whitespace-pre">
{`【絵画内の視線の交差図】

 [ 裸婦（ヤドヴィガ）] ――(指先と視線)――> [ ジャングルの深淵（笛吹き）]
                                                   │
                                                   ▼
 [ 鑑賞者（私たち）] <――(不気味な凝視)―― [ 2頭のライオン ]`}
              </pre>
            </div>

            <p className="mb-4 text-white/80">
              画面中央にいる2頭のライオン、そして暗闇に潜む獣たちは、なぜか絵の中の出来事（笛の音や裸婦）を無視して、<strong>画面の真外にいる「私たち（鑑賞者）」をじっと見つめています。</strong>
            </p>
            <p className="text-white/80">
              夢を見ているはずのヤドヴィガの視線は虚空を捉え、彼女を囲む獣たちは私たちを監視している――。この視線の構造により、私たちは「安全な場所から絵を眺めている」のではなく、「いつの間にか彼女の夢の中に引きずり込まれ、密林の獣たちに目撃されている」という、奇妙な逆転現象が起きるのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6">7. 珠玉の歴史トリビア：ピカソが激怒？「ルソーを大真面目にからかった夜」</h2>
            
            <p className="mb-6 text-white/80">
              ルソーの才能をいち早く見抜いたのは、若き日のパブロ・ピカソでした。1908年、ピカソは捨て値で売られていたルソーの肖像画を発見し、その強烈な個性に衝撃を受けます。
            </p>
            
            <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">伝説の「ルソーを称える晩餐会」</h3>
              <p className="text-white/80 mb-4">
                ピカソはアヴァンギャルドな芸術家たちを集め、ルソーを祭り上げる大宴会を開催しました。しかし、これは純粋な称賛であると同時に「大真面目な悪ふざけ」の側面もありました。王座の真上からはランプの熱いお天気が彼のハゲ頭に滴り落ちていたといいます。
              </p>
              <p className="text-white/80">
                それでもルソーは自分がついに一流として認められたと涙を流して喜びました。そして宴の終盤、ルソーはピカソの耳元で、美術史に残るあまりにも純真で傲慢な「名言」を囁きました。
              </p>
              <blockquote className="mt-4 border-l-4 border-[#FFC2D1] pl-4 text-[#FFC2D1] font-bold italic">
                「ピカソ、私と君は、この時代で最も偉大な2人の画家だ。君はエジプト様式の、私はモダン様式のね。」
              </blockquote>
            </div>
            
            <p className="text-white/80">
              ピカソはこの時、ルソーの純粋さに圧倒され、からかうつもりが逆に畏敬の念を抱くようになったと言われています。ルソーの死後も、ピカソは彼の作品を生涯手放さずにコレクションし続けました。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置と鑑賞のリアル</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#C3B7F5] mb-2">シュルレアリスムの源流</h3>
                <p className="text-sm text-white/80">
                  現実にはあり得ない組み合わせ（ジャングル×ソファー）を配置する手法は、後にサルバドール・ダリやマグリットらが確立した「デペイズマン」の先駆であり、フロイトの「夢分析」を視覚化したような先見性を持っています。
                </p>
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#C3B7F5] mb-2">「没入型アート」への共鳴</h3>
                <p className="text-sm text-white/80">
                  「一歩足を踏み入れると、現実のルールが通用しない美しい密林に迷い込む」という感覚は、チームラボなどの没入型デジタルアートの精神的源流とも言えます。
                </p>
              </div>
            </div>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-6">独自分析：レーダーチャート</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="#ffffff40" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#ffffff80' }} />
                    <Radar
                      name="アンリ・ルソー『夢』"
                      dataKey="A"
                      stroke="#B8F3D8"
                      fill="#B8F3D8"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#B8F3D8]">感情・幻想の爆発度：5</strong> 現実のルールを一切無視し、純粋な脳内幻想を巨大キャンバスに定着させたパワー</li>
                <li><strong className="text-[#B8F3D8]">写実性・パースの正確さ：1</strong> 遠近法や人体解剖学は完全に崩壊。しかしそれが独自の平面美を生む</li>
                <li><strong className="text-[#B8F3D8]">色彩の調和と深み：5</strong> 50色以上の緑を使い分けたとされる、狂気的なまでの色彩設計とレイヤー構造</li>
                <li><strong className="text-[#B8F3D8]">当時の常識への従順さ：1</strong> 本人はアカデミーに憧れるも、アウトプットは完全な「無自覚の反逆」</li>
                <li><strong className="text-[#B8F3D8]">後世・現代への影響度：5</strong> シュルレアリスムの先駆であり、現代の没入型アートの源流</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">結び：ニューヨーク近代美術館（MoMA）でしか逢えない楽園</h3>
              <p className="text-white/80">
                アンリ・ルソーの絶筆であり最高傑作である『夢』は、現在、アメリカ・ニューヨークのニューヨーク近代美術館（MoMA）に所蔵されています。<br/><br/>
                その巨大なキャンバスの前に立つと、私たちはルソーが仕掛けた「50色の緑」の迷宮に完全に閉じ込められます。それは、生涯一度も本物のジャングルを見ることのなかった孤独な老人が、死の直前に遺してくれた、最も美しく切ない「偽りの楽園」なのです。
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
