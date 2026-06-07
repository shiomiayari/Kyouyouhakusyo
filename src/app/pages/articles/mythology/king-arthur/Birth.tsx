import { Link } from 'react-router';
import { ChevronLeft, Sparkles } from 'lucide-react';

export function Birth() {
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
        <h1 className="text-4xl md:text-5xl font-black mb-12 text-white leading-tight">
          アーサー王の誕生と「剣」の伝説
        </h1>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          {/* Uther Pendragon */}
          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              ウーサー・ペンドラゴンの野望
            </h2>
            <p className="mb-4">
              物語は、アーサーの父であるブリテン王<strong>ウーサー・ペンドラゴン</strong>の禁断の恋から始まります。ウーサーは家臣の妻であるイグレインに横恋慕し、魔術師<strong>マーリン</strong>に助けを求めました。
            </p>
            <p>
              マーリンは「生まれてくる子供を自分に預けること」を条件に、魔術でウーサーをイグレインの夫の姿に変身させます。この欺瞞に満ちた一夜に宿った命が、のちのアーサー王です。
            </p>
          </section>

          {/* Merlin */}
          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#B8F3D8] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              魔法使いマーリンの意図
            </h2>
            <p className="mb-4">
              アーサーが誕生すると、マーリンは約束通り赤子を連れ去り、正体を伏せたまま忠実な騎士エクター卿に預けました。
            </p>
            <p>
              マーリンがこれほどまでにアーサーの素性を隠したのは、王位継承を巡る暗殺から守るためであると同時に、彼を「血筋」ではなく「実力と運命」によって王に導くための壮大な計画の一部でもありました。
            </p>
          </section>

          {/* Sword in the Stone */}
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6">「選定の剣」：石に刺さった剣の伝説</h2>
            <p className="mb-6 text-white/80">
              ウーサー王が亡くなり、ブリテンが後継者争いで混乱に陥った際、ロンドンの教会の前に突如として「石（あるいは金床）に刺さった剣」が現れました。
            </p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">刻まれた碑文：</strong>
                剣の根元には「この剣を抜き得た者こそ、全ブリテンの正当なる王である」と黄金の文字で刻まれていました。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">奇跡の瞬間：</strong>
                名だたる騎士たちが挑戦してもびくともしなかったその剣を、当時まだ義兄の従者（スクワイア）に過ぎなかった若きアーサーが、無造作に引き抜いてしまいます。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">王の証明：</strong>
                これこそが「選定の剣（ソード・イン・ザ・ストーン）」であり、アーサーが神と運命に選ばれた真の王であることを民衆に知らしめる決定的な事件となりました。
              </li>
            </ul>
          </section>

          {/* Excalibur */}
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">「エクスカリバー」の正体：湖の乙女との契約</h2>
            <p className="mb-6 text-white/80">
              多くの人が「石から抜いた剣」をエクスカリバーだと思いがちですが、伝説の多くでは、エクスカリバーは後から手に入れた「二本目の剣」として描かれています。
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#B3E5FC] mb-2">湖の乙女より授かりし聖剣</h3>
              <p>選定の剣を戦いの中で折ってしまったアーサーに、マーリンは湖へと向かうよう助言します。そこで湖面から突き出た腕が掲げていたのが、真の聖剣<strong>エクスカリバー</strong>です。アーサーは「湖の乙女」と契約を交わし、この剣を手にしました。</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#B3E5FC] mb-2">剣と「鞘（さや）」の秘密</h3>
              <p className="mb-4">エクスカリバーはその鋭さでどんな鎧も切り裂きますが、実は「鞘」にこそ真の魔力が宿っていました。</p>
              <ul className="space-y-4">
                <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                  <strong className="text-[#B3E5FC] block mb-1">不老不死の加護：</strong>
                  この鞘を身につけている限り、アーサーはどれほど深い傷を負っても出血することがなく、死に至ることはありません。
                </li>
                <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                  <strong className="text-[#B3E5FC] block mb-1">悲劇の伏線：</strong>
                  のちにアーサーはモーガン・ル・フェイの策略によってこの鞘を盗まれてしまいます。最強の加護を失ったことが、彼の最後（カムランの戦い）の敗北へと繋がっていくのです。
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70">
            <h3 className="text-lg font-bold text-white mb-2">💡 豆知識：エクスカリバーの語源</h3>
            <p>エクスカリバーの名は、ケルト語の「カレドヴルッフ（固い切り口）」に由来すると言われています。文字通り、岩をも断つ「最強の硬度」を持った剣という意味が込められています。</p>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70">
            <h3 className="text-lg font-bold text-white mb-2">🎮 現代での解釈</h3>
            <p>ゲームやアニメでは、この「石から抜いた剣（カリバーン）」と「湖で授かった剣（エクスカリバー）」を明確に使い分けたり、あるいは同一視したりと、作品によって多様なアレンジが加えられています。</p>
          </section>

        </div>
      </div>
    </div>
  );
}
