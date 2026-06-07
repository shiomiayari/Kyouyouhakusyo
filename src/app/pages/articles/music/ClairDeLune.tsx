import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Moon, Wind, History, PlayCircle, Eye } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function ClairDeLune() {
  const radarData = [
    { subject: '空間・空気の浮遊感', A: 5, fullMark: 5 },
    { subject: '色彩の鮮やかさ', A: 5, fullMark: 5 },
    { subject: 'メロディの強固さ', A: 2, fullMark: 5 },
    { subject: '感情の剥き出し度', A: 1, fullMark: 5 },
    { subject: '現代アンビエント影響', A: 5, fullMark: 5 },
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
          音響の錬金術師が描いた、静寂という名の光：<br/>ドビュッシー『月の光』がもたらした音楽の色彩革命
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#B3E5FC] mb-12">
          <p className="text-xl font-bold text-[#B3E5FC] italic leading-relaxed">
            「私は、耳で聴く絵画（きょく）を創りたかった。」――19世紀末のパリ、伝統の重力から解き放たれた音が、冷たい月光となって五感に染み渡る。
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/debussy-clair-de-lune.png" alt="クロード・ドビュッシー 月の光" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 壮大な概要</h2>
            <p className="mb-6 text-white/80">
              夜空に浮かぶ淡い月、水面に細かく砕け散る光の粒子。クロード・ドビュッシーが遺した『月の光（Clair de Lune）』は、今やクラシック音楽という枠組みを超え、人類の共有財産とも言える静謐（せいひつ）な美しさを湛えています。
            </p>
            <p className="mb-6 text-white/80">
              しかし、この曲は単なる「夜の情景を描いた、耳に心地よいヒーリングミュージック」ではありません。
            </p>
            <p className="text-white/80">
              1890年に原型が作られ、1905年に出版されたこの小品は、西欧音楽がそれまで数百年にわたって積み上げてきた<strong>「調性と和声の絶対ルール」を根底から揺るがした、極めてアヴァンギャルド（前衛的）な爆弾</strong>でした。ベートーヴェンやブラームスが追求した「強固な建築物のような音楽」に対し、ドビュッシーが提示したのは「光と影、そして空気の揺らぎそのものを音に変換する」という全く新しい価値観。本作は、音楽史における「近代」の扉を文字通りこじ開けた、音響のイノベーションなのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 作者の人物像と時代背景：反骨の異端児と「ベル・エポック」の熱狂
            </h2>
            <p className="mb-6 text-white/80">
              19世紀末のパリは、「ベル・エポック（美しき時代）」と呼ばれる文化的繁栄の絶頂期にありました。産業革命による科学の発展の一方で、芸術界では目に見える現実を否定し、人間の内面や神秘性を重んじる「象徴主義」の文学や、光の移ろいをキャンバスに定着させようとする「印象派」の絵画が、互いに激しく火花を散らしていました。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80">
                この熱狂の中心にいたクロード・ドビュッシー（1862-1918）は、お世辞にも「扱いやすい優等生」ではありませんでした。パリ音楽院というエリート校に学びながら、彼は教授たちが教える伝統的な和声のルールを「退屈だ」と一蹴。「君のルールは一体何なのだ」と問われると、平然と<strong>「私の快感（プレジール）です」</strong>と言い放つ、生意気で反骨精神に満ちた狂気的な異端児だったのです。
              </p>
            </div>
            
            <p className="text-white/80">
              彼は音楽家よりも、むしろ詩人のステファヌ・マラルメや、画家のクロード・モネ、ジェームズ・マクニール・ホイッスラーといった他ジャンルの芸術家たちと深く交わりました。彼らから受けた「言葉の響き」や「色彩の配置」という刺激が、ドビュッシーの脳内で音のパレットへと翻訳されていきました。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Moon className="w-8 h-8" />
              3. 制作の意図と作品に込められた意味：詩人が描いた「仮面舞踏会」の憂鬱
            </h2>
            
            <p className="mb-6 text-white/80">
              『月の光』を深く読み解くための最大の鍵は、これが単に「月を見て思いついた曲」ではなく、<strong>ある1篇の詩から命を吹き込まれた作品</strong>だという点にあります。この曲は、4つの楽曲からなる『ベルガマスク組曲（Suite bergamasque）』の第3曲です。この「ベルガマスク」という言葉は、フランスの象徴派詩人ポール・ヴェルレーヌの詩集『艶なる宴』に収められた詩『月の光』の一節から取られています。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <blockquote className="border-l-4 border-[#B8F3D8] pl-4 text-[#B8F3D8] italic leading-relaxed">
                あなたの魂は、選ばれた風景のよう。<br/>
                そこでは、リュートを弾き、踊りながら華やかな仮面（ベルガマスク）をつけた人々がゆく。<br/>
                誰もが、その風変わりな仮装の下でどこか悲しげな様子をしているけれど。（中略）<br/>
                彼らは、小鳥たちを木々の中で眠らせる<br/>
                静かで、哀しく、美しい月の光とともに、<br/>
                大理石の噴水の間で、恍惚となってむせび泣く。
              </blockquote>
            </div>

            <p className="mb-4 text-white/80">
              ヴェルレーヌが描いたのは、ただの綺麗な風景ではなく、<strong>「華やかな仮面舞踏会の裏に隠された、人間の孤独とメランコリー（憂鬱）」</strong>です。
            </p>
            <p className="text-white/80">
              ドビュッシーが本当に描きたかったもの。それは、まばゆい現実（太陽）の光が消え去った夜、月の冷たい光に照らされることで初めて浮かび上がる、人間の心の奥底にある「言葉にならない揺らぎ」だったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFC2D1] mb-6 flex items-center gap-2">
              <Wind className="w-6 h-6" />
              4. 当時の主流文化に対するスタンス：ドイツ音楽帝国への「冷徹なカウンター」
            </h2>
            <p className="mb-6 text-white/80">
              当時の音楽界における「常識」とは、ベートーヴェンに始まり、ワーグナーによって頂点に達した「ドイツ・ロマン派音楽」でした。それは、重厚な和音、明確なメロディライン、そして感情の巨大な爆発（大音量）によって、聴衆を圧倒するドラマツルギーです。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <p className="text-white/80 mb-4">
                ドビュッシーの『月の光』は、この重苦しいドイツ音楽に対する強烈なカウンター（反逆）でした。彼は、ワーグナーのような「過剰なまでのドラマ」を嫌悪しました。音楽で何かを主張したり、押し付けたりするのではなく、ただそこに存在する空気のように、聴き手の五感にそっと浸透していく音楽。
              </p>
              <p className="text-white/80">
                ドビュッシーは、それまでの西欧音楽が置き去りにしてきた<strong>「静寂（無音）」</strong>や<strong>「かすかな弱音（ピアニッシモ）」</strong>にこそ、無限の表現力があることを見出したのです。これは、当時の「大きく、重く、情熱的であるべき」というクラシック界の常識を、冷ややかな微笑みとともに解体する行為でした。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">5. 技法や表現の秘密：重力を消し去る「音響の魔術」</h2>
            <p className="text-white/80 mb-6">
              ドビュッシーが『月の光』で用いたアプローチは、極めて科学的でありながら、絵画的な美しさに満ちています。彼は、ピアノという打楽器から「アタック（打鍵の衝撃音）」を消し去り、液体のような響きを作るためにいくつかの魔法をかけました。
            </p>
            
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-4">① 「全音音階」と教会旋法</h3>
                <p className="text-white/80">
                  従来の音楽は、聴き手に「あ、次にこの音に行くな」という安心感（解決）を与えるルールで動いていました。しかしドビュッシーは、半音を含まない<strong>「全音音階（ホールトーン・スケール）」</strong>や、中世の<strong>「教会旋法」</strong>を巧みに導入します。これにより、音楽から「主音（中心となる音）」の重力が消え、まるで宇宙空間をふわふわと漂うような、浮遊感あふれる音響が生まれました。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-4">② 和声の「並行移動」</h3>
                <p className="text-white/80 mb-4">
                  当時の音楽学校で「絶対にやってはいけない禁忌」とされていた、同じ形の和音をそのまま平行にスライドさせる技法を、ドビュッシーはあえて多用しました。
                </p>
                <div className="bg-black/30 p-4 rounded-xl border border-white/10 mb-4 overflow-x-auto">
                  <pre className="text-[#FFE5A0] font-mono text-sm leading-relaxed whitespace-pre">
{`【伝統的な和声 vs ドビュッシーの和声イメージ】

 伝統的：  [和音A] ──(緊張)──> [和音B] ──(解決：カチッとはまる)──> [安心]
 
 ドビュッシー： [和音A] ──> [和音A'] ──> [和音A''] （解決せず流動する）`}
                  </pre>
                </div>
                <p className="text-white/80">
                  これは、キャンバスの上で絵の具を混ぜ合わせず、純色を並べて塗ることで網膜上に光を再現した「印象派の点描画」と全く同じアプローチです。音と音がぶつかり合いながら、濁らずに混ざり合うことで、あの「水面に反射する月光」のきらめきが表現されているのです。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#B3E5FC] mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              6. 深掘りするミステリー：15年間封印された「幻のタイトル」
            </h2>
            <p className="mb-6 text-white/80">
              この『月の光』には、美術・音楽愛好家の間で今なお議論される、ある劇的な変遷の謎があります。
            </p>
            <p className="mb-6 text-white/80">
              この曲の原型が書かれた1890年当時、ドビュッシーが譜面に記していたタイトルは『月の光』ではなく、<strong>『感傷的なプロムナード（Promenade sentimentale）』</strong>という名前でした。これもヴェルレーヌの詩から取られたタイトルですが、もしこの名前のまま出版されていたら、この曲がこれほど世界中で愛されることはなかったかもしれません。
            </p>
            <p className="text-white/80">
              ドビュッシーはなぜ、この名曲を15年間も手元に封印し、1905年になって急に『月の光』へと改題して出版したのでしょうか？ 一説には、あまりにも自身の若き日の瑞々しい（そして私生活での泥沼の恋愛劇が絡む）記憶が詰まりすぎていたため、精神的な距離を置く時間が必要だったとも言われています。あるいは、15年の間に彼自身の音響哲学がより洗練され、単なる「プロムナード（散歩）」という具体的な行動描写から、「月の光」という<strong>完全な抽象概念・空気感へと昇華させるための計算された熟成期間</strong>だったのかもしれません。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <History className="w-8 h-8" />
              7. 珠玉の歴史トリビア：エジソンが驚愕した「人類最古の録音」
            </h2>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80 mb-4">
                2008年、音声の歴史を覆す大発見がありました。トーマス・エジソンが蓄音機（フォノグラフ）を発明するよりも遥か前、1860年にフランスのパリで発明家のエドゥアール＝レオン・スコット・デ・マルタンヴィルが、紙に音の振動を刻む「フォノートグラフ」という機械を作っていたことが判明したのです。
              </p>
              <p className="text-white/80 mb-4">
                科学者たちがその148年前の紙の波形を最新技術でデジタル再生したところ、ノイズの向こうから、ある一人の人物が口ずさむ歌声が聴こえてきました。それこそが、フランス民謡<strong>『月の光に（Au clair de la lune）』</strong>だったのです。
              </p>
              <blockquote className="border-l-4 border-[#C3B7F5] pl-4 text-[#C3B7F5] font-bold italic mb-4">
                「月の光に、友のピエロよ、僕にペンを貸しておくれ、火を灯すために。」
              </blockquote>
              <p className="text-white/80">
                ドビュッシーが描いた『月の光』の深層には、フランス人が子供の頃から無意識に刷り込まれている、この切ない民謡のメロディと「夜の闇への憧憬」が、遺伝子レベルで組み込まれていたのです。人類初の録音データが「月の光」であり、その数十年後にフランスの異端児が音楽史を塗り替えた傑作もまた『月の光』であったというのは、あまりにも美しい歴史の符牒と言えるでしょう。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置と鑑賞のリアル</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFD6A5] mb-2 flex items-center gap-2"><PlayCircle className="w-4 h-4"/> 映画やディストピア作品での演出</h3>
                <p className="text-sm text-white/80">
                  映画『オーシャンズ11』のラストシーンで流れる『月の光』は、犯罪劇の興奮を鮮やかに一瞬で「大人の切ない静寂」へと着地させました。また、SFやディストピア作品でも、退廃的な世界観と対比させるようにこの曲が使われます。
                </p>
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFD6A5] mb-2 flex items-center gap-2"><PlayCircle className="w-4 h-4"/> ゲームにおける「孤独と救済」のBGM</h3>
                <p className="text-sm text-white/80">
                  名作サバイバルホラーやSFゲームにおいて、セーブエリアや崩壊した世界を旅するシーンで多用されます。メロディが強すぎないため、没入感を邪魔せず、空間の「空気の冷たさ」や「孤独感」を体感させるのです。
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
                      name="ドビュッシー『月の光』"
                      dataKey="A"
                      stroke="#FFD6A5"
                      fill="#FFD6A5"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#FFD6A5]">空間・空気の浮遊感：5</strong> 全音音階や和声の並行移動により、重力を完全に消し去った音響空間の構築力</li>
                <li><strong className="text-[#FFD6A5]">色彩の鮮やかさ（グラデーション）：5</strong> 音を「絵の具」として扱い、光の乱反射や影のグラデーションをピアノ1台で完璧に表現</li>
                <li><strong className="text-[#FFD6A5]">メロディの強固さ（ドラマ性）：2</strong> 分かりやすい起承転結や力強いメロディの主張はあえて排除されている</li>
                <li><strong className="text-[#FFD6A5]">感情の剥き出し度：1</strong> 「情熱を聴け！」という自己主張はなく、極めて冷徹で客観的</li>
                <li><strong className="text-[#FFD6A5]">現代アンビエントへの影響度：5</strong> 環境音楽、ローファイ・ヒップホップ、映画音楽における「空気感の演出」のすべての源流</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#B3E5FC] mb-4">結び：あなたの部屋で逢える「音で描かれた光」</h3>
              <p className="text-white/80 mb-4">
                ドビュッシーの『月の光』は、特定の美術館に行かなければ逢えない絵画とは異なり、あなたが部屋の明かりを消し、スピーカーを鳴らした瞬間に、その場を19世紀末のパリの夜へと変貌させます。
              </p>
              <p className="text-white/80">
                この曲が始まるとき、鍵盤に触れるピアニストの指先は、決して音を叩いていません。ただ、鍵盤の重さをそっと指に預け、ピアノの内部にある弦を「いたわるように」震わせているだけです。その刹那、あなたの部屋の空気は冷たく澄み渡り、五感は「音で描かれた光」で満たされることになります。音響の錬金術師が遺した、100年経っても蒸発することのない奇跡の水分を、ぜひ今夜、もう一度深く味わってみてください。
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
