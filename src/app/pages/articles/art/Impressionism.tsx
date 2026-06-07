import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Paintbrush, Sun, Eye } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function Impressionism() {
  const radarData = [
    { subject: '革新性', A: 5, fullMark: 5 },
    { subject: '色彩の明るさ', A: 5, fullMark: 5 },
    { subject: '親しみやすさ', A: 4, fullMark: 5 },
    { subject: '写実性', A: 2, fullMark: 5 },
    { subject: '歴史的影響力', A: 5, fullMark: 5 },
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
          19世紀の芸術革命：印象派とは何か？
        </h1>

        <div className="bg-[#2A3B5A] p-6 rounded-2xl border-l-4 border-[#C3B7F5] mb-12">
          <p className="text-xl font-bold text-[#C3B7F5] italic leading-relaxed">
            「アトリエを飛び出し、光を追いかけた。歴史、宗教、完璧さにNOを突きつけた若き画家たちの反逆。」
          </p>
        </div>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 印象派の誕生：すべては「1枚の酷評」から始まった</h2>
            <p className="mb-6 text-white/80">
              19世紀後半のフランス美術界は、「サロン（官展）」という国が主催する展覧会が絶対的な権力を握っていました。そこでの正解は「歴史画」や「宗教画」であり、筆跡を一切残さない、写真のように完璧でツルツルした絵画だけが高く評価されていたのです。
            </p>
            <p className="mb-6 text-white/80">
              これに疑問を抱いたモネ、ルノワール、ピサロ、ドガといった若い画家たちが、1874年に自分たちで独自の展覧会を開きます。
            </p>
            <p className="mb-6 text-white/80">
              そこにモネが出品したのが<strong>『印象・日の出（Impression, soleil levant）』</strong>でした。これを見た批評家が、<strong>「ただの『印象』しか残っていない、描きかけの未完成品だ！」</strong>と激しく馬鹿にしたことが、そのまま「印象派」という名前の由来になりました。彼らはその悪口を逆手に取り、自らを印象派と名乗るようになったのです。
            </p>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 印象派が起こした3つの大革命
            </h2>
            <p className="mb-6">彼らがこれほど叩かれたのは、それまでの美術のルールをすべて破壊したからです。</p>

            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5"/> ① 宗教や歴史ではなく「現代の日常」を描く
                </h3>
                <p>
                  それまでは「偉い神様や王様」を描くのが絵画でしたが、印象派は「今、自分たちの目の前にある現実」を描きました。休日のピクニック、カフェで談笑する人々、最新のテクノロジーだった蒸気機関車や駅の煙……。彼らにとって、現代の都市生活こそが最高にエキサイティングな被写体だったのです。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2 flex items-center gap-2">
                  <Paintbrush className="w-5 h-5"/> ② 黒を使わない「光の色彩」
                </h3>
                <p>
                  「物には決まった色（固有色）などない。すべては光の反射で見えているだけだ」と彼らは気づきました。そのため、それまでの絵画で「影」を表現するために使われていた「黒」の絵の具をパレットから排除しました。モネたちの描く影は、青や紫、あるいは周囲の光が反射した複雑な色で表現されています。
                </p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2 flex items-center gap-2">
                  <Sun className="w-5 h-5"/> ③ アトリエを飛び出し、屋外で描く（外光派）
                </h3>
                <p>
                  それまでは室内（アトリエ）にこもって、計算された光の中で絵を描くのが普通でした。しかし、刻一刻と変わる太陽の光を捉えるため、彼らはキャンバスを担いで外へ飛び出しました。これを可能にしたのが、当時発明されたばかりの「チューブ入りの絵の具」です。このテクノロジーがなければ、印象派は生まれんでした。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 印象派の主要メンバー：個性豊かな4巨匠</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img src="/impressionism-monet.png" alt="クロード・モネ" className="w-full h-auto rounded-xl shadow-lg border-2 border-white/10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FFC2D1] mb-2">クロード・モネ（光の追跡者）</h3>
                  <p className="text-white/80 leading-relaxed">
                    印象派のリーダー。風景、海、そして睡蓮。徹底的に「光と空気の変化」を追い続けた、最も印象派らしい画家。
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-6 items-start bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img src="/impressionism-renoir.png" alt="オーギュスト・ルノワール" className="w-full h-auto rounded-xl shadow-lg border-2 border-white/10" />
                </div>
                <div className="text-left md:text-right">
                  <h3 className="text-2xl font-bold text-[#B3E5FC] mb-2">オーギュスト・ルノワール（幸福の画家）</h3>
                  <p className="text-white/80 leading-relaxed">
                    木漏れ日を浴びる美しい女性や、楽しそうな人々を描いた。「絵画は不愉快なものではなく、美しく楽しいものであるべきだ」という信念の持ち主。
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img src="/impressionism-degas.png" alt="エドガー・ドガ" className="w-full h-auto rounded-xl shadow-lg border-2 border-white/10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FFE5A0] mb-2">エドガー・ドガ（都会の観察者）</h3>
                  <p className="text-white/80 leading-relaxed">
                    バレエの踊り子や競馬場を好んで描いた。光よりも、写真のような「一瞬の独特な構図」や「都会の光と影」を鋭く切り取るのが得意。
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-6 items-start bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img src="/impressionism-pissarro.png" alt="カミーユ・ピサロ" className="w-full h-auto rounded-xl shadow-lg border-2 border-white/10" />
                </div>
                <div className="text-left md:text-right">
                  <h3 className="text-2xl font-bold text-[#B8F3D8] mb-2">カミーユ・ピサロ（印象派の父）</h3>
                  <p className="text-white/80 leading-relaxed">
                    メンバーの中で最年長。唯一、全8回の印象派展すべてに出品し、若い画家たちの相談役となった温厚な人格者。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#C3B7F5] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              4. 豆知識：日本の「浮世絵」が彼らを支えた？（ジャポニスム）
            </h2>
            <p className="mb-4 text-white/80">
              当時、日本からヨーロッパへ輸出される陶磁器の「梱包材（クッション材）」として、大量の浮世絵（葛飾北斎や歌川広重など）が渡っていました。これを見た印象派の画家たちは腰を抜かします。
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-[#C3B7F5] font-medium bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
              <li>「影がないのに立体感がある！」</li>
              <li>「画面の端で人物が大胆に切り取られている！（斬新な構図）」</li>
              <li>「遠近法が独特で面白い！」</li>
            </ul>
            <p className="text-white/80">
              モネが自宅に日本庭園を作ったのも、このジャポニスム（日本ブーム）の真っ只中にいたからです。印象派の革新的な構図や明るい色彩は、日本の浮世絵から大きなインスピレーションを受けていたのです。
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">現代でのアート的立ち位置</h2>
            <p className="mb-6 text-white/80">
              現代では「クラシックで上品な絵画」として美術館の目玉になっていますが、その本質は「固定概念へのカウンター（反逆）」でした。この印象派が「形を崩して光を描いた」からこそ、その後のゴッホやゴーギャン（ポスト印象派）、さらにはピカソ（キュビスム）といった、20世紀の「モダンアート（現代美術）」の扉が開かれることになります。
            </p>

            <div className="mt-8 bg-[#1B2B44] p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-6">レーダーチャート：印象派総合分析</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="#ffffff40" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff', fontSize: 13 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#ffffff80' }} />
                    <Radar
                      name="印象派"
                      dataKey="A"
                      stroke="#FFD6A5"
                      fill="#FFD6A5"
                      fillOpacity={0.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70 max-w-2xl mx-auto">
                <li><strong>革新性（反逆度）：5</strong> 当時の国家お墨付きルールを全て破壊したアート界のパンクロック</li>
                <li><strong>色彩の明るさ：5</strong> パレットから黒を追放し、キャンバスを光で満たした</li>
                <li><strong>親しみやすさ：4</strong> テーマが日常や風景なので現代では大人気だが、当時は理解されず星3レベルだった</li>
                <li><strong>写実性（リアル度）：2</strong> 写真のような精密さではなく、あえて筆跡を残して「一瞬の印象」を捉えるアプローチ</li>
                <li><strong>歴史的影響力：5</strong> この運動がなければ、ゴッホもピカソも生まれなかったモダンアートの起点</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
