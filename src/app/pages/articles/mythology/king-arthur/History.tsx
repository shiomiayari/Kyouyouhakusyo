import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Search } from 'lucide-react';

export function History() {
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
          アーサー王伝説の歴史的背景
        </h1>
        <p className="text-xl text-white/80 mb-12">これまで見てきた華やかな魔法や騎士道のドラマから、一気に「現実の歴史」へと視点を移します。私たちが知っているアーサー王は、一体どこまでが真実で、どこからがフィクションなのか。歴史の闇に埋もれた「実在のアーサー」の正体と、この物語が1000年かけて巨大な神話へとビルドアップされた背景を紐解きます。</p>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">1. 歴史上の実在のアーサーはいたのか？：暗黒時代の「影」を追う</h2>
            <p className="mb-6 text-white/80">結論から言うと、現代の歴史学・考古学において、<strong>「私たちがイメージするような、金の王冠を被りキャメロット城に君臨したアーサー王」は実在しません。</strong></p>
            <p className="mb-6 text-white/80">しかし、物語のベースとなった「モデルの人物（あるいは複数の英雄の融合体）」は確実に存在したと考えられています。</p>
            
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B8F3D8] block mb-1">時代背景（西暦500年前後）：</strong>
                当時のブリテン島は、ローマ帝国が撤退したことで大混乱に陥っていました。そこへ、海を渡ってアングロ・サクソン人（ドイツ系の蛮族）が容赦なく侵略してきます。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B8F3D8] block mb-1">「軍事指導者」としてのアーサー：</strong>
                この絶望的な状況の中で、先住民であるブリトン人（ケルト系）を率いて立ち上がり、サクソン人の侵略を激しく食い止めた「屈強な戦士（将軍）」がいました。初期の歴史文献には「王（Rex）」ではなく、<strong>「戦いの指揮官（Dux Bellorum）」</strong>としてその名が登場します。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B8F3D8] block mb-1">バドニクス山の戦い：</strong>
                彼が率いる軍勢は、サクソン人を相手に歴史的な大勝利を収め、ブリテン島に数十年の平和をもたらしました。この「奇跡の勝利を収めた指揮官」の記憶が、のちのアーサー王の種火となったのです。
              </li>
            </ul>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 伝説の進化論：ケルト神話から中世ロマンス文学へ
            </h2>
            <p className="mb-6">アーサー王伝説は、数百年かけてヨーロッパ全土のクリエイターたちによって「二次創作」され、巨大化していったコンテンツです。その進化のステップは大きく3つに分かれます。</p>
            
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border-l-4 border-[#FFD6A5]">
                <h3 className="text-xl font-bold text-white mb-2">【ステップ①：ケルト神話の時代（5〜11世紀）】</h3>
                <p>始まりは、ウェールズ地方などのケルト系民族の間で語り継がれた口承文学（吟遊詩人の歌）です。この頃のアーサーは、洗練された騎士ではなく、「魔物や巨人を退治する、荒々しいケルトの半神ヒーロー」でした。仲間の騎士たちも、超能力や魔法を使う、かなり原始的でファンタジー色の強いキャラクターとして描かれていました。</p>
              </div>
              <div className="bg-[#1B2B44] p-6 rounded-2xl border-l-4 border-[#FFC2D1]">
                <h3 className="text-xl font-bold text-white mb-2">【ステップ②：歴史書としての体系化（12世紀）】</h3>
                <p>1136年頃、ウェールズの聖職者ジェフリー・オブ・モンマスが『ブリタニア列王史』を執筆します。彼はケルトの伝承を都合よくブレンドし、「アーサーはかつてヨーロッパ全土を征服し、ローマ帝国とも互角に戦った偉大なイギリスの初代国王である」という<strong>偽の歴史を作り上げました</strong>。これが当時のヨーロッパ中で大ベストセラーとなり、アーサーは一気に「歴史上の大英雄」としての地位を確立します。</p>
              </div>
              <div className="bg-[#1B2B44] p-6 rounded-2xl border-l-4 border-[#C3B7F5]">
                <h3 className="text-xl font-bold text-white mb-2">【ステップ③：フランスの「ロマンス文学」への変貌（12〜13世紀）】</h3>
                <p>伝説がフランスに伝わると、当時の最先端トレンドだった<strong>「騎士道（チヴァリー）」</strong>や<strong>「宮廷愛（貴婦人への至上の愛）」</strong>の要素が大量にトッピングされます。</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-white/80">
                  <li>クレティアン・ド・トロワなどのフランスの詩人たちが、「円卓」「ランスロット」「聖杯探索」といった、私たちが大好きな設定をこのタイミングで次々と発明・追加しました。</li>
                  <li>ここで、泥臭いケルトの戦士だったアーサーは、非の打ち所がない高潔な「中世の理想の王」へと完全にアップデートされたのです。</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">3. なぜ、これほどまでに伝説は求められたのか？</h2>
            <p className="mb-4 text-white/80">歴史的背景から見ると、アーサー王伝説は常に「政治的なプロパガンダ（宣伝）」として利用されてきました。</p>
            <p className="text-white/80">
              のちにブリテン島を征服したノルマン朝の王たちは、「自分たちは、あの偉大なアーサー王の正当な後継者である」と主張することで、自らの統治の正当性をアピールしようとしたのです。つまり、国家のプライドと、人々の「理想の王に統治されたい」という願望が、この伝説を1000年以上生き長らえさせ、磨き上げさせた最大の原動力でした。
            </p>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70 flex flex-col items-center gap-4">
            <Search className="w-8 h-8 text-[#FFD6A5]" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">💡 豆知識：アーサー（Arthur）という名の語源</h3>
              <p>諸説ありますが、ケルト語で<strong>「熊（Art）」</strong>、またはラテン語の家名<strong>「アルトリウス（Artorius）」</strong>に由来すると言われています。「熊のように強靭な男」というイメージは、まさに暗黒時代を荒々しく駆け抜けた戦士にふさわしい名前です。</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
