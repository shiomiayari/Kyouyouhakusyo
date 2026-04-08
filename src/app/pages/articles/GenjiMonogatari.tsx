import { Star, Sparkles, BookOpen, Users, Brain, Heart, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';
const authorImage = '/murasaki-shikibu.jpg';
const relationshipImage = '/genji-relationship.png';
const book1Image = '/genji-book1.jpg';
const book2Image = '/genji-book2.jpg';
const book3Image = '/genji-book3.jpg';

export function GenjiMonogatari() {
  const [expandedPart, setExpandedPart] = useState<number | null>(1);

  const radarData = [
    {
      subject: '人間関係の複雑度',
      value: 100,
      fullMark: 100,
    },
    {
      subject: '現代への転用力',
      value: 80,
      fullMark: 100,
    },
    {
      subject: 'エモ・情緒レベル',
      value: 100,
      fullMark: 100,
    },
    {
      subject: '哲学的深度',
      value: 60,
      fullMark: 100,
    },
    {
      subject: 'タイパ・読了難易度',
      value: 100,
      fullMark: 100,
    },
  ];

  const part1Chapters = [
    { num: 1, title: '桐壺', summary: '帝の最愛を一身に受けた母の死と、その面影を持つ源氏の誕生。そして実母・桐壺によく似た年の近い義母・藤壺が後宮にやってくる。' },
    { num: 2, title: '帚木', summary: '光源氏17歳。雨の夜、男たちが理想の女性について語り合う「品定め」から恋の幕が開く。' },
    { num: 3, title: '空蝉', summary: '格下の受領の妻に拒絶され、夜這いの末に蝉の抜け殻のような薄衣一枚だけを残して逃げられる、源氏のプライドを挫く初めての敗北。また、朱雀帝が即位する' },
    { num: 4, title: '夕顔', summary: '素性を隠した薄幸の女と廃屋で密会中、源氏に執着する六条御息所の生霊によって女を呪い殺される。' },
    { num: 5, title: '若紫', summary: '理想の女性（藤壺）に似た6歳の少女を見出し、自らの手で育てる育成の始まり。' },
    { num: 6, title: '末摘花', summary: '一度は近づいたものの蓋を開けてみれば期待外れの容姿を持つ女性・末摘花を見捨てられず、源氏の「情」の深さが露呈する。' },
    { num: 7, title: '紅葉賀', summary: '義母・藤壺とのひそかな逢瀬によって、父帝の血を引かない禁忌の子が宿る。' },
    { num: 8, title: '花宴', summary: '政敵の娘・朧月夜との偶然の出会いが、後に源氏を破滅させる政治的スキャンダルへ。' },
    { num: 9, title: '葵', summary: '正妻・葵の上の出産（息子は夕霧）と、その際嫉妬に狂った愛人・六条御息所の生霊による無惨な死。' },
    { num: 10, title: '賢木', summary: '最愛の藤壺の出家と、政敵の台頭により源氏の立場が急激に悪化する。' },
    { num: 11, title: '花散里', summary: '華やかな愛の裏で、また新たに控えめな女性との静かな絆に安らぎを見出す。' },
    { num: 12, title: '須磨', summary: 'スキャンダルが露見し、都を追われ、孤独の中で己の罪と向き合う。' },
    { num: 13, title: '明石', summary: '嵐の夜の運命的な出会いにより、高貴な女性・明石の上と出会い未来の皇妃となる娘（明石の姫君）を授かる。' },
    { num: 14, title: '澪標', summary: '都へ帰還し、権力を取り戻した源氏がかつての女たちとの縁を再び結ぶ。' },
    { num: 15, title: '蓬生', summary: '源氏不在の間もひたすら待ち続けた没落令嬢（末摘花/6章）を、優しさと深い情で再び庇護する。' },
    { num: 16, title: '関屋', summary: 'かつての恋人・空蝉（3章）との再会を通じ、過ぎ去った時間と変わらぬ縁を噛みしめる。' },
    { num: 17, title: '絵合', summary: '二勢力の妃・梅壺と弘徽殿が絵画の優劣を競い、宮廷の政治的主導権を争う。' },
    { num: 18, title: '松風', summary: '明石の君（13章）が都入りにし、身分の差に悩みながらも源氏の庇護下に入る。' },
    { num: 19, title: '薄雲', summary: '精神的支柱であった藤壺が崩御し、源氏は深い虚無感に包まれる。' },
    { num: 20, title: '朝顔', summary: '高潔な斎王・朝顔の君への求愛に失敗し、源氏は自らの「色好み」の限界を知る。' },
    { num: 21, title: '乙女', summary: '六条院という壮大な新邸宅が完成し、源氏の理想郷が物理的に具現化する。また、巣細工手から冷泉帝に帝位が譲渡される。' },
    { num: 22, title: '玉鬘', summary: 'かつての恋人である夕顔（4章）の遺児・玉鬘を養女とし、彼女を巡る男たちの欲望を弄ぶ。' },
    { num: 23, title: '初音', summary: '六条院で迎える豪華絢爛な正月、源氏の栄華が絶頂に達する。' },
    { num: 24, title: '胡蝶', summary: '春の庭で舞い踊る乙女たちと、貴族文化の最も華やかな瞬間が描かれる。' },
    { num: 25, title: '蛍', summary: '闇夜に放たれた蛍の光の中で、恋に悩む玉鬘（22章）の姿が浮かび上がる。' },
    { num: 26, title: '常夏', summary: '亡き夕顔を想いながら、その忘れ形見である玉鬘の幸せを願う親心。' },
    { num: 27, title: '篝火', summary: '夏の夜の篝火の下、源氏と玉鬘の間に危うい恋の気配が漂う。' },
    { num: 28, title: '野分', summary: '台風が去った後の庭で、次世代の夕霧（9章）が源氏の女たちの美しさに目覚める。' },
    { num: 29, title: '行幸', summary: '冷泉帝（21章）が自身の出生の秘密（源氏と藤壺の子であること）を知り、源氏を父として敬う。' },
    { num: 30, title: '藤袴', summary: '玉鬘が自らの出生を知り、求婚者たちの中から結婚相手を選ぶ決意をする。' },
    { num: 31, title: '真木柱', summary: '玉鬘の結婚を機に、彼女を巡る周囲の人間関係に一応の終止符が打たれる。' },
    { num: 32, title: '梅枝', summary: '明石の姫君（13章）の入内に備え、宮廷文化の粋を集めた薫物の競演が行われる。' },
    { num: 33, title: '藤裏葉', summary: '夕霧とその幼馴染・雲居の雁が長年の恋を成就させ、源氏の一族は完全なる幸福を得る。' },
  ];

  const part2Chapters = [
    { num: 34, title: '若菜 上', summary: '晩年の源氏が若き妻・女三宮を迎え、六条院の調和に亀裂が入り始める。' },
    { num: 35, title: '若菜 下', summary: '女三宮が柏木と密通し、源氏がかつて父を裏切った罪を自ら味わう因果応報。' },
    { num: 36, title: '柏木', summary: '源氏の冷徹な追及により、罪の意識に耐えかねた柏木が若くして命を落とす。' },
    { num: 37, title: '横笛', summary: '柏木の遺品である横笛を巡り、残された者たちが故人を偲び、秘密を共有する。' },
    { num: 38, title: '鈴虫', summary: '女三宮の出家と、鈴虫の音色に託された消えない哀しみと執着。' },
    { num: 39, title: '夕霧', summary: '親友である柏木の未亡人・落葉の宮に執着し、生真面目だった夕霧が理性を失う。' },
    { num: 40, title: '御法', summary: '光源氏の最愛の紫の上が病に倒れ、源氏の魂の片割れが永遠に失われる。' },
    { num: 41, title: '幻', summary: '最愛のひとを失った源氏が、季節の移ろいの中に死の予感と無常を見出す。' },
    { num: 42, title: '雲隠', summary: '章題のみが存在し、本文がないことで光源氏の死を沈黙のうちに表現する。' },
  ];

  const part3Chapters = [
    { num: 43, title: '匂兵部卿', summary: '源氏亡き後、香りを競う匂宮と薫という二人の貴公子が登場する。' },
    { num: 44, title: '竹河', summary: '玉鬘の娘たちを巡る、新たな世代の恋と権力の駆け引き。' },
    { num: 45, title: '橋姫', summary: '薫が宇治の隠者・八の宮の娘たちと出会い、宿命的な恋の物語が動き出す。' },
    { num: 46, title: '椎本', summary: '八の宮の死と、残された大君・中君の姉妹を巡る薫と匂宮の対立。' },
    { num: 47, title: '総角', summary: '薫の求愛を拒み続けた大君が、心身の消耗の末にこの世を去る。' },
    { num: 48, title: '早蕨', summary: '姉を失った中君が都へ移り、薫との複雑な縁が続いていく。' },
    { num: 49, title: '宿木', summary: '薫が別の女性と結婚するも、心は常に亡き大君の面影を追い続ける。' },
    { num: 50, title: '東屋', summary: '大君に生き写しの異母妹・浮舟が現れ、薫の執着が燃する。' },
    { num: 51, title: '浮舟', summary: '薫と匂宮、二人の貴公子に愛され追い詰められた浮舟が宇治の川へ身を投げる。' },
    { num: 52, title: '蜻蛉', summary: '浮舟の死を悼む人々の中で、薫は再び「喪失」という虚無に直面する。' },
    { num: 53, title: '手習', summary: '奇跡的に救われていた浮舟が、比叡山の麓で自らの過去を捨てて出家する。' },
    { num: 54, title: '夢浮橋', summary: '出家した浮舟に拒絶された薫が、この世のすべてが夢の架け橋のように儚いと悟る。' },
  ];

  const togglePart = (part: number) => {
    setExpandedPart(expandedPart === part ? null : part);
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
          <div className="inline-block px-4 py-2 bg-[#FFC2D1] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            大人の教養白書：Deep Report #01
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            『源氏物語』<br />
            <span className="text-3xl md:text-4xl">〜愛執と権力のアーキテクチャ〜</span>
          </h1>
        </div>
      </section>

      {/* Catchphrase */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#FFC2D1] to-[#C3B7F5] p-8 md:p-12 rounded-3xl border-4 border-white">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">💔</div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1B2B44] leading-relaxed">
                  全方位外交の代償。<br />
                  1000年前のプレイボーイが陥った『因果応報』な行く末
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
            <BookOpen className="w-8 h-8 text-[#FFC2D1]" />
            要約
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-lg text-white/90 leading-relaxed">
              帝の愛息でありながら臣下にされた「光源氏」を軸に、平安貴族社会の頂点へ登り詰める栄華と、愛した女性たちの死、そして自らの不義が自身に返ってくる晩年の凋落を描く。単なる「恋多き男の物語」ではなく、<strong className="text-[#FFC2D1]">「持てる者がすべてを失っていく過程」</strong>を冷徹に描いた、日本文学史上最も美しく残酷なリアリズム小説である。
            </p>
          </div>
        </div>
      </section>

      {/* All 54 Chapters */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFE5A0]" />
            源氏物語・全54帖：各章完全要約白書
          </h2>

          {/* Part 1 */}
          <div className="mb-4">
            <button
              onClick={() => togglePart(1)}
              className="w-full bg-gradient-to-r from-[#FFC2D1] to-[#C3B7F5] p-6 rounded-3xl border-4 border-white hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#1B2B44] mb-2">第一部：光源氏の栄華と愛の遍歴</h3>
                  <p className="text-[#1B2B44]/70">桐壺 〜 藤裏葉（全33帖）</p>
                </div>
                {expandedPart === 1 ? (
                  <ChevronUp className="w-8 h-8 text-[#1B2B44]" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-[#1B2B44]" />
                )}
              </div>
            </button>
            {expandedPart === 1 && (
              <div className="mt-4 bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="space-y-3">
                  {part1Chapters.map((chapter) => (
                    <div key={chapter.num} className="bg-[#1B2B44] p-4 rounded-2xl border-2 border-white/10 hover:border-[#FFC2D1]/50 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex-shrink-0 bg-[#FFC2D1] rounded-xl flex items-center justify-center text-[#1B2B44] font-bold border-2 border-white">
                          {chapter.num}
                        </div>
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

          {/* Part 2 */}
          <div className="mb-4">
            <button
              onClick={() => togglePart(2)}
              className="w-full bg-gradient-to-r from-[#C3B7F5] to-[#B3E5FC] p-6 rounded-3xl border-4 border-white hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#1B2B44] mb-2">第二部：因果応報と崩壊の物語</h3>
                  <p className="text-[#1B2B44]/70">若菜 上 〜 雲隠（全9帖）</p>
                </div>
                {expandedPart === 2 ? (
                  <ChevronUp className="w-8 h-8 text-[#1B2B44]" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-[#1B2B44]" />
                )}
              </div>
            </button>
            {expandedPart === 2 && (
              <div className="mt-4 bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="space-y-3">
                  {part2Chapters.map((chapter) => (
                    <div key={chapter.num} className="bg-[#1B2B44] p-4 rounded-2xl border-2 border-white/10 hover:border-[#C3B7F5]/50 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex-shrink-0 bg-[#C3B7F5] rounded-xl flex items-center justify-center text-[#1B2B44] font-bold border-2 border-white">
                          {chapter.num}
                        </div>
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

          {/* Part 3 */}
          <div>
            <button
              onClick={() => togglePart(3)}
              className="w-full bg-gradient-to-r from-[#B3E5FC] to-[#B8F3D8] p-6 rounded-3xl border-4 border-white hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#1B2B44] mb-2">第三部：宇治十帖（次世代の彷徨）</h3>
                  <p className="text-[#1B2B44]/70">匂兵部卿 〜 夢浮橋（全12帖）</p>
                </div>
                {expandedPart === 3 ? (
                  <ChevronUp className="w-8 h-8 text-[#1B2B44]" />
                ) : (
                  <ChevronDown className="w-8 h-8 text-[#1B2B44]" />
                )}
              </div>
            </button>
            {expandedPart === 3 && (
              <div className="mt-4 bg-[#2A3B5A] p-6 rounded-3xl border-2 border-white/20">
                <div className="space-y-3">
                  {part3Chapters.map((chapter) => (
                    <div key={chapter.num} className="bg-[#1B2B44] p-4 rounded-2xl border-2 border-white/10 hover:border-[#B3E5FC]/50 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex-shrink-0 bg-[#B3E5FC] rounded-xl flex items-center justify-center text-[#1B2B44] font-bold border-2 border-white">
                          {chapter.num}
                        </div>
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

      {/* Character Relationship */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Users className="w-8 h-8 text-[#FFC2D1]" />
            人物相関図
          </h2>
          <div className="bg-white p-8 rounded-3xl border-4 border-white shadow-xl">
            <img 
              src={relationshipImage} 
              alt="源氏物語・人物相関図" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Background & Author */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Users className="w-8 h-8 text-[#FFE5A0]" />
            作品の背景・作者
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#FFC2D1] mb-3">作者：紫式部</h3>
                  <p className="text-white/90 leading-relaxed">
                    藤原道長の娘・彰子の家庭教師（女房）として出仕。最高権力者・道長のプロデュースを受け、当時の政治的パワーゲームを間近で見ながら執筆した。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#C3B7F5] mb-3">時代背景：摂関政治の最盛期</h3>
                  <p className="text-white/90 leading-relaxed">
                    「娘を帝に嫁がせ、外戚として権力を握る」という構造がすべて。女性の価値が政治利用される中で、彼女たちの「心の居場所」を文学として救い出した側面がある。
                  </p>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src={authorImage} 
                  alt="紫式部" 
                  className="w-full rounded-2xl border-4 border-white shadow-xl"
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
            <Heart className="w-8 h-8 text-[#C3B7F5]" />
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
                  name="源氏物語" 
                  dataKey="value" 
                  stroke="#FFC2D1" 
                  fill="#FFC2D1" 
                  fillOpacity={0.6}
                  strokeWidth={3}
                  key="radar-genji"
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
                <strong className="text-[#FFC2D1]">💔 人間関係の複雑度：5.0</strong>
                <p className="mt-1">愛憎、嫉妬、生霊。まさに昼ドラの極致。</p>
              </div>
              <div>
                <strong className="text-[#B3E5FC]">💼 現代への転用力：4.0</strong>
                <p className="mt-1">恋愛、政治、ブランディング。全てが学べる。</p>
              </div>
              <div>
                <strong className="text-[#B8F3D8]">🌸 エモ・情緒レベル：5.0</strong>
                <p className="mt-1">風景描写と心理描写が絶品。読んでいて涙が出る。</p>
              </div>
              <div>
                <strong className="text-[#C3B7F5]">🤔 哲学的深度：3.0</strong>
                <p className="mt-1">無常、因果応報、人生の虚しさを問い続ける。</p>
              </div>
              <div className="md:col-span-2">
                <strong className="text-[#FFE5A0]">⏱️ タイパ・読了難易度：5.0</strong>
                <p className="mt-1">54帖は長い。漫画版ならなら意外と読める。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#FFE5A0]" />
            さらに深堀りたい人にお勧めな本三選
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FFC2D1] p-6 rounded-3xl border-4 border-white">
              <div className="mb-4">
                <img 
                  src={book1Image} 
                  alt="あさきゆめみし" 
                  className="w-full rounded-xl border-2 border-white shadow-lg"
                />
              </div>
              <h3 className="font-bold text-lg text-[#1B2B44] mb-2 text-center">『あさきゆめみし』</h3>
              <p className="text-sm text-[#1B2B44]/70 mb-3 text-center font-bold">大和和紀（著）</p>
              <p className="text-sm text-[#1B2B44]/80 leading-relaxed">
                源氏物語を完全漫画化した不朽の名作。美麗な作画で平安貴族の世界観を体感できる。原文が苦手な人は、まずここから。
              </p>
            </div>

            <div className="bg-[#C3B7F5] p-6 rounded-3xl border-4 border-white">
              <div className="mb-4">
                <img 
                  src={book2Image} 
                  alt="源氏物語の時代" 
                  className="w-full rounded-xl border-2 border-white shadow-lg"
                />
              </div>
              <h3 className="font-bold text-lg text-[#1B2B44] mb-2 text-center">『源氏物語の時代』</h3>
              <p className="text-sm text-[#1B2B44]/70 mb-3 text-center font-bold">山本淳子（著）</p>
              <p className="text-sm text-[#1B2B44]/80 leading-relaxed">
                摂関政治、後宮システム、平安貴族の恋愛観など、物語の背景にある「システム」を徹底解説。読後の理解が10倍深まる。
              </p>
            </div>

            <div className="bg-[#B3E5FC] p-6 rounded-3xl border-4 border-white">
              <div className="mb-4">
                <img 
                  src={book3Image} 
                  alt="紫式部日記" 
                  className="w-full rounded-xl border-2 border-white shadow-lg"
                />
              </div>
              <h3 className="font-bold text-lg text-[#1B2B44] mb-2 text-center">『紫式部日記』</h3>
              <p className="text-sm text-[#1B2B44]/70 mb-3 text-center font-bold">紫式部（著）</p>
              <p className="text-sm text-[#1B2B44]/80 leading-relaxed">
                作者自身が記した宮廷日記。藤原道長や彰子中宮とのリアルな関係、そして「源氏物語」創作の舞台裏が垣間見える。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trivia */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#B8F3D8]" />
            作品の豆知識（ディープ版）
          </h2>
          <div className="space-y-4">
            <div className="bg-[#FFC2D1] p-6 rounded-3xl border-4 border-white">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎭</div>
                <div>
                  <h3 className="font-bold text-xl text-[#1B2B44] mb-2">光源氏にモデルはいない？</h3>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    特定のモデルはおらず、在原業平の「色好み」、藤原道長の「権力」、源融の「邸宅」など、当時のスターたちの要素をマッシュアップした<strong>「最強の架空キャラ」</strong>として設計されている。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#B3E5FC] p-6 rounded-3xl border-4 border-white">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💜</div>
                <div>
                  <h3 className="font-bold text-xl text-[#1B2B44] mb-2">「紫のゆかり」というブランディング</h3>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    源氏が初恋の女性（藤壺）に似ている少女（若紫）を拉致し、理想の女性に育てる。これは単なる監禁ではなく、自分好みの「価値」をゼロから創り出すという、究極の自己愛の象徴。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center border-4 border-white bg-gradient-to-br from-[#FFC2D1] via-[#C3B7F5] to-[#B8F3D8]">
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