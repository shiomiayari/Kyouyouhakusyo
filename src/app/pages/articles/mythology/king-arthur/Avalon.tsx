import { Link } from 'react-router';
import { ChevronLeft, Sparkles, Droplet } from 'lucide-react';

export function Avalon() {
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
          王の最期とアヴァロンの島
        </h1>
        <p className="text-xl text-white/80 mb-12">アーサー王伝説のすべてが収束する、あまりにも切なく、そして神話的な終幕「王の最期とアヴァロンの島」。栄華を誇ったキャメロットが崩壊し、大陸での内戦を経て、物語はブリテンの地での最終決戦へと向かいます。王の死と、今なお語り継がれる「希望」の伝説を深掘りします。</p>

        <div className="space-y-12 text-white/90 leading-relaxed text-lg">
          
          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#FF4D4D]">
            <h2 className="text-3xl font-bold text-white mb-6">1. カムランの戦い（Battle of Camlann）：すべてが滅びゆく戦場</h2>
            <p className="mb-6 text-white/80">ランスロットとの内戦によって円卓の騎士たちが激減し、国が疲弊した絶望的なタイミングで、最後の戦いは幕を開けました。</p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FF4D4D] block mb-1">宿敵モードレッドの反逆：</strong>
                アーサー王がフランスへ遠征している隙を突き、王の不義の息子（または甥）である<strong>モードレッド</strong>が王位を簒奪、王妃グィネヴィアを我が物にしようと反乱を起こします。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FF4D4D] block mb-1">偶然が招いた地獄：</strong>
                両軍が対峙し、和平交渉が行われようとしたその時、一人の騎士が足元のアスピス（毒蛇）を抜くために剣を抜きました。その剣のきらめきを「戦闘開始の合図」と誤認した両軍が突撃し、凄惨な殺し合いが始まってしまいます。運命の皮肉によって、破滅へのカウントダウンは止められなくなりました。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#FF4D4D] block mb-1">円卓の終焉：</strong>
                かつて世界を救った英雄たちは次々と討ち死にし、戦場は死体の山と化しました。残されたのは、瀕死のアーサー王と、忠臣ベディヴィエール（またはルカン）、そして反逆者モードレッドだけでした。
              </li>
            </ul>
          </section>

          <section className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <h2 className="text-2xl font-bold text-[#FFD6A5] mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              2. 宿敵との決着：因縁の親子対決
            </h2>
            <p className="mb-6">アーサー王は、槍（ロンゴミニアド）を構えてモードレッドに突撃します。</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">肉体を引き換えにした一撃</h3>
                <p>王の槍はモードレッドの身体を深く貫きます。しかし、モードレッドは死に際、自らの身体に突き刺さった槍をさらに奥へと押し込み、刃の届く距離まで肉薄して、アーサー王の兜を叩き割り、脳天に致命傷を負わせました。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FFD6A5] mb-2">血の呪いの成就</h3>
                <p>かつて父ウーサーが犯した罪、そしてアーサー自身が若き日に犯した過ち（モーガンらとの間にモードレッドを設けた血の因縁）が、そのまま「自らの息子によって殺される」という形で完結したのです。</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B3E5FC]">
            <h2 className="text-3xl font-bold text-white mb-6">3. 聖剣の返還：エクスカリバーの最後</h2>
            <p className="mb-6 text-white/80">致命傷を負ったアーサー王は、生き残った忠臣（主にベディヴィエール）に、聖剣エクスカリバーを湖に投げ入れるよう命じます。</p>
            <ul className="space-y-4">
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10">
                <strong className="text-[#B3E5FC] block mb-1">未練との戦い：</strong>
                これほどの至宝を捨てるに忍びないと、ベディヴィエールは2度も王を欺き、剣を隠します。しかし、すべてを見抜いていた王に叱責され、3度目にようやく剣を湖へと投げ込みました。
              </li>
              <li className="bg-[#1B2B44] p-4 rounded-xl border border-white/10 flex items-start gap-4">
                <Droplet className="w-8 h-8 text-[#B3E5FC] flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-[#B3E5FC] block mb-1">湖の乙女の手：</strong>
                  剣が水面に落ちる直前、湖の中から一本の白い腕が現れ、エクスカリバーを空中で受け止めました。腕は剣を3度振ったあと、静かに水底へと消えていきました。これにより、アーサーが受けていた「王の資格」と「魔法の加護」の時代が完全に終わったのです。
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-3xl border-l-4 border-[#B8F3D8]">
            <h2 className="text-3xl font-bold text-white mb-6">4. アヴァロンの島：いつか戻る王（The Once and Future King）</h2>
            <p className="mb-6 text-white/80">聖剣が還された直後、湖の霧の向こうから、黒い喪服を着た美しい女王（モーガン・ル・フェイたち）が乗った一艘の小舟が現れます。</p>
            <div className="space-y-6">
              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#B8F3D8] mb-2">常世の国への旅立ち</h3>
                <p className="text-sm text-white/70">王は女王たちに抱きかかえられ、傷を癒やすための伝説の島「アヴァロン（リンゴの島）」へと連れ去られていきました。</p>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFE5A0] mb-2">「未来の王」という希望</h3>
                <p className="mb-4">アーサー王の墓碑には、こう刻まれていると伝えられています。</p>
                <blockquote className="bg-[#2A3B5A] p-4 rounded-lg border-l-4 border-[#FFE5A0] text-[#FFE5A0] italic">
                  「ここに、かつての王、そして未来の王アーサーが眠る（Hic iacet Arthurus, rex quondam, rexque futurus）」
                </blockquote>
              </div>

              <div className="bg-[#1B2B44] p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#FFC2D1] mb-2">救世主伝説の完成</h3>
                <p className="text-sm text-white/70">彼は死んだのではなく、世界の果てで眠りについているだけであり、ブリテンが本当の危機に陥った時、再び聖剣を携えて戻ってくる――。この「再臨の予言」があるからこそ、アーサー王伝説はただの悲劇に終わらず、人々に永遠の希望を与える「生きた神話」として、現代まで語り継がれることになりました。</p>
              </div>
            </div>
          </section>

          <section className="bg-[#1B2B44] p-6 rounded-2xl border-2 border-white/20 text-center text-white/70">
            <h3 className="text-lg font-bold text-white mb-2">💡 豆知識：アヴァロンは実在する？</h3>
            <p>イギリスの南部にある聖地「グラストンベリー」は、かつて周囲が湿地帯であり、島のように見えたことから「アヴァロンの島」のモデルとされています。12世紀には、この地から「アーサー王とグィネヴィアの骨」とされるものが発掘されたという記録もあり、歴史とロマンが今も交錯する場所です。</p>
          </section>

        </div>
      </div>
    </div>
  );
}
