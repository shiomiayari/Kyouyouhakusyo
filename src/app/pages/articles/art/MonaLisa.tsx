import { Link } from 'react-router';
import { ChevronLeft, Sparkles, BookOpen, Brain, Paintbrush, Fingerprint, Eye, History } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function MonaLisa() {
  const radarData = [
    { subject: 'ミステリー度', A: 5, fullMark: 5 },
    { subject: '技術的完成度', A: 5, fullMark: 5 },
    { subject: '写実性', A: 4, fullMark: 5 },
    { subject: 'ドラマ性', A: 5, fullMark: 5 },
    { subject: '色彩の鮮やかさ', A: 2, fullMark: 5 },
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
          謎と科学が織りなす不滅の微笑：<br/>『モナ・リザ』の深淵
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#FFD6A5] mb-12">
          <p className="text-xl font-bold text-[#FFD6A5] italic leading-relaxed">
            「視線を外さない瞳、掴めない微笑。天才ダ・ヴィンチが科学と解剖学のすべてを注いだ、人類史上最大のミステリー。」
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/mona-lisa.png" alt="モナ・リザ レオナルド・ダ・ヴィンチ" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 壮大な概要：この女性は一体誰なのか？</h2>
            <p className="mb-6 text-white/80">
              『モナ・リザ』は1503年頃、イタリアのフィレンツェで描き始められたとされています。
            </p>
            <p className="mb-6 text-white/80">
              最大にして最初の謎は<strong>「モデルの正体」</strong>です。現在最も有力な説は、フィレンツェの絹織物商人フランチェスコ・デル・ジョコンドの妻、<strong>「リザ・ゲラルディーニ（ラ・ジョコンダ）」</strong>という女性。しかし、ダ・ヴィンチはこの絵を依頼主に渡すことなく、生涯手元に置き続け、フランスへ移住する際も肌身離さず持ち歩いて死ぬ間際まで筆を入れ続けました。そのため、「ダ・ヴィンチの母親の面影」説や、果ては「ダ・ヴィンチ自身の女装自画像」説まで、今なお議論が絶えません。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              2. 時代背景と作者：万能の天才が求めた「世界の真理」
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">■ 盛期ルネサンスという特異点</h3>
                <p>
                  『モナ・リザ』が生まれた16世紀初頭は、イタリア・ルネサンスの黄金期（盛期ルネサンス）でした。それまでの「神を中心とした中世の暗黒時代」が終わり、「人間中心の、理性と科学の力による古代文化の再生」が叫ばれた時代です。その中心地であったフィレンツェやミラノでは、芸術家は単なる職人ではなく、科学者や哲学者と同等の「思想家」として扱われ始めていました。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">■ 「万能の天才」レオナルド・ダ・ヴィンチ</h3>
                <p>
                  作者のレオナルド・ダ・ヴィンチは、画家としてだけでなく、解剖学、植物学、天文学、土木工学、軍事技術など、あらゆる分野に精通した「万能の天才（ホモ・ウニヴェルサリス）」でした。彼にとって「絵を描くこと」とは、単なる視覚的な美の追求ではなく、この世界の仕組み（科学的真理）をキャンバスの上に証明する行為に他なりませんでした。彼は人間を理解するために、夜中に病院へ忍び込んで30体以上の遺体を解剖し、筋肉や神経の構造をスケッチしていました。その狂気的な知の集大成が、この『モナ・リザ』の肉体に宿っているのです。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 絵を描いた意図と込められた意味：小宇宙としての人間</h2>
            <p className="mb-6 text-white/80">
              レオナルドがこの絵を依頼主に渡さず、死ぬまで手元に置いた理由。それは、この絵に「地球（大自然）と人間（生命）の完全な調和」という、彼の哲学のすべてを込めていたからです。
            </p>
            
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#C3B7F5] mb-4">■ マクロコスモス（大宇宙）とミクロコスモス（小宇宙）</h3>
              <p className="mb-4">レオナルドは「地球の構造と人間の身体の構造は同じである」と考えていました。</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C3B7F5] mt-2.5"></div>
                  <p>背景のゴツゴツとした岩山や流れる川は、地球の<strong>「骨（岩石）」</strong>と<strong>「血（水）」</strong>を表現しています。</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C3B7F5] mt-2.5"></div>
                  <p>そして手前のモナ・リザは、その大自然から生まれた<strong>「最高傑作としての生命（人間）」</strong>です。</p>
                </li>
              </ul>
              <p className="mt-4">
                彼女の肩にかけられたショールの繊細な曲線は、背景の川の水のうねりと完全にリンクしています。レオナルドは、<strong>「人間は自然の一部であり、自然のエネルギーがそのまま人間の生命（微笑み）となって現れているのだ」</strong>という、壮大な宇宙観をこの1枚で表現しようとしたのです。
              </p>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFC2D1] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              4. 当時の絵画文化へのスタンス：圧倒的な「大反逆」
            </h2>
            <p className="mb-6">
              『モナ・リザ』は、当時の15世紀〜16世紀の絵画文化に対する<strong>きわめて革新的で孤独な「大反逆」の書</strong>でした。当時の主流な絵画のルールを、レオナルドはことごとく破壊しています。
            </p>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2 flex items-center gap-2"><Paintbrush className="w-5 h-5"/> ① 輪郭線（境界線）の破壊</h3>
                <p>
                  当時のフィレンツェ絵画（例えばボッティチェッリの『ヴィーナスの誕生』など）は、美しい「はっきりとした輪郭線」で人物を描くのが絶対的な常識でした。しかし、レオナルドは「自然界に線など存在しない。あるのは光と影のグラデーションだけだ」と言い放ち、線を完全に排除しました。これは当時の美術界の常識に対する真っ向からの挑戦でした。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">② 誇り高き「ポーズ」の破壊</h3>
                <p>
                  当時の貴婦人の肖像画は、身分の高さを誇示するために、横顔でじっと動かない硬いポーズで描かれるのが普通でした。しかしレオナルドは、モナ・リザを斜め45度に座らせ（三分の二正面図）、さらにリラックスして手を重ねさせました。この「座ってこちらを優雅に見つめる肖像画の構図」はレオナルドの発明であり、のちのラファエロらにパクられまくって美術界の新たなスタンダード（革命）となりました。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">③ 記号（ジュエリー）の排除</h3>
                <p>
                  当時の肖像画は、モデルがどれほど金持ちで権力があるかを示すために、豪華なネックレス、指輪、刺繍ドレスをこれでもかと描き込むのがルールでした。しかし『モナ・リザ』には、<strong>宝石の類が一切描かれていません。</strong>
                  レオナルドは、身分や富という人間の作った「表面的な記号」をすべて削ぎ落とし、「人間という存在そのものの生々しい美しさ」だけで勝負したのです。これは、当時の商業的な肖像画のあり方への強烈なカウンターでした。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">5. ダ・ヴィンチが仕掛けた2つの革命的技法</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-4">① スフマート（ぼかし技法）</h3>
                <p className="text-white/80">
                  輪郭線を描くのをやめたレオナルドが編み出したのがこれです。煙のようにまたたく間に変化する極薄の絵の具を何十層も塗り重ねることで、輪郭を完全にぼかしました。<br/><br/>特に<strong>目元と口元</strong>にこのスフマートが集中しているため、見る人の角度や光の加減によって、笑っているようにも、悲しんでいるようにも見える「謎の微笑」が生まれたのです。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-4">② 空気遠近法（大気遠近法）</h3>
                <p className="text-white/80">
                  背景の風景は、奥に向かうほど<strong>青みがかり、霧にむせぶようにぼやけて</strong>描かれています。<br/><br/>これは「地球の大気には厚みがあり、遠くのものは光の散乱によって青くかすんで見える」という科学的観察に基づいた技法で、画面に圧倒的な奥行きをもたらしました。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFE5A0] mb-6 flex items-center gap-2">
              <Fingerprint className="w-6 h-6" />
              6. さらに深掘りする『モナ・リザ』の4大ミステリー
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">① 「未完の傑作」という狂気</h3>
                <p>ダ・ヴィンチは生涯でわずか15点ほどしか絵画を残していません。なぜなら、彼は極度の完璧主義者であり、同時に飽き性だったからです。しかし、この『モナ・リザ』だけは16年以上にわたり、彼が亡くなる1519年まで「描き続けられた」とされています。科学調査では、髪の毛1本よりも薄い2〜4マイクロメートルという超極薄の絵の具の層が、何十層も塗り重ねられていることが判明。彼にとってこの絵は、注文品ではなく「自分の脳内にある科学と芸術の理想を具現化するための実験場」だったのです。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">② なぜ「眉毛」がないのか？</h3>
                <p>モナ・リザには眉毛やまつ毛がありません。近年の高解像度スキャン分析により、「もともとは描かれていたが、数百年の歳月の中で、洗浄や修復の際に消えてしまった」ことが判明しました。ダ・ヴィンチは極めて繊細なタッチで眉毛を描いていたのです。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">③ 左右で繋がらない背景の謎</h3>
                <p>背後に描かれている地平線（水面）をよく見ると、<strong>左側が低く、右側が高く</strong>なっており、左右で位置がズレています。人間の目が「左側の低い背景」を見ると女性が引き締まって見え、「右側の高い背景」を見ると女性が少し上を向いて成長しているように見えるという、鑑賞者の無意識に揺らぎを与えるための構図計算だと言われています。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2 flex items-center gap-2"><Eye className="w-5 h-5"/> ④ どこから見ても視線が合う「拒絶と抱擁」</h3>
                <p>モナ・リザの前に立ち、左から右へ動いても、彼女の瞳は常にこちらをじっと見つめ返してきます。これは「錯視」の一種ですが、ダ・ヴィンチは人間の解剖学（目の構造）を徹底的に研究していたため、二次元の絵画でありながら、鑑賞者と「1対1のコミュニケーション」が成立する視線の角度を完璧にコントロールして描き出しました。</p>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border-l-4 border-[#FFD6A5]">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">【番外編ミステリー】「黄金比（1：1.618）」の罠と都市伝説</h3>
                <p className="mb-4">『モナ・リザ』の顔の輪郭やパーツの配置には、人類が最も美しいと感じる比率「黄金比」が完璧に組み込まれている、という説がネットや入門書で広く出回っています。しかし結論から言うと、<strong>ダ・ヴィンチが意図してモナ・リザに黄金比を組み込んだという文献や証拠は一切ありません。</strong></p>
                <p className="mb-4">ダ・ヴィンチは確かに、親友の数学者ルカ・パチョーリの著書『神聖比例論』のために幾何学の挿絵を描いており、比率に対する深い関心を持っていました。しかし、彼が肖像画を描く際に用いていたのは、独自の「解剖学的な人間の骨格比率」であり、黄金比ではありません。</p>
                <p>ではなぜ、これほど「モナ・リザ＝黄金比」と言われるのでしょうか？それは19世紀以降、後世の学者やデザイナーたちが、この名画の上から「都合のいいサイズで黄金比の長方形や螺旋を重ね合わせ、ぴったり一致するように見せかけた」のが真相です。つまり、天才ダ・ヴィンチの凄さをさらに神格化したい人々によって作られた、美しき都市伝説（後付けの解釈）なのです。むしろ、そうした歪んだ噂が一人歩きしてしまうこと自体が、この絵の持つ底知れない魔力を証明していると言えます。</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <History className="w-8 h-8" />
              7. 珠玉の歴史トリビア
            </h2>
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">① ナポレオンの寝室に飾られていた</h3>
                <p className="text-white/80">
                  フランス革命後、激動の歴史の中で『モナ・リザ』は一時、あの<strong>ナポレオン・ボナパルトの寝室</strong>に飾られていました。ナポレオンはこの絵の持つ妖艶な魅力にひどく取り憑かれており、毎晩この微笑みを見つめながら眠りについたと言われています。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">② 世界一有名にしたのは「大盗難事件」</h3>
                <p className="text-white/80">
                  その知名度を爆発させたのは、1911年にルーヴル美術館から起きた<strong>盗難事件</strong>です。2年間、絵は行方不明になり、新聞は連日大騒ぎ。ルーヴルには「モナ・リザが消えた空っぽの壁」を見るために大行列ができました。犯人はイタリア人の職人で、「祖国の名画をフランスから取り戻したかった」という動機でした。この事件により、モナ・リザは一躍「世界のポップアイコン」となったのです。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置と鑑賞のリアル</h2>
            <p className="mb-6 text-white/80">
              現在、パリのルーヴル美術館の最深部に君臨するモナ・リザは、「世界で最も厳重に守られている絵」です。防弾・調温機能付きの特殊ガラスケースに収められ、数メートル手前の柵からしか鑑賞できません。あまりの人気に、本物を目の前にしても「小さくて（77cm×53cm）よく見えない！」という不満が出るのもセットで、現代のモナ・リザの持つ「神格化されたオーラ」を象徴しています。
            </p>

            <div className="mt-8 bg-[#1B2B44] p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-6">独自分析：レーダーチャート（『モナ・リザ』編）</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="#ffffff40" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 13 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#ffffff80' }} />
                    <Radar
                      name="モナ・リザ"
                      dataKey="A"
                      stroke="#C3B7F5"
                      fill="#C3B7F5"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#C3B7F5]">ミステリー度（謎の多さ）：5</strong> モデルの正体、背景の非対称、瞳の文字など、謎のデパート</li>
                <li><strong className="text-[#C3B7F5]">技術的完成度：5</strong> スフマートと空気遠近法の極致。ダ・ヴィンチの解剖学と光学の集大成</li>
                <li><strong className="text-[#C3B7F5]">写実性（リアル度）：4</strong> 生きた人間のような肌の質感。ただし、背景の風景は現実のものではない幻想的なもの</li>
                <li><strong className="text-[#C3B7F5]">ドラマ性（歴史の荒波）：5</strong> ナポレオンの寝室、大盗難、戦時中はナチスから隠され続けた激動の歴史</li>
                <li><strong className="text-[#C3B7F5]">色彩の鮮やかさ：2</strong> 経年劣化による保護ニスの黄変のため、現在は全体的に茶褐色に沈んでいる。本来はもっと青や緑が鮮やかだったとされる</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
