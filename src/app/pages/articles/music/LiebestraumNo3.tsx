import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Heart, Brain, Music, ShieldAlert, History } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function LiebestraumNo3() {
  const radarData = [
    { subject: 'エモーショナル度', A: 5, fullMark: 5 },
    { subject: '演奏の難易度', A: 4, fullMark: 5 },
    { subject: '大衆性', A: 5, fullMark: 5 },
    { subject: '構成の静寂・内省度', A: 2, fullMark: 5 },
    { subject: 'カルチャーへの影響度', A: 5, fullMark: 5 },
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
          鍵盤の魔術師が紡いだ、甘美なる警告：<br/>リスト『愛の夢』が隠す「真実の愛」の代償
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#FFD6A5] mb-12">
          <p className="text-xl font-bold text-[#FFD6A5] italic leading-relaxed">
            「愛せる限り愛せ、だが恐れよ。いつか墓前に佇み、涙を流すその日を。」――かつてヨーロッパを狂わせた超絶技巧の天才が、人生の終着点で見出した“究極の愛”の旋律。
          </p>
        </div>

        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/liszt-liebestraum.png" alt="フランツ・リスト 愛の夢" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 壮大な概要</h2>
            <p className="mb-6 text-white/80">
              クラシック音楽を聴かない人でも、あの気品に満ち、寄せては返す波のようにロマンチックなピアノの旋律を一度は耳にしたことがあるはずです。フランツ・リストが作曲した『愛の夢 第3番（Liebesträume No. 3）』。この曲は、単に「恋人たちの甘い時間」を描いたBGMではありません。
            </p>
            <p className="mb-6 text-white/80">
              19世紀のヨーロッパ音楽界において、この作品は<strong>「歌曲（うた）と器楽（ピアノ）の境界線を完全に消し去った記念碑的名作」</strong>でした。
            </p>
            <p className="text-white/80">
              一見すると、流麗で美しいだけのサロン音楽に聴こえるかもしれません。しかしその実態は、超絶技巧の限りを尽くして全ヨーロッパの女性を失神させていた“鍵盤の魔術師”リストが、ドロドロの不倫愛、宗教的な回心、そして「人間の死」という絶対的な終わりを見つめた末に、自らの哲学をすべて注ぎ込んだ壮絶な人生のドキュメンタリーなのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFC2D1] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 作者の人物像と時代背景：失神者続出！「リストマニア」という狂気
            </h2>
            <p className="mb-6 text-white/80">
              フランツ・リスト（1811-1886）が生きた19世紀半ばのヨーロッパは、「ロマン主義」の全盛期でした。理性を重んじた古典派の時代が終わり、人間の内に秘めた情熱、狂気、そして「個人の感情」を爆発させることが芸術の正義とされた時代です。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">音楽史上初の「スーパーアイドル」</h3>
              <p className="text-white/80">
                長髪を振り乱し、あまりの激しさにピアノの弦を何本も叩き切るその超絶技巧のステージは、聴衆をトランス状態に陥れました。彼のコンサートでは、女性たちが感動のあまり次々と失神し、彼が投げ捨てた手袋や、飲み残したお茶の出涸らしを奪い合いました。この社会現象は、当時の文豪ハインリヒ・ハイネによって<strong>「リストマニア（リスト狂）」</strong>と名付けられたほどです。
              </p>
            </div>
            
            <p className="text-white/80">
              しかし、この『愛の夢』が生まれた1850年頃、リストはそんな狂乱のヴァーチュオーゾ（至高の演奏家）としての生活に自ら終止符を打ち、ドイツの小さな都市ワイマールで宮廷楽長として落ち着いていました。若き日の派手な女性遍歴と名声に疲れ果て、真に「内省的で深い音楽」を追い求め始めた、彼の精神的転換期にこの曲は誕生したのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Heart className="w-8 h-8" />
              3. 制作の意図と作品に込められた意味：「甘い恋」ではなく「死への覚悟」
            </h2>
            
            <p className="mb-6 text-white/80">
              現在、ピアノ独奏曲として広く知られる『愛の夢』ですが、もともとは「3つの歌曲（高声用のための3つの歌）」として作られたものを、リスト自身がピアノ用に編曲した作品です。そのため、この曲には明確な「歌詞（原詩）」が存在します。特に有名な「第3番」のベースとなったのは、ドイツの詩人フェルディナント・フライリヒラートの詩『愛せる限り愛せ（O lieb, so lang du lieben kannst）』です。
            </p>

            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <blockquote className="border-l-4 border-[#C3B7F5] pl-4 text-[#C3B7F5] italic leading-relaxed">
                愛せる限り愛せ、愛したいだけ愛せ！<br/>
                時は来る、時は来るのだ<br/>
                お前が墓の前に佇み、涙を流すその時が。（中略）<br/>
                お前の口を慎むがいい、悪い言葉が飛び出さぬよう。<br/>
                ああ神よ、それは悪気のない言葉だったのだ！<br/>
                だが相手は、涙を流して去っていき、お前を怨むだろう。
              </blockquote>
            </div>

            <p className="mb-4 text-white/80">
              この詩が伝えているのは、恋の歓びではありません。「人間は必ず死ぬ。だから、愛する人を傷つけてはならない。いつか訪れる死別の日、墓の前で後悔しないように、今を全力で愛し抜け」という、極めて重く、宗教的とも言える<strong>「警告」と「覚悟」</strong>のメッセージなのです。
            </p>
            <p className="text-white/80">
              リストがこの時、心から愛していたのは、既婚者でありながら夫と別れてリストのもとに走った、カロリーネ・ヴィトゲンシュタイン公爵夫人でした。社会からの激しいバッシング、宗教的な罪悪感、そしてそれでも抗えない愛。リストが本当に描きたかったのは、ただの甘い夢ではなく、「死や障害を乗り越えて貫く、人間の業（ごう）としての愛」だったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#B8F3D8] mb-6 flex items-center gap-2">
              <ShieldAlert className="w-6 h-6" />
              4. 当時の主流文化に対するスタンス：サロン音楽への「強烈なカウンター」
            </h2>
            <p className="mb-6 text-white/80">
              1850年当時、ピアノという楽器の普及に伴い、貴族や富裕層の邸宅で演奏される「サロン音楽」が大流行していました。それらの多くは、聴き心地が良く、技術をひけらかすだけの「中身のないお洒落な音楽」でした。
            </p>
            <p className="mb-6 text-white/80">
              リストの『愛の夢』は、一見するとそのお洒落なサロン音楽の枠組みに忠実であるかのように擬態しています。しかし、その内実は当時の安易なエンタメ文化に対する<strong>強烈な反逆（カウンター）</strong>でした。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <p className="text-white/80">
                リストは、通俗的なメロディの裏側に、シューベルトのような芸術歌曲の深い精神性と、自身が培った圧倒的なピアノの表現力を融合させました。「ただの耳に心地よい音楽だと思って聴いてみろ。お前たちはこの曲の底にある、死の恐怖と愛の重さに耐えられるか？」と言わんばかりの、あまりにも劇的でドラマチックな展開。エンタメの最前線にいたリストだからこそできた、「大衆娯楽の皮を被った、純粋芸術による奇襲」だったのです。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">5. 技法や表現の秘密：歌声を浮き上がらせる「三の手の魔術」</h2>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <p className="text-white/80 mb-4">
                リストがこの曲で用いた、科学的・芸術的とも言える最大のアプローチが、<strong>「三の手（Three-handed effect）」</strong>と呼ばれるピアノ技法です。
              </p>
              <p className="text-white/80">
                人間には手が2本しかありません。しかし、『愛の夢 第3番』を聴くと、まるで「伴奏を弾く2本の手」とは別に、中央から「切々と歌う3本目の手（ヴォーカル）」が現れたかのような錯覚を覚えます。
              </p>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#B3E5FC] mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              6. 深掘りするミステリー：なぜ「第3番」だけが突出して有名なのか？
            </h2>
            <p className="mb-6 text-white/80">
              『愛の夢』は、本来は「3つの夜想曲（ノクターン）」としてセットで出版されました。しかし、現代において「第1番」と「第2番」が演奏される機会は極めて稀で、ほぼ「第3番」のみが世界的な傑作として語り継がれています。この極端な格差には、リストが仕掛けた<strong>「調性のミステリー」</strong>が関係しています。
            </p>

            <ul className="space-y-4 mb-6">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B3E5FC]">第1番（変イ長調）：</strong> 高貴で、どこか天上的な愛（ウーラントの詩：至高の愛）
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B3E5FC]">第2番（ホ長調）：</strong> エロティックで、官能的な愛（ウーラントの詩：私は死んだ）
              </li>
              <li className="bg-black/40 p-4 rounded-xl border-l-4 border-[#B3E5FC]">
                <strong className="text-[#B3E5FC]">第3番（変イ長調）：</strong> 地上に生きる人間の、生々しく劇的な愛（フライリヒラートの詩：愛せる限り愛せ）
              </li>
            </ul>

            <p className="text-white/80">
              リストは第3番において、曲の途中で「ハ長調」や「ホ長調」へと、まるで激しい感情の起伏を表すように大胆な転調（カデンツァ）を繰り返します。静かな祈りから始まり、情熱が爆発し、やがて嵐が去った後のような静寂へと至るドラマの振れ幅が、1番や2番に比べて圧倒的に人間臭いのです。一説には、リスト自身がこの3番に最も「自分の現実の不倫愛の苦悩」を投影していたため、譜面に宿るエネルギーが桁違いだったのではないかと言われています。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <History className="w-8 h-8" />
              7. 珠玉の歴史トリビア：ショパンへの嫉妬と、世紀の「夜想曲」対決
            </h2>
            <p className="mb-6 text-white/80">
              リストの生涯を語る上で外せないのが、同時代を生きた儚き天才、<strong>フレデリック・ショパン</strong>との複雑な関係です。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10 mb-6">
              <p className="text-white/80 mb-4">
                ショパンは、ピアノで「夜想曲（ノクターン）」というジャンルを確立した天才でした。リストはショパンの繊細な表現力を誰よりも認め、激しく嫉妬していました。ショパンが39歳という若さで病死したのが1849年。その翌年である1850年に、リストは『愛の夢』に「3つの夜想曲」という副題をつけて発表したのです。
              </p>
              <blockquote className="border-l-4 border-[#FFC2D1] pl-4 text-[#FFC2D1] font-bold italic mb-4">
                「君がもういない世界で、私は君の“夜想曲”を超えてみせる。」
              </blockquote>
              <p className="text-white/80">
                これは、亡きライバルに対するリストなりの追悼であり、挑戦状でした。ショパンの夜想曲が「内省的で壊れそうなガラスの美」であるならば、リストの『愛の夢』は「オーケストラをも凌駕するダイナミックな情熱」。歴史にifはありませんが、もしショパンがこの曲を聴いていたら、そのあまりの劇的な展開に激怒したか、あるいはリストの圧倒的な音楽性に涙したことでしょう。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置と鑑賞のリアル</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFE5A0] mb-2 flex items-center gap-2"><Music className="w-4 h-4"/> フィギュアスケートの定番勝負曲</h3>
                <p className="text-sm text-white/80">
                  浅田真央をはじめ、世界トップクラスのスケーターたちが重要なシーズンにこの曲を選んできました。静から動へ、そして再び静へと至るドラマチックな構成は、4分間の演技の中で人間の成長や情熱を表現するのにこれ以上ない完璧なタイムラインを提供します。
                </p>
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <h3 className="font-bold text-[#FFE5A0] mb-2 flex items-center gap-2"><Music className="w-4 h-4"/> アニメ・ゲームにおける「愛と狂気」の象徴</h3>
                <p className="text-sm text-white/80">
                  『クラシカロイド』や様々な音楽系アニメ、美しい哀しみを持つキャラクターのテーマとしてメロディがサンプリングされています。「死への恐怖と愛」という二面性が、現代のクリエイターたちの創作意欲を刺激するのです。
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
                      name="リスト『愛の夢 第3番』"
                      dataKey="A"
                      stroke="#FFE5A0"
                      fill="#FFE5A0"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong className="text-[#FFE5A0]">エモーショナル度（情熱の爆発）：5</strong> 中盤の盛り上がりはサロン音楽の域を超え、全感情が解き放たれる</li>
                <li><strong className="text-[#FFE5A0]">演奏の難易度（テクニック）：4</strong> 超絶技巧練習曲ほどではないが、完璧なレガートと「三の手」の制御が必要</li>
                <li><strong className="text-[#FFE5A0]">大衆性（キャッチーさ）：5</strong> 一度聴いたら忘れない、クラシック史上屈指の極上メロディ</li>
                <li><strong className="text-[#FFE5A0]">構成の静寂・内省度：2</strong> ショパンの夜想曲に比べると、良くも悪くも演劇的で派手な演出が勝る</li>
                <li><strong className="text-[#FFE5A0]">後世のカルチャーへの影響度：5</strong> ポップスへのサンプリング、フィギュアスケート、映像BGMとしての汎用性はトップクラス</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">結び：170年の時を超えて響く「今を愛せ」という警告</h3>
              <p className="text-white/80 mb-4">
                リストがこの曲に込めた「愛せる限り愛せ」というメッセージは、SNSやデジタルで人間関係が希薄になりがちな現代にこそ、より重く響きます。
              </p>
              <p className="text-white/80">
                次にこの美しくも切ない旋律を耳にするときは、ぜひ指先の華麗な動きだけでなく、その裏に隠された「いつか訪れる終わりの日」を見つめてみてください。きっと、今あなたの大切な人に向ける眼差しが、ほんの少し変わるはずです。
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
