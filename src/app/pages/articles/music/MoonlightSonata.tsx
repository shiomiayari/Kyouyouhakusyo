import { Link } from 'react-router';
import { ChevronLeft, Sparkles, AlertTriangle, Music, History, PlayCircle, Fingerprint } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function MoonlightSonata() {
  const radarData = [
    { subject: '感情の爆発度', A: 5, fullMark: 5 },
    { subject: '論理的構成', A: 3, fullMark: 5 },
    { subject: '大衆性・キャッチーさ', A: 5, fullMark: 5 },
    { subject: '音響・ペダルの実験性', A: 5, fullMark: 5 },
    { subject: '後世への影響度', A: 5, fullMark: 5 },
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
          漆黒の闇に響く、絶望と執念の足音：<br/>ベートーヴェン『月光』が隠した「心の深淵」と破壊のイノベーション
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#FFC2D1] mb-12">
          <p className="text-xl font-bold text-[#FFC2D1] italic leading-relaxed">
            「これは、美しい夜のBGMではない。」――絶望の淵にいた不屈の天才が、ピアノという楽器を『告白の祭壇』へと変えた瞬間。
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/beethoven-moonlight.png" alt="ルートヴィヒ・ヴァン・ベートーヴェン 月光" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 壮大な概要</h2>
            <p className="mb-6 text-white/80">
              静かに、しかしどこか不穏に繰り返される、あの三連符の旋律。ルートヴィヒ・ヴァン・ベートーヴェンが1801年に作曲したピアノ・ソナタ第14番 嬰ハ短調、通称『月光（Moonlight）』。この曲は、世界で最も有名なクラシック音楽の一つであり、誰もが「湖面に揺れる穏やかな月光」のようなロマンチックな情景を思い浮かべます。
            </p>
            <p className="mb-6 text-white/80">
              しかし、この作品の核心は、そうした優雅なイメージとは真逆の場所にあります。
            </p>
            <p className="text-white/80">
              この曲は、西欧の音楽構造を文字通り<strong>「破壊」</strong>し、音楽がそれまでの「貴族の娯楽」から<strong>「個人の魂の叫び、ドキュメンタリー」へと変貌を遂げた、音楽史上最大の転換点</strong>なのです。ベートーヴェンが聴覚を失いかけ、自ら命を絶つことすら考えた絶望の底で紡ぎ出されたこの旋律。それは、のちのロマン派音楽の夜明けを告げる、あまりにも激烈なイノベーションでした。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 作者の人物像と時代背景：絶望する天才と、崩壊する旧世界
            </h2>
            <p className="mb-6 text-white/80">
              1800年前後のヨーロッパは、激動の時代を迎えていました。フランス革命によって絶対王政が崩壊し、ナポレオンが台頭。「神や王のために生きる」という古い価値観が崩れ、<strong>「個人」の自由や思想が何よりも尊重される時代</strong>へとシフトしつつあったのです。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80 mb-4">
                この時代を生きるベートーヴェン（1770-1827）は、当時の音楽家としては極めて特異な、強いエゴとプライドを持った人物でした。彼は、貴族に雇われる「使用人」としての音楽家の地位を嫌悪し、初めて「独立した芸術家」として市民社会に君臨した人物です。
              </p>
              <p className="text-white/80">
                しかし、そんな彼を襲ったのが、音楽家にとって致命的すぎる呪い――<strong>「失聴（耳が聞こえなくなること）」</strong>でした。
              </p>
            </div>
            
            <p className="text-white/80">
              『月光』が作曲された1801年頃、ベートーヴェンの耳鳴りと難聴は悪化の一途をたどっていました。他人に気付かれる恐怖から社会を避け、孤独の中で狂気的なまでにピアノに向き合う日々。彼はのちに、遺書として知られる「ハイリゲシュタットの遺書（1802年）」を書くことになりますが、『月光』はその遺書が書かれる前夜、精神的に最も追い詰められた暗黒の時期に生み出されたのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 制作の意図と作品に込められた意味：身分違いの恋と「葬送の祈り」</h2>
            
            <p className="mb-6 text-white/80">
              現在、誰もが疑わない『月光』というタイトルですが、実はこれはベートーヴェン自身が付けたものではありません。彼の死後、ドイツの詩人レルシュターブが「スイスのルツェルン湖の月光のようだ」と評したことから定着した、いわば後付けのイメージです。
            </p>
            <p className="mb-6 text-white/80 font-bold text-[#B8F3D8]">
              ベートーヴェン自身がこの曲に添えた言葉は、「幻想曲風ソナタ（Sonata quasi una Fantasia）」でした。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80 mb-4">
                この曲の裏には、彼が当時激しく恋い焦がれていた、14歳年下の教え子である貴族の令嬢、ジュリエッタ・グイチャルディの存在がありました。彼はこのソナタを彼女に捧げています。しかし、当時の厳格な身分制度の前で、二人の恋が実ることは絶対にありませんでした。
              </p>
              <p className="text-white/80">
                さらに、近年の研究では、第1楽章のあの執拗な三連符の伴奏は、モーツァルトのオペラ『ドン・ジョヴァンニ』で騎士長が殺害されるシーンの<strong>「葬送音楽」から影響を受けている</strong>ことが指摘されています。
              </p>
            </div>

            <p className="text-white/80">
              つまり、この曲の意図とは「美しい夜の散歩」などではなく、<strong>「実らぬ恋への絶望」と「失いゆく聴覚への恐れ」、そして「自身の過去の死と再生」をかけた、極めて重々しい葬送の儀式</strong>だったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFC2D1] mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              4. 当時の主流文化に対するスタンス：ソナタ形式への「強烈なカウンター」
            </h2>
            <p className="mb-6 text-white/80">
              18世紀後半のウィーンにおいて、ピアノ・ソナタには絶対に守るべき「常識」がありました。それは、ハイドンやモーツァルトが確立した、完璧な建築美を持つ<strong>クラシカル（古典派）のソナタ形式</strong>です。
            </p>
            <p className="mb-6 text-white/80">
              通常、ソナタの第1楽章は、快活で、論理的で、ドラマチックな「速いテンポ（アレグロ）」で始まるのが絶対のルールでした。しかし、ベートーヴェンの『月光』は、この常識を真っ向から破壊する強烈なカウンター（反逆）でした。
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1]">第1楽章：</strong> 動きの極めて少ない、瞑想的で重苦しい「遅いテンポ（アダージョ）」
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1]">第2楽章：</strong> 束の間の休息のような、軽やかなステップ（アレグレット）
              </li>
              <li className="bg-black/40 p-4 rounded-xl border-l-4 border-[#FFC2D1]">
                <strong className="text-[#FFC2D1]">第3楽章：</strong> すべての感情を爆発させる、狂気的な「超高速（プレスト・アジタート）」
              </li>
            </ul>

            <p className="text-white/80">
              楽章が進むにつれて感情のボルテージが上がり、最終楽章で怒涛の嵐を巻き起こすというこの変則的な構造は、当時の評論家たちを「これはソナタではない」と大混乱に陥れました。ルールに従うのではなく、<strong>「自分の感情のタイムラインに合わせてルールを変形させる」</strong>という、ロマン派音楽の扉を開く歴史的反逆だったのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">5. 技法や表現の秘密：ピアノを「持続音の楽器」に変えたペダルの魔術</h2>
            <p className="text-white/80 mb-6">
              ベートーヴェンがこの『月光』の第1楽章で指定した、独自の、そして当時としてはあまりにも過激な科学的・芸術的アプローチが、楽譜の冒頭に書かれた以下の指示です。
            </p>
            
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <blockquote className="border-l-4 border-[#FFE5A0] pl-4 text-[#FFE5A0] font-bold italic">
                「曲全体を通じて、ダンパーを上げたままで（ペダルを踏みっぱなしにして）演奏すること」
              </blockquote>
            </div>

            <p className="text-white/80 mb-4">
              現代のピアノでこれをやると、音がすべて濁ってしまい、不快な雑音の塊になってしまいます。しかし、ベートーヴェンの時代のピアノ（フォルテピアノ）は、現代のものよりも音が早く減衰（消音）する特性を持っていました。
            </p>
            <p className="text-white/80">
              ベートーヴェンはこの楽器の特性を逆手に取り、<strong>あえて和音が変わってもペダルを踏み続けさせ、前の音の残響を次の音にわざとぶつけようとした</strong>のです。これにより、ピアノという本来はポーンと叩いたら消えてしまう「打楽器」が、まるで教会のパイプオルガンのように、音が途切れずに空間を漂う「持続音の楽器」へと変貌しました。この「あえて音を濁らせることで、暗い霧の中にいるような空気感を創り出す」という音響効果は、100年後のドビュッシーらの「印象派」の技法を先取りした、極めて先進的なアプローチだったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#B3E5FC] mb-6 flex items-center gap-2">
              <Fingerprint className="w-6 h-6" />
              6. 深掘りするミステリー：第3楽章の不自然な「穴」と、狂気の速度
            </h2>
            <p className="mb-6 text-white/80">
              瞑想的な第1楽章、可憐な第2楽章を経て突入する「第3楽章」は、クラシック音楽史上、最も凶暴なページの一つです。そこには、一つの大きなミステリーが存在します。
            </p>
            <p className="mb-6 text-white/80">
              この第3楽章は、地底からマグマが噴き出すような激しいアルペジオ（分散和音）が特徴ですが、あまりのテンポの速さと音符の多さに、<strong>当時のピアノの限界（鍵盤の数や、鍵盤が戻るスピード）を完全に超えて設計されています。</strong>
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <p className="text-white/80">
                なぜ、耳の聞こえかけの天才は、当時の楽器では物理的に再現不可能なほどの速度と音量を求めたのか？ 一説には、彼はすでに「現実のピアノの音」を聴くことを諦め、自分の脳内だけに鳴り響く「未来の巨大なピアノ」の響きをそのまま楽譜に叩きつけたと言われています。この楽章に時折現れる、不自然に遮断されたような「無音の瞬間」は、彼の聴覚が完全に閉ざされていく恐怖の瞬間をそのまま描写しているのではないかという、今なお解けない謎が残されています。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <History className="w-8 h-8" />
              7. 珠玉の歴史トリビア：「月光」に激怒したベートーヴェンとショパンの秘密
            </h2>
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#C3B7F5] mb-2">① 売れ続ける「月光」に激怒</h3>
                <p className="text-white/80 mb-4">
                  世界中で愛されたこの曲ですが、皮肉なことに、<strong>ベートーヴェン本人はこの曲が売れ続けることに生涯激怒し、うんざりしていました。</strong>
                </p>
                <blockquote className="border-l-4 border-[#C3B7F5] pl-4 text-[#C3B7F5] font-bold italic mb-4">
                  「どいつもこいつも、私の『嬰ハ短調ソナタ』の話ばかりする！ 私には、あれよりもっと優れた曲がいくらでもあるというのに！」
                </blockquote>
                <p className="text-white/80">
                  彼にとって、この曲は自らの絶望を吐き出したプライベートな告白であり、それが「ロマンチックな名曲」として消費されることが耐え難かったのです。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-[#C3B7F5] mb-2">② ショパン『幻想即興曲』の秘密</h3>
                <p className="text-white/80">
                  後世の天才フレデリック・ショパンの遺作である超有名曲『幻想即興曲』は、実はこの『月光』の第3楽章の構造や和声進行をほぼそのまま裏返しにして作られたという事実が近年の分析で判明しています。ショパンは「ベートーヴェンをパクった」と言われるのを恐れ、生涯出版することを頑なに拒み、楽譜を燃やしてくれと遺言を残しました。天才が天才の呪縛に苦しんだ、劇的なエピソードです。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置と鑑賞のリアル</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFD6A5] mb-2 flex items-center gap-2"><PlayCircle className="w-4 h-4"/> サバイバルホラーゲームの「恐怖と救済」</h3>
                <p className="text-sm text-white/80">
                  ゲーム『バイオハザード』の初代作品において、洋館の一室でピアノで『月光』の第1楽章を弾く仕掛けは有名です。あの静謐で冷たい旋律は、いつ怪物が現れるか分からない「死の気配」を演出する完璧な効果を発揮しました。
                </p>
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFD6A5] mb-2 flex items-center gap-2"><PlayCircle className="w-4 h-4"/> 映画における「狂気」の対比</h3>
                <p className="text-sm text-white/80">
                  アメコミ映画（『ダークナイト』など）やサイコサスペンスにおいて、狂気的な悪役や絶望的なシーンの背景に流れます。美しい旋律だからこそ、裏にある残酷さや絶望が何倍にも引き立つ映画表現の王道です。
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
                      name="ベートーヴェン『月光』"
                      dataKey="A"
                      stroke="#FFC2D1"
                      fill="#FFC2D1"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#FFC2D1]">感情・ダイナミクスの爆発度：5</strong> 第1楽章の静寂から第3楽章の狂気的な激しさへの跳ね上がり</li>
                <li><strong className="text-[#FFC2D1]">論理的構成・建築美：3</strong> 古典派ソナタの均衡をあえて崩し、ハイドン的な完璧な調和からは逸脱</li>
                <li><strong className="text-[#FFC2D1]">大衆性・キャッチーさ：5</strong> 冒頭の三連符と第3楽章の嵐、どちらも一度聴いたら魂に刻まれる</li>
                <li><strong className="text-[#FFC2D1]">音響・ペダルの実験性：5</strong> 「残響の意図的なブレンド」を指示した、100年先を行く音響実験</li>
                <li><strong className="text-[#FFC2D1]">後世のロマン派への影響度：5</strong> 「個人の感情を音楽にする」きっかけを作った、ロマン派の生みの親</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-4">結び：漆黒の夜、あなた自身の深淵と向き合うために</h3>
              <p className="text-white/80 mb-4">
                ベートーヴェンの『月光』は、170年以上が経過した今も、スピーカーや鍵盤を通じて私たちの心を揺さぶり続けます。
              </p>
              <p className="text-white/80">
                もし今夜、あなたがこの曲を聴くのなら、ただ「心地よい月の光」として聴き流すのではなく、ぜひ部屋の明かりを完全に消してみてください。第1楽章の静寂の底に潜む、一人の男の「死の覚悟」が、そして第3楽章の嵐の中に響く、運命の喉元を掴み返そうとする「不屈の執念」が、暗闇の中から驚くほどの生々しさを持って立ち上がってくるはずです。
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
