import { Star, Sparkles, BookOpen, Users, Brain, Heart, Smile, ChevronDown, ChevronUp } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';
import { Link } from 'react-router';
import seiShonagonImage from 'figma:asset/95b1729b72d6b677a6f36c066826b2a78fa762fe.png';

export function MakuraNoSoshi() {
  const [expandedSeries, setExpandedSeries] = useState<number | null>(1);

  const radarData = [
    {
      subject: '人間関係の複雑度',
      value: 20,
      fullMark: 100,
    },
    {
      subject: '現代への転用力',
      value: 100,
      fullMark: 100,
    },
    {
      subject: 'エモ・情緒レベル',
      value: 80,
      fullMark: 100,
    },
    {
      subject: '哲学的深度',
      value: 60,
      fullMark: 100,
    },
    {
      subject: 'タイパ・読了難易度',
      value: 20,
      fullMark: 100,
    },
  ];

  const series1Chapters = [
    { id: 'dan-1', title: '第1段：春はあけぼの', summary: '「春は夜明けが一番。山の際が少し明るくなって、紫がかった雲が細くたなびいているのが最高にエモい」と、四季それぞれの「ベストタイム」を独自の美学で定義した超有名段。' },
    { id: 'dan-2', title: '第2段：ころは', summary: '「正月は1日が一番」「三月は3日が一番」と、季節の行事や月日の移ろいについて、彼女が「良い！」と感じるタイミングをピンポイントで指定。彼女のこだわりが炸裂しています。' },
    { id: 'dan-41', title: '第41段：鳥は', summary: '鳥の格付け。一番推しは「ホトトギス」。みんなが寝静まった夜中に「テッペンカケタカ」と鳴き、夜明けにひっそり姿を消す。そのドラマチックな演出に清少納言はメロメロです。' },
    { id: 'dan-42', title: '第42段：虫は', summary: '「鈴虫は最高」「松虫もいい」。一方で、ハエは「汚らしいし、名前に『ハエ（映え）』なんてつくのも納得いかない」とバッサリ。蚊も「耳元で鳴くのが不快」と現代人と同じ不満を漏らします。' },
    { id: '', title: '第37段：木は', summary: '桜は当然好きだけど、梨の花の「儚げで綺麗な様子」や、桂の木の「月に関係する伝説」など、単なる見た目だけでなく、背景にあるストーリーを含めて植物を愛でています。' },
    { id: '', title: '第38段：草は', summary: '菖蒲（あやめ）やペンペン草など。豪華な花だけでなく、名もなき草が雨に濡れている様子や、季節の行事に使われる草木に宿る「風情」を大切にする、彼女の繊細な一面が見えます。' },
  ];

  const series2Chapters = [
    { id: '', title: '第28段：にくきもの', summary: '「急いでいる時に限って長話をする客」「人の話を横取りしてドヤ顔で話す人」「静かにしてほしい場所で泣き止まない子供」。1000年前の「イライラあるある」が満載。' },
    { id: '', title: '第22段：すさまじきもの', summary: '「期待外れで興ざめなこと」。恋人を待っていたのに、別のヤツが通り過ぎた時のガッカリ感。あるいは、昇進を確信していたのに、名前が呼ばれなかった時の「お通夜」状態をリアルに描写。' },
    { id: '', title: '第143段：はしたなきもの', summary: '「きまずい瞬間」。人の悪口を言っていたら本人が後ろにいた。あるいは、自分への褒め言葉だと思って「ありがとうございます！」と返事したのに、別人のことだった時。赤面必至のミス集です。' },
    { id: '', title: '第75段：ありがたきもの', summary: '「滅多にない奇跡」。浮気しない男、姑に可愛がられる嫁、欠点のない完璧な容姿。そんなものはこの世に存在しない、という清少納言流の痛烈な皮肉。' },
    { id: '', title: '第150段：あてなるもの', summary: '「上品なもの」。削り氷（かき氷）に甘葛のシロップをかけて、ピカピカの銀の器に盛った様子。色使いや素材の質感にこだわる、彼女のハイセンスな美意識がわかります。' },
    { id: '', title: '第145段：うつくしきもの', summary: '「尊い・かわいい」。スズメの子がチュンチュン寄ってくる姿、ちびっ子が一生懸命這いずり回る様子、小さな雛人形。とにかく「小さくて健気なもの」への母性本能が爆発しています。' },
    { id: '', title: '第84段：心ときめきするもの', summary: '「ワクワク・胸キュン」。素敵な男性から手紙が届いた時。髪を洗ってオシャレをして、好きな人を待つ夜の静けさ。女性なら誰しも共感する、ピュアな高揚感が詰まっています。' },
    { id: '', title: '第146段：心地よきもの', summary: '「スッキリする快感」。探し回っていた物が見つかった時。読みたかった本を全巻手に入れた時。疎遠になっていた人と偶然再会した時。心のモヤモヤが晴れる瞬間をリストアップ。' },
  ];

  const series3Chapters = [
    { id: '', title: '第179段：香炉峰の雪', summary: '定子様が「香炉峰の雪はどうかしら？」と問いかけた。清少納言は言葉で返さず、黙って御簾を高く巻き上げ、外の雪景色を見せた。漢詩の知識を「行動」で示した、伝説のアイコンタクトです。' },
    { id: '', title: '第299段：雪のいと高う降りたるを', summary: '政治的に追い詰められ、ひっそりと暮らしていた定子サロン。それでも彼女たちは、雪の中で優雅に言葉遊びを楽しむ。どんな逆境でも「美しくあること」を諦めない、誇り高き姿が描かれます。' },
    { id: '', title: '第63段：草の庵は', summary: '「草の庵なんて、寂しいところに住んでるね」とバカにしてきた男性貴族に対し、漢詩の知識を引用した鮮やかな切り返しで完膚なきまでに論破。清少納言の知性が炸裂するシーン。' },
    { id: '', title: '第184段：五月ばかりに、信濃の国より', summary: '田舎から出てきた人が、洗練された宮廷のルールを知らずに失敗する様子。清少納言の「都会人としてのプライド」と「厳しい審美眼」が見える、少し毒のある日常の一コマ。' },
    { id: '', title: '第105段：暁に帰らむ人は', summary: '「男の別れ際の美学」。一晩共にした後、バタバタと帰る男は最悪。名残惜しそうに、ゆっくりと身支度をして、振り返りながら去るべき。彼女独自の「理想の男性像」を熱弁。' },
    { id: '', title: '第301段：殿などおはして', summary: '亡き定子様を偲ぶ、作品のラストを飾る回想。定子様がいかに素晴らしく、みんなに愛されていたか。その思い出こそが、清少納言が生きていく糧であることを感じさせる、愛に満ちた段。' },
  ];

  const toggleSeries = (series: number) => {
    setExpandedSeries(expandedSeries === series ? null : series);
  };

  return (
    <div className="min-h-screen relative overflow-hidden pb-16">
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-96 right-1/3 text-white/20 animate-pulse delay-200">
        <Sparkles className="w-7 h-7" />
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#FFE5A0] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            大人の教養白書：Deep Report #02
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            『枕草子』<br />
            <span className="text-2xl md:text-3xl">〜平安の毒舌インフルエンサーが綴った「エモい」日常〜</span>
          </h1>
        </div>
      </section>

      {/* Catchphrase */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#FFE5A0] to-[#B8F3D8] p-8 md:p-12 rounded-3xl border-4 border-white">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">✨</div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1B2B44] leading-relaxed">
                  「春はあけぼの」から始まる1000年前の日記は、<br />
                  驚くほど「今」と同じだった。
                </h2>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-white/50">
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFE5A0]" />
            内容の全体要約
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20 space-y-4">
            <p className="text-lg text-white/90 leading-relaxed">
              『枕草子』は、平安時代中期に<strong className="text-[#FFE5A0]">清少納言</strong>によって書かれた<strong className="text-[#FFE5A0]">日本最古の「随筆（エッセイ）」</strong>です。
              紫式部の『源氏物語』が壮大なフィクション（小説）なら、こちらは清少納言の<strong className="text-[#FFE5A0]">リアルな日常や本音</strong>を詰め込んだブログのような作品。
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              作品は、<strong className="text-[#B8F3D8]">「段（だん）」</strong>と呼ばれる約300の短いエピソードで構成されています。
              ストーリーが繋がっているわけではないので、現代のタイムラインをスクロールするように、どこから読んでも楽しめるのが最大の特徴。彼女の鋭いセンスで切り取られた「世の中のあれこれ」は、1000年経った今でも「わかる！」の連続です。
            </p>
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Users className="w-8 h-8 text-[#FFC2D1]" />
            基本情報
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <div className="flex flex-col md:flex-row gap-6">
              {/* 情報テキスト */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-[#FFC2D1] mb-2">📝 作者</h3>
                  <p className="text-white/90">清少納言（せいしょうなごん）</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#C3B7F5] mb-2">📅 成立時期</h3>
                  <p className="text-white/90">平安時代中期（1001年頃）</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#B3E5FC] mb-2">📚 ジャンル</h3>
                  <p className="text-white/90">随筆（日本三大随筆の一つ）</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#B8F3D8] mb-2">✍️ 執筆のきっかけ</h3>
                  <p className="text-white/90">主君から贈られた貴重な「紙」に、心に浮かぶことを書き留めたのが始まり。</p>
                </div>
              </div>
              
              {/* 清少納言の画像 */}
              <div className="flex-shrink-0">
                <img 
                  src={seiShonagonImage} 
                  alt="清少納言" 
                  className="w-64 h-auto rounded-2xl border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radar Chart */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#FFC2D1]" />
            作品評価レーダーチャート
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#ffffff30" key="polar-grid" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#ffffff', fontSize: 12 }}
                  className="text-xs"
                  key="polar-angle-axis"
                />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#ffffff80' }} key="polar-radius-axis" />
                <Radar 
                  name="枕草子" 
                  dataKey="value" 
                  stroke="#FFE5A0" 
                  fill="#FFE5A0" 
                  fillOpacity={0.6}
                  strokeWidth={3}
                  key="radar-makura"
                />
                <Legend 
                  wrapperStyle={{ color: '#ffffff' }}
                  iconType="circle"
                  key="legend"
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-white/80">
              <div>
                <strong className="text-[#FFC2D1]">💔 人間関係の複雑度：1.0</strong>
                <p className="mt-1">ドロドロした愛憎劇はナシ！主君・定子様への「憧れ」と、貴族たちとの「知的な会話」がメイン。</p>
              </div>
              <div>
                <strong className="text-[#FFE5A0]">💼 現代への転用力：5.0</strong>
                <p className="mt-1">「自分の『好き』を言語化する力」が身につく。SNSでの発信や自己プロデュースのヒントが満載！</p>
              </div>
              <div>
                <strong className="text-[#B8F3D8]">🌸 エモ・情緒レベル：4.0</strong>
                <p className="mt-1">「をかし（素敵！）」の宝庫。切なさよりも、パッと心が明るくなるような瑞々しい感性が魅力。</p>
              </div>
              <div>
                <strong className="text-[#B3E5FC]">⏱️ タイパ・読了難易度：1.0</strong>
                <p className="mt-1">一話（一段）が短いので、どこから読んでもOK。現代のブログ感覚でサクサク読める最高タイパ作品。</p>
              </div>
              <div className="md:col-span-2">
                <strong className="text-[#C3B7F5]">🧐 哲学的な深度：3.0</strong>
                <p className="mt-1">人生の深淵よりも、「今、この瞬間をどう楽しむか」という日常の美学を問い続けるスタイル。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Sections */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#B8F3D8]" />
            これは押さえておきたい！有名な段20選！
          </h2>

          {/* Series 1 */}
          <div className="mb-4">
            <button
              onClick={() => toggleSeries(1)}
              className="w-full bg-gradient-to-r from-[#B8F3D8] to-[#B3E5FC] p-6 rounded-3xl border-4 border-white hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#1B2B44] mb-2">シリーズ① 自然と推し活：清少納言の「四季と世界」</h3>
                  <p className="text-[#1B2B44]/70">6段</p>
                </div>
                {expandedSeries === 1 ? (
                  <ChevronUp className="w-8 h-8 text-[#1B2B44]" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-[#1B2B44]" />
                )}
              </div>
            </button>
            {expandedSeries === 1 && (
              <div className="mt-4 bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="space-y-3">
                  {series1Chapters.map((chapter, index) => {
                    const CardWrapper = chapter.id ? Link : 'div';
                    const cardProps = chapter.id 
                      ? { to: `/article/literature/makura/${chapter.id}` }
                      : {};
                    
                    return (
                      <CardWrapper 
                        key={`series1-${index}`} 
                        {...cardProps}
                        className={`bg-[#1B2B44] p-4 rounded-2xl border-2 border-white/10 hover:border-[#B8F3D8]/50 transition-all block ${chapter.id ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">🌸</div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{chapter.title}</h4>
                            <p className="text-sm text-white/70 leading-relaxed">{chapter.summary}</p>
                          </div>
                        </div>
                      </CardWrapper>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Series 2 */}
          <div className="mb-4">
            <button
              onClick={() => toggleSeries(2)}
              className="w-full bg-gradient-to-r from-[#FFE5A0] to-[#FFC2D1] p-6 rounded-3xl border-4 border-white hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#1B2B44] mb-2">シリーズ② 感性カタログ：現代人にも刺さる「〇〇なもの」8選</h3>
                  <p className="text-[#1B2B44]/70">8段</p>
                </div>
                {expandedSeries === 2 ? (
                  <ChevronUp className="w-8 h-8 text-[#1B2B44]" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-[#1B2B44]" />
                )}
              </div>
            </button>
            {expandedSeries === 2 && (
              <div className="mt-4 bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="space-y-3">
                  {series2Chapters.map((chapter, index) => (
                    <div key={`series2-${index}`} className="bg-[#1B2B44] p-4 rounded-2xl border-2 border-white/10 hover:border-[#FFE5A0]/50 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">💭</div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{chapter.title}</h4>
                          <p className="text-sm text-white/70 leading-relaxed">{chapter.summary}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Series 3 */}
          <div>
            <button
              onClick={() => toggleSeries(3)}
              className="w-full bg-gradient-to-r from-[#FFC2D1] to-[#C3B7F5] p-6 rounded-3xl border-4 border-white hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#1B2B44] mb-2">シリーズ③ 宮廷ドラマ：主君・定子様との「愛と知性のエピソード」</h3>
                  <p className="text-[#1B2B44]/70">6段</p>
                </div>
                {expandedSeries === 3 ? (
                  <ChevronUp className="w-8 h-8 text-[#1B2B44]" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-[#1B2B44]" />
                )}
              </div>
            </button>
            {expandedSeries === 3 && (
              <div className="mt-4 bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="space-y-3">
                  {series3Chapters.map((chapter, index) => (
                    <div key={`series3-${index}`} className="bg-[#1B2B44] p-4 rounded-2xl border-2 border-white/10 hover:border-[#FFC2D1]/50 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">👑</div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{chapter.title}</h4>
                          <p className="text-sm text-white/70 leading-relaxed">{chapter.summary}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Smile className="w-8 h-8 text-[#FFE5A0]" />
            作者：清少納言
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img 
                  src={seiShonagonImage} 
                  alt="清少納言" 
                  className="w-48 h-auto rounded-2xl border-4 border-white shadow-lg"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-white/90 leading-relaxed">
                  一条天皇の中宮・<strong className="text-[#FFC2D1]">定子</strong>に仕えた女房（女性秘書のような存在）。機知に富み、漢詩や和歌の教養を武器に、男性貴族たちとも対等に渡り合った才女。紫式部とは同じ時代に生きたライバル関係とされ、お互いに日記で毒舌を飛ばし合っています（清少納言は「陽キャ」、紫式部は「陰キャ」と評されることも）。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trivia */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#C3B7F5]" />
            豆知識
          </h2>
          <div className="space-y-4">
            <div className="bg-[#B3E5FC] p-6 rounded-3xl border-4 border-white">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📖</div>
                <div>
                  <h3 className="font-bold text-xl text-[#1B2B44] mb-2">名前の由来</h3>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    「枕草子」の理由は未だ謎。「枕元に置いたから」「枕（秘蔵品）のようにしたから」など諸説あるミステリアスな題名。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFE5A0] p-6 rounded-3xl border-4 border-white">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚔️</div>
                <div>
                  <h3 className="font-bold text-xl text-[#1B2B44] mb-2">紫式部とのバトル</h3>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    ライバルの紫式部には日記で「知ったかぶりで鼻持ちならない」と酷評されています。陽キャと陰キャの致命的な相性の悪さが見て取れます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#FFC2D1]" />
            深掘り：悲劇を隠した「明るい文章」
          </h2>
          <div className="bg-gradient-to-br from-[#C3B7F5] to-[#FFC2D1] p-8 rounded-3xl border-4 border-white">
            <p className="text-lg text-[#1B2B44] leading-relaxed mb-4">
              『枕草子』を読み進めると、きらきらした幸福感に包まれます。しかし、実は執筆当時の現実、清少納言が仕えた<strong>中宮定子の一族は政治的に没落し、定子自身も若くして亡くなるという悲劇の真っ只中</strong>でした。
            </p>
            <p className="text-lg text-[#1B2B44] leading-relaxed">
              それでも清少納言は、定子の苦しみや涙を一行も書きませんでした。彼女は定子の輝いていた姿だけを永遠に残そうとしたのです。作品全体が、主君への「祈り」と「愛」の記録だったのかもしれません。
            </p>
          </div>
        </div>
      </section>

      {/* Summary/Conclusion */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#B8F3D8]" />
            まとめ
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-lg text-white/90 leading-relaxed">
              清少納言が教えてくれるのは、<strong className="text-[#B8F3D8]">「日常をどう面白がるか」</strong>という視点です。
              嫌なことがあっても「にくきもの」として言語化し、小さな幸せを「うつくしきもの」として愛でる。そんな彼女のポジティブな知性は、1000年経った今の私たちにも、毎日を「をかし」く生きるヒントをくれています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center border-4 border-white bg-gradient-to-br from-[#FFE5A0] via-[#B8F3D8] to-[#C3B7F5]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B44] mb-4">
                もっと深く知りたくなった？
              </h2>
              <p className="text-lg text-[#1B2B44]/80 mb-8">
                サイドバーから、他のカテゴリーも探索してみてください
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B2B44] rounded-2xl shadow-lg border-4 border-white hover:scale-105 transition-transform cursor-pointer">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="font-bold text-white">次の記事へ</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 text-white/30">
              <Star className="w-10 h-10 fill-current" />
            </div>
            <div className="absolute bottom-6 left-6 text-white/30">
              <Star className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}