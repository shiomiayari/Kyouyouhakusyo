import { Link } from 'react-router';
import { ChevronLeft, Sparkles } from 'lucide-react';

export function Camelot() {
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
          キャメロットと悲劇の人間模様
        </h1>
        <p className="text-xl text-white/80 mb-12">アーサー王伝説が単なる英雄譚に留まらず、何世紀もの間、世界中で愛され続ける偉大な「古典」となった最大の要因。それは、理想の王国キャメロットの内側で渦巻く<strong>愛と裏切りの人間模様</strong>にあります。栄華の絶頂から崩壊へと向かう、主要人物たちの複雑な相関図を深掘りします。</p>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 禁断の愛：ランスロットとグィネヴィア</h2>
            <p className="mb-6 text-white/80">キャメロットの崩壊は、外敵の侵略ではなく、内側の「愛」という名の亀裂から始まりました。</p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">忠誠と情熱の板挟み：</strong>
                ランスロットはアーサー王に命を捧げた「最高の騎士」であり、グィネヴィアは「最愛の王妃」でした。彼らが愛し合うことは、王に対する最大の裏切りであると同時に、彼らが信奉する騎士道精神（忠誠）そのものの自己否定を意味しました。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">理想の矛盾：</strong>
                ランスロットは王妃を守るために戦うほど騎士としての名声を高めますが、その実態は不倫であり、高潔な理想（円卓の精神）を内側から腐らせる毒となってしまいます。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFC2D1] block mb-1">露呈する秘密と決裂：</strong>
                敵対する騎士たちの策略により二人の関係が白日の下に晒された際、アーサー王は国の法に則り、王妃を火刑に処さざるを得なくなります。これをランスロットが力ずくで救出したことで、円卓の騎士たちは王派とランスロット派に完全分裂。かつての親友たちが殺し合う、決定的な破滅へと突き進みました。
              </li>
            </ul>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#C3B7F5] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 運命の敵：モーガン・ル・フェイの執念
            </h2>
            <p className="mb-6">物語の「影」を司り、キャメロットの破滅を裏で加速させるのが、アーサーの異父姉であり強力な魔術師の<strong>モーガン・ル・フェイ</strong>です。</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#C3B7F5] mb-2">愛憎の交錯</h3>
                <p>彼女はアーサーを陥れるために暗躍しますが、その動機は単なる悪意ではありません。父ウーサーが母イグレインを奪ったことへの一族の復讐心や、キリスト教化する世界で失われゆく「古き魔法（ケルトの異教）」の守護者としての矜持など、非常に複雑な背景があります。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C3B7F5] mb-2">「光」を暴く「闇」</h3>
                <p>彼女はランスロットとグィネヴィアの不倫関係を王に突きつけるために魔法のアイテム（真実を映す鏡や角杯）を送り込んだり、アーサーの命を守る「エクスカリバーの鞘」を盗み出したりします。彼女はキャメロットという「不自然なほど完璧な光」を、現実の醜悪さという「闇」に引きずり戻す役割を担っていました。</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 崩壊する「完璧な場所」キャメロット</h2>
            <p className="mb-6 text-white/80">「キャメロット」という場所は、平和、正義、勇気が共存する<strong>地上の楽園</strong>の象徴でした。</p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFD6A5] block mb-1">信頼の連鎖の崩壊：</strong>
                円卓の騎士たちは、互いへの絶対的な信頼で結ばれていました。しかし、ランスロットと王妃の事件をきっかけに、「親友を殺さねばならない」「家族の仇を討たねばならない」という血の復讐の連鎖が始まります。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFD6A5] block mb-1">悲劇の本質：</strong>
                全員が善人であり、全員が自らの信じる正義や愛（王への忠誠、友への義理、恋人への情熱）に従って行動した結果、愛する者同士が殺し合い、理想郷が焼け落ちる。この「誰も悪くないのに、すべてが壊れる」という圧倒的な悲劇性が、キャメロットの物語を唯一無二の文学にしています。
              </li>
            </ul>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70">
            <h3 className="text-lg font-bold text-white mb-2">💡 豆知識：ランスロットの苦悩と「発狂」</h3>
            <p>伝説の一部では、ランスロットは王妃との罪の意識、そして敬愛する王を裏切っているという引き裂かれるような絶望に耐えきれず、完全に正気を失って服を脱ぎ捨て、数年間も森を彷徨う「狂気」の時代を過ごしたと描かれています。世界最強の男が愛ゆえに最も惨めな姿を晒すこの描写は、のちのヨーロッパのロマン主義文学に多大な影響を与えました。</p>
          </section>

        </div>
      </div>
    </div>
  );
}
