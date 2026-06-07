import { Link } from 'react-router';
import { ChevronLeft, Sparkles, CupSoda } from 'lucide-react';

export function HolyGrail() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-16 pt-12 px-6 sm:px-8 lg:px-12 bg-[#1B2B44]">
      <div className="max-w-4xl mx-auto text-white">
        <Link to="/article/mythology/king-arthur" className="inline-flex items-center gap-2 text-[#FFD6A5] hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-5 h-5" />
          アーサー王伝説の深淵に戻る
        </Link>
        
        <div className="inline-block px-4 py-2 bg-[#FFD6A5] text-[#1B2B44] rounded-full mb-4 font-bold text-sm">
          アーサー王伝説
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
          聖杯探索（聖杯伝説）
        </h1>
        <p className="text-xl text-white/80 mb-12">アーサー王伝説において最も神秘的で、かつ物語の次元を「武力」から「霊性」へと引き上げたのが「聖杯探索（せいはいたんさく）」です。単なるアイテム探し（宝探し）ではなく、騎士たちが自らの魂の汚れと向き合い、真の救済を求めるこのエピソードを深掘りします。</p>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFE5A0]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 聖杯（Holy Grail）とは何か：謎に満ちた至宝</h2>
            <p className="mb-6 text-white/80">聖杯の正体については、時代や文献によっていくつかの解釈がありますが、一般的には以下の二つが融合したものとされています。</p>
            <ul className="space-y-4 mb-6">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFE5A0] block mb-1">キリスト教的解釈：</strong>
                最後の晩餐でキリストが使い、のちに十字架にかけられたキリストの血を受けたといわれる杯。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFE5A0] block mb-1">ケルト神話的解釈：</strong>
                決して尽きることのない食べ物や飲み物を供する「魔法の釜」や「豊穣の角」。
              </li>
            </ul>
            <div className="bg-[#FFC2D1]/10 p-4 rounded-xl border border-[#FFC2D1]/30 text-center">
              <p className="text-[#FFC2D1] font-medium">伝説の中では、聖杯は「天上の光を放ち、病を癒やし、見る者に至高の恍惚を与える奇跡の象徴」として描かれます。</p>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. なぜ騎士たちは聖杯を求めたのか
            </h2>
            <p className="mb-6">ある祝祭の夜、キャメロットの円卓に光り輝く聖杯が幻影として現れました。これを目撃した騎士たちは、その実物を手に入れるために旅立ちます。しかし、彼らを突き動かしたのは単なる好奇心ではありませんでした。</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">キャメロットの閉塞感</h3>
                <p>当時の円卓は、ランスロットと王妃の不倫など、内側から腐敗が始まっていました。聖杯は、その精神的な危機を打破するための「究極の清浄」として求められたのです。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">王の病と王国の荒廃</h3>
                <p>伝説の一つ（漁夫王の物語）では、聖杯を守る王が癒えない傷を負い、その結果として国土が「荒れ地（Wasteland）」になったとされます。聖杯を見つけ出すことは、<strong>王と国土を再生させるための唯一の手段</strong>でした。</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 哲学的・宗教的解釈：変容の物語</h2>
            <p className="mb-6 text-white/80">聖杯探索は、物理的な旅である以上に「魂の巡礼」でした。</p>
            
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-2">自己の限界と直面する「鏡」</h3>
                <p className="text-sm text-white/70">聖杯探索において、剣の腕前は何の役にも立ちません。最強の騎士ランスロットでさえ、不倫の罪ゆえに聖杯を目の当たりにしながらも、それを手に入れることは拒まれました。聖杯は「持ち主の内面を映し出す鏡」であり、不完全な人間（騎士）が自分の罪や慢心とどう向き合うかを試す装置なのです。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B3E5FC] mb-2">救済と「聖なる愚者」</h3>
                <p className="mb-4">聖杯に到達できたのは、完璧な騎士ではなく、<strong>パーシヴァル</strong>や<strong>ガラハッド</strong>といった「純真無垢な者」でした。</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><strong>パーシヴァル：</strong> 無知であるがゆえの純粋さ（聖なる愚者）が、理屈を超えて真理に到達する。</li>
                  <li><strong>ガラハッド：</strong> 汚れを一切知らない「完璧な聖性」の体現。</li>
                </ul>
                <p className="mt-4 text-sm text-white/70">これは、「力（剣）」によって支配する世界が終わり、<strong>「愛と謙虚さ」によってのみ救済が得られる</strong>という、中世キリスト教的な価値観への転換を示しています。</p>
              </div>
            </div>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#C3B7F5] mb-4">4. 現代への影響：メタファーとしての「グリエール」</h2>
            <p className="mb-4">現代において「Holy Grail」という言葉は、ビジネスや科学の分野で「究極の目標」「至高の難問」という意味で使われます。</p>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li><strong>終わりのない探求：</strong> 聖杯探索の物語が、最終的に「騎士たちの離散」を招くように、究極を求める旅は時に日常の崩壊を伴います。</li>
              <li><strong>クエスト（探求）の本質：</strong> 現代のオープンワールドゲームなどで、プレイヤーが広大な世界を放浪し、自身の成長（変容）を経験する構造の原形は、この「聖杯探索」にあります。</li>
            </ul>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70">
            <h3 className="text-lg font-bold text-white mb-2">💡 豆知識：聖杯と「問い」</h3>
            <p>パーシヴァルが聖杯の城を訪れた際、彼は「王はなぜ苦しんでいるのか」という「問い」を発することを禁じられたために、一度失敗します。「ただ見るだけでなく、他者の苦しみに気づき、問うこと」が救済の鍵であるというこの描写は、現代のコミュニケーションやケアの哲学にも通じる深い教訓を含んでいます。</p>
          </section>

        </div>
      </div>
    </div>
  );
}
