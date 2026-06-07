import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Shield } from 'lucide-react';

export function Knights() {
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
          円卓の騎士と騎士道精神
        </h1>
        <p className="text-xl text-white/80 mb-12">アーサー王伝説の中核をなす「円卓の騎士」。それは単なる軍事組織ではなく、当時のヨーロッパが夢見た「理想の社会」の雛形でもありました。騎士たちが命を懸けて守ろうとした精神と、その中心人物たちを深く掘り下げます。</p>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          {/* Round Table */}
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFD6A5]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 「円卓（Round Table）」が象徴する革命的平等の理念</h2>
            <p className="mb-6 text-white/80">
              キャメロットの城に置かれた巨大な円卓。これには、当時の封建社会では考えられないほど先進的な意味が込められていました。
            </p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFD6A5] block mb-1">上下関係の排除：</strong>
                通常、長方形のテーブルでは「上座」と「下座」が生まれますが、円卓には端がありません。これは、王の前では全ての騎士が対等であり、序列による争いを防ぐための知恵でした。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FFD6A5] block mb-1">「空席（シージ・ペリラス）」の緊張感：</strong>
                円卓には13番目の席として、選ばれし聖杯の騎士以外が座ると命を落とすという「危難の席」が用意されていました。これは、現状に甘んじることなく常に「高潔さ」を追求し続けるための聖なる装置でした。
              </li>
            </ul>
          </section>

          {/* Chivalry */}
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FFC2D1]">
            <h2 className="text-3xl font-bold text-white mb-6">2. 騎士道精神（Chivalry）：鉄の規律と魂の誇り</h2>
            <p className="mb-6 text-white/80">
              円卓の騎士たちは、毎年「ペンテコスト（五旬節）」の祝祭に集まり、以下の誓いを立てたとされています。
            </p>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 mb-6">
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3"><Shield className="text-[#FFC2D1] w-5 h-5 flex-shrink-0" /> 弱者の保護：婦人や孤児、虐げられた人々を助けること。</li>
                <li className="flex items-center gap-3"><Shield className="text-[#FFC2D1] w-5 h-5 flex-shrink-0" /> 誠実と信義：決して裏切らず、不当な戦いには加わらないこと。</li>
                <li className="flex items-center gap-3"><Shield className="text-[#FFC2D1] w-5 h-5 flex-shrink-0" /> 慈悲：降伏した敵には情けをかけること。</li>
              </ul>
            </div>
            <p>
              これは、野蛮な暴力の時代だった中世において、「力は正義のために使われるべきである」という画期的な倫理観を提示したものでした。
            </p>
          </section>

          {/* Knights Portraits */}
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 主要な騎士たちの肖像：個性豊かな英雄たち</h2>
            
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B3E5FC] mb-2">ランスロット（Lancelot du Lac） — 最強と苦悩の騎士</h3>
                <p className="mb-2">「湖の騎士」と呼ばれ、武勇・礼節ともに右に出る者はいない円卓の第1席。</p>
                <p className="text-sm text-white/70"><strong>光と影：</strong> アーサー王の無二の親友でありながら、王妃グィネヴィアとの禁断の愛に溺れます。最強でありながら「裏切り者」という十字架を背負う彼の姿は、人間の弱さと美しさを同時に象徴しています。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">ガウェイン（Gawain） — 忠義と太陽の騎士</h3>
                <p className="mb-2">アーサー王の甥であり、円卓の柱石。</p>
                <p className="text-sm text-white/70"><strong>太陽の加護：</strong> 朝から正午にかけて力が3倍になるという魔術的な性質を持っていました。非常に義理堅く、一族の誇りを何よりも重んじますが、それゆえにランスロットとの対立が激化した際には、破滅の道を選んでしまう悲劇性を備えています。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-2">パーシヴァル（Percival） — 純真無垢なる聖杯の騎士</h3>
                <p className="mb-2">森で世間を知らずに育った「汚れなき愚者」。</p>
                <p className="text-sm text-white/70"><strong>聖杯への到達：</strong> その純粋さゆえに、他の百戦錬磨の騎士たちが失敗した「聖杯探索」において、重要な役割を果たします。騎士道が「武力」から「精神的・宗教的な高潔さ」へと昇華していく過程を体現するキャラクターです。</p>
              </div>
            </div>
          </section>

          {/* Modern Influence */}
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#C3B7F5]">
            <h2 className="text-3xl font-bold text-white mb-6">4. 現代への影響：なぜ「円卓」は選ばれ続けるのか</h2>
            <p className="mb-6 text-white/80">現代のファンタジーやゲームにおいて、組織のトップたちが円卓に集まる描写は定番となっています。</p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#C3B7F5] block mb-1">「究極のチーム」の代名詞：</strong>
                個性の強いプロフェッショナルたちが、一つの理念のもとに集結する「円卓」の構造は、アベンジャーズのようなヒーローチームの原型となりました。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#C3B7F5] block mb-1">クエスト（探索）の文化：</strong>
                騎士たちがそれぞれの使命を持って旅立つスタイルは、現代のRPGにおける「メインクエスト」や「サイドストーリー」の構成に直接的な影響を与えています。
              </li>
            </ul>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70">
            <h3 className="text-lg font-bold text-white mb-2">💡 豆知識：円卓は何人座れた？</h3>
            <p>資料によって異なりますが、12人という説から、150人、あるいは1,600人という壮大な説まであります。しかし、重要なのは人数ではなく、「そこに座る者すべてが王の友である」という点にありました。</p>
          </section>

        </div>
      </div>
    </div>
  );
}
