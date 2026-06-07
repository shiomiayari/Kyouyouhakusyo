import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Droplet, Eye, Palette as PaletteIcon } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function MonetWaterLilies() {
  const radarData = [
    { subject: '没入感', A: 5, fullMark: 5 },
    { subject: '抽象性', A: 4, fullMark: 5 },
    { subject: '制作の狂気度', A: 5, fullMark: 5 },
    { subject: '色彩の明るさ', A: 3, fullMark: 5 },
    { subject: 'ストーリー性', A: 4, fullMark: 5 },
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
          光と水のオーケストラ：<br/>モネ『睡蓮』の深淵
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#C3B7F5] mb-12">
          <p className="text-xl font-bold text-[#C3B7F5] italic leading-relaxed">
            「キャンバスに留められた、一瞬の光。巨匠モネが狂気と盲目の果てに辿り着いた、水の楽園。」
          </p>
        </div>

        {/* 1枚目の写真 */}
        <div className="mb-12 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl relative">
          <img src="/monet-water-lilies.png" alt="睡蓮 クロード・モネ" className="w-full object-cover" />
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">壮大な概要：なぜモネは「睡蓮」に憑りつかれたのか？</h2>
            <p className="mb-6 text-white/80">
              モネの『睡蓮』は、単なる美しい風景画ではありません。約30年間で<strong>250点以上</strong>も描かれた、壮大な「光と空気の実験」の記録です。
            </p>
            <p className="mb-6 text-white/80">
              モネが描きたかったのは、睡蓮という植物そのものではなく、「水面に反射する空の光」や「刻一刻と変化する空気の揺らぎ」でした。形あるものをあえて曖昧にし、光の色彩だけで空間を表現しようとしたこのアプローチは、のちの「抽象表現主義」の先駆けとも言われています。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Droplet className="w-6 h-6" />
              睡蓮を生んだ舞台：ジヴェルニーの「水の庭」
            </h2>
            <p className="mb-6">
              モネの『睡蓮』を語る上で絶対に欠かせないのが、フランスの田舎町にある<strong>ジヴェルニーの邸宅と庭園</strong>です。
            </p>

            {/* 2枚目の写真 */}
            <div className="mb-8 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg">
              <img src="/monet-garden-map.png" alt="モネの庭園 ジヴェルニー 園内マップ" className="w-full object-cover" />
            </div>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">自分で「描きたい理想の庭」を作った</h3>
                <p>
                  40代後半でジヴェルニーに移住したモネは、経済的な余裕ができると、近くの川の水を引き込んで巨大な池を作りました。
                  彼は自らカタログを取り寄せて珍しい色の睡蓮を植え、池に<strong>「日本風の太鼓橋（ジャポニスムの象徴）」</strong>を架け、柳や竹を植えました。つまりモネは、「自分がキャンバスに描きたい理想の景色」を、まず現実の三次元に造園したのです。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">プロの庭師を雇うほどの執念</h3>
                <p>
                  モネは5人もの庭師を雇い、毎朝、睡蓮の葉についた煤煙やゴミをボートで掃除させました。さらに、睡蓮が最も美しく光を反射するよう、庭師に葉を水に濡らさせることまでしていたといいます。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Eye className="w-8 h-8 text-[#FFC2D1]" />
              悲劇と執念：失明の危機と「白内障」の色彩
            </h2>
            <p className="mb-6 text-white/80">晩年のモネを襲った最大の悲劇が、眼の病気である<strong>白内障</strong>でした。</p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">黄色く濁る世界：</strong>
                白内障が進行すると、視界が黄色や赤みがかって見え、青や緑の寒色が認識できなくなります。一時期のモネの作品が、燃えるような赤や茶色で埋め尽くされているのは、彼の眼に世界がそう映っていたからです。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">心の眼で描いた大装飾画：</strong>
                手術を経て視力をある程度取り戻したものの、明暗や色彩の感覚はボロボロでした。それでもモネは、絵の具のチューブに書かれた色の名前を確認しながら、記憶と魂を頼りに巨大なキャンバスに向かい続けました。
              </li>
            </ul>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFE5A0] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              珠玉の豆知識（トリビア）
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2 flex items-center gap-2"><PaletteIcon className="w-5 h-5"/> ① 白いキャンバスは使わない？「筆触分割」の魔法</h3>
                <p>モネはパレットの上で絵の具を混ぜて濁らせるのを嫌いました。純粋な色（例えば青と黄）を混ぜずに、細い筆跡でキャンバスに並べていく<strong>「筆触分割（ひっしょくぶんかつ）」</strong>という技法を使っています。離れて見たときに、人間の脳の中で色が混ざり合って、キラキラした光に見えるという視覚の科学を利用しています。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">② 額縁のない世界：オランジュリー美術館の「奇跡の部屋」</h3>
                <p>パリのオランジュリー美術館には、モネの『睡蓮』のためだけに作られた楕円形の部屋があります。</p>
                <div className="mt-2 p-4 bg-black/20 rounded-lg">
                  <strong className="text-[#FFE5A0] block mb-1">角のない部屋：</strong>
                  壁一面を覆う巨大な睡蓮の連作には、四角い額縁がありません。モネは「終わりも始まりもない、水の世界に鑑賞者を閉じ込める」ことを望みました。天井からの自然光だけで鑑賞するこの部屋は、まさに「絵画の教会」です。
                </div>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">③ 国への寄贈を支えた「総理大臣との友情」</h3>
                <p>オランジュリーの巨大な『睡蓮』は、第一次世界大戦の終結（休戦）の翌日、モネがフランス国に寄贈したものです。白内障で弱気になり、制作を諦めそうになるモネを、「君の作品はフランスの宝だ、絶対に完成させてくれ」と励まし、国への寄贈をプロデュースしたのが、当時の首相でありモネの終生の親友、<strong>ジョルジュ・クレマンソー</strong>でした。</p>
              </div>
            </div>

            {/* 3枚目の写真 */}
            <div className="mt-8 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg">
              <img src="/monet-timeline.png" alt="クロード・モネ 作品年表と庭園の歩み" className="w-full object-cover" />
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置</h2>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B3E5FC] block mb-1">イマーシブ（没入型）アートの元祖：</strong>
                現代日本でも大流行している「没入型デジタルアート（プロジェクションマッピング）」の精神的ルーツは、間違いなくモネのオランジュリーの部屋にあります。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B3E5FC] block mb-1">オークションでの伝説：</strong>
                モネの『睡蓮』は、今なおオークションに出品されるたびに数十億〜100億円以上の価格で落札され、美術史における最高峰のアイコンとして君臨しています。
              </li>
            </ul>

            <div className="mt-8 bg-[#1B2B44] p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-6">レーダーチャート：モネ『睡蓮』分析</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="#ffffff40" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 14 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#ffffff80' }} />
                    <Radar
                      name="モネ『睡蓮』"
                      dataKey="A"
                      stroke="#C3B7F5"
                      fill="#C3B7F5"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
