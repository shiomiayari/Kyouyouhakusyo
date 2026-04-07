import { 
  Star, Sparkles, ArrowLeft, BookOpen, Crown, Building2, Map, Users, 
  Paintbrush, Bookmark, Flower2, ScrollText, Music, Info 
} from 'lucide-react';
import { Link } from 'react-router';

export function HeianCulture() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-16 bg-[#1B2B44]">
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-80 left-10 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>

      {/* Back Button */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A3B5A] text-white rounded-xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            ホームに戻る
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center border-b-2 border-white/10 pb-16">
          <div className="inline-block px-4 py-2 bg-[#C3B7F5] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            歴史と文化
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            平安時代の文化
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            源氏物語や枕草子をもっと楽しむための、煌びやかで深遠な平安時代の常識とルール。雅（みやび）な宮中生活の裏側を覗いてみましょう。
          </p>
        </div>
      </section>

      {/* 後宮の部屋 */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Building2 className="w-8 h-8 text-[#FFC2D1]" />
            後宮の部屋
          </h2>
          
          <div className="bg-[#2A3B5A] rounded-3xl p-8 border-2 border-white/20 mb-8 text-center">
            <img 
              src="/koukyuumap.jpg" 
              alt="内裏・後宮マップ" 
              className="max-w-full h-auto mx-auto rounded-xl shadow-xl border-4 border-white/10 mb-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="p-12 text-white/50 bg-[#1B2B44] rounded-xl border border-dashed border-white/20">画像 (koukyuumap.png) を public/ フォルダに配置してください</div>';
              }}
            />
            <p className="text-white/70 text-sm">平安京内裏の図（紫宸殿、清涼殿や後宮の殿舎）</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1B2B44] border-2 border-[#FFC2D1]/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#FFC2D1] mb-4 flex items-center gap-2">
                <Crown className="w-5 h-5" /> 1. 天皇の空間（中心・南部）
              </h3>
              <ul className="space-y-4 text-white/90">
                <li><strong className="text-white">紫宸殿（ししんでん）:</strong> 内裏の正殿。即位の礼や節会など、最も重要な公的儀式が行われる場所。</li>
                <li><strong className="text-white">清涼殿（せいりょうでん）:</strong> 天皇の日常の住まい。政務や儀式も行われ、政治の中心となった。</li>
                <li><strong className="text-white">仁寿殿（じじゅうでん）:</strong> 多目的に使われる儀式や宴の場。</li>
                <li><strong className="text-white">承香殿（じょうきょうでん）:</strong> 控室や后妃の居所。</li>
              </ul>
            </div>

            <div className="bg-[#1B2B44] border-2 border-[#B3E5FC]/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#B3E5FC] mb-4 flex items-center gap-2">
                <Flower2 className="w-5 h-5" /> 2. 後宮（北側の五舎七殿）
              </h3>
              <p className="text-white/80 mb-4 text-sm">后妃や女官たちが暮らすエリア。『源氏物語』などの舞台。</p>
              <ul className="space-y-3 text-white/90 text-sm line-clamp-none">
                <li><strong className="text-white">弘徽殿:</strong> 格式が最高クラス。権力者の娘が住む。</li>
                <li><strong className="text-white">飛香舎（藤壺）:</strong> 中庭に藤。中宮クラスが住む。</li>
                <li><strong className="text-white">凝華舎（梅壺）:</strong> 中庭に梅。</li>
                <li><strong className="text-white">昭陽舎（梨壺）:</strong> 中庭に梨。</li>
                <li><strong className="text-white">淑景舎（桐壺）:</strong> 桐壺更衣の住まいで有名。</li>
              </ul>
            </div>

            <div className="bg-[#1B2B44] border-2 border-[#B8F3D8]/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#B8F3D8] mb-4 flex items-center gap-2">
                <ScrollText className="w-5 h-5" /> 3. 実務・儀式の空間（東西）
              </h3>
              <ul className="space-y-4 text-white/90 text-sm">
                <li><strong className="text-white">温明殿:</strong> 三種の神器「八咫鏡」を奉安する賢所。</li>
                <li><strong className="text-white">校書殿:</strong> 文書整理、蔵人の詰所。</li>
                <li><strong className="text-white">安福殿:</strong> 薬の管理、医師の控室。</li>
                <li><strong className="text-white">綾綺殿:</strong> プライベートな宴会や舞の練習場。</li>
              </ul>
            </div>

            <div className="bg-[#1B2B44] border-2 border-[#FFE5A0]/30 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#FFE5A0] mb-4 flex items-center gap-2">
                <Map className="w-5 h-5" /> 4. その他象徴的なもの
              </h3>
              <ul className="space-y-4 text-white/90 text-sm">
                <li><strong className="text-white">蔵人所町屋:</strong> 天皇の秘書の事務室。</li>
                <li><strong className="text-white">右近の橘・左近の桜:</strong> 紫宸殿の前面に植えられている象徴的な樹木。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 名前の文化 */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#2A3B5A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Bookmark className="w-8 h-8 text-[#FFE5A0]" />
            名前についての文化
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#FFE5A0]/20 to-transparent p-6 rounded-2xl border border-[#FFE5A0]/30">
                <h3 className="text-2xl font-bold text-[#FFE5A0] mb-3">女性の名前は「隠される」もの</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  現代のように名前で自己アピールするのではなく、平安女性にとって本名は「自分を守るために隠すもの」でした。公式記録ですら「藤原為時の女（むすめ）」と書かれます。
                </p>
                <div className="space-y-2 text-white/80 bg-black/20 p-4 rounded-xl">
                  <p><strong>呼び方のバリエーション:</strong></p>
                  <ul className="list-disc list-inside ml-2">
                    <li>場所: 「西の対」「～の上の御方」</li>
                    <li>植物（部屋名）: 「藤壺」「桐壺」</li>
                    <li>親の役職（女房名）: 「式部」「少納言」</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#B3E5FC]/20 to-transparent p-6 rounded-2xl border border-[#B3E5FC]/30 h-full">
                <h3 className="text-2xl font-bold text-[#B3E5FC] mb-3">男性は「役職名」で呼ばれる</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  男性には実名（例: 藤原道長）がありましたが、日常的に実名で呼ぶことは失礼とされました。
                </p>
                <div className="space-y-2 text-white/80 bg-black/20 p-4 rounded-xl">
                  <p><strong>出世でコロコロ変わる名前:</strong></p>
                  <p className="text-sm">
                    「大納言」「中将」など役職で呼ぶのが基本。出世するたびに呼び名が変わるため、誰が誰かわかりづらいのが平安文学の特徴。同じ役職の人は「二条の摂政」のように場所を足して区別しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 儀式・階級 */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* 成人・入内 */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#C3B7F5]" />
              成人の儀式と入内
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#2A3B5A] p-6 rounded-2xl border border-white/10">
                <div className="inline-block px-3 py-1 bg-[#FFC2D1]/20 text-[#FFC2D1] rounded-full text-sm font-bold mb-3">女子（12〜15歳）</div>
                <h3 className="text-2xl font-bold text-white mb-4">裳着（もぎ）</h3>
                <ul className="space-y-3 text-white/80">
                  <li><strong>裳を腰に結ぶ:</strong> 後ろに引きずる装束「裳」を結び、大人の正装ができる身分になったことを示す。これ以降結婚可能に。</li>
                  <li><strong>腰結（こしゆい）:</strong> 紐を結ぶ役の男性。社会的地位の高い人が選ばれるほど、後ろ盾の強さをアピールできた。</li>
                  <li><strong>髪上げ:</strong> 垂れ髪を大人用に結い上げる。</li>
                </ul>
              </div>
              
              <div className="bg-[#2A3B5A] p-6 rounded-2xl border border-white/10">
                <div className="inline-block px-3 py-1 bg-[#B3E5FC]/20 text-[#B3E5FC] rounded-full text-sm font-bold mb-3">男子（12〜15歳）</div>
                <h3 className="text-2xl font-bold text-white mb-4">元服（げんぷく）</h3>
                <ul className="space-y-3 text-white/80">
                  <li><strong>加冠（かかん）:</strong> 子供の髪型を解き、大人の証である「冠」を初めて被る。</li>
                  <li><strong>理髪:</strong> 髪を剃り上げ、髻（もとどり）を作る。</li>
                  <li><strong>名前の変更:</strong> 幼名（牛若丸など）を捨て、成人としての実名（義経など）が与えられる。</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C3B7F5]/20 to-[#FFC2D1]/20 p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">入内（じゅだい）</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                公卿の娘が天皇の妃候補として宮中に入ること。現代の結婚とは違い、実家の命運を賭けた政治的な儀式でした。「宮仕え（事務職）」とは明確に区別されます。
              </p>
              <div className="bg-black/20 p-4 rounded-xl flex items-center gap-4 text-white/80 text-sm">
                <Info className="w-6 h-6 flex-shrink-0 text-[#FFE5A0]" />
                <p>夜に華麗な行列で内裏へ入り、天皇と三日間通い続ける「三日夜の餅」の儀式を経て、初めて正式な夫婦と認められました。</p>
              </div>
            </div>
          </div>

          {/* 妃の階級 */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Crown className="w-8 h-8 text-[#FFE5A0]" />
              后妃の階級（パワーバランス）
            </h2>
            <div className="overflow-x-auto bg-[#2A3B5A] rounded-2xl border border-white/20">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/30 text-white/90 border-b border-white/10">
                    <th className="p-4 rounded-tl-2xl">位</th>
                    <th className="p-4">名称</th>
                    <th className="p-4">人数</th>
                    <th className="p-4 rounded-tr-2xl">特徴・権力</th>
                  </tr>
                </thead>
                <tbody className="text-white/80 divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-[#FFE5A0]">最高位</td>
                    <td className="p-4 font-bold text-white">中宮・皇后</td>
                    <td className="p-4">各1名</td>
                    <td className="p-4">天皇の正妻。一族に絶大な権力をもたらす。※藤原道長は強引に「一帝二后」にした。</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-[#FFC2D1]">第2位</td>
                    <td className="p-4 font-bold text-white">女御（にょうご）</td>
                    <td className="p-4">複数</td>
                    <td className="p-4">大臣クラスの娘しかなれない。中宮への昇進候補。</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white/60">第3位</td>
                    <td className="p-4 font-bold text-white">更衣（こうい）</td>
                    <td className="p-4">複数</td>
                    <td className="p-4">中納言以下の娘。天皇の着替えを助ける役職が語源。天皇から溺愛されるといじめの的に。</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white/40">その他</td>
                    <td className="p-4 font-bold text-white">御息所（みやすんどころ）</td>
                    <td className="p-4">-</td>
                    <td className="p-4">元々は寝所に侍る女性の総称。後に皇子を生んだ妃を指すように。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </section>

      {/* 斎王・年中行事 */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#2A3B5A]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* 斎王 */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-[#FFC2D1]" />
              斎宮・斎王
            </h2>
            <div className="space-y-4">
              <div className="bg-[#1B2B44] p-6 rounded-2xl">
                <p className="text-white/90 leading-relaxed mb-4">
                  伊勢神宮や賀茂神社で神に仕えるため、天皇の代理として送られた未婚の皇女のことです。<br/>
                  伊勢の斎王とその役所・住まいの総称を<strong>「斎宮（さいぐう）」</strong>と呼びました。
                </p>
                <ul className="space-y-3 text-sm text-white/80 bg-black/20 p-4 rounded-xl">
                  <li><strong className="text-[#FFE5A0]">永遠の別れ？:</strong> 都を出る際、天皇が「別れの櫛」を差し「都を振り返るな」と告げました。</li>
                  <li><strong className="text-[#FFE5A0]">厳しい禁忌:</strong> 「仏」を「中子」、「経」を「染紙」と言い換えるなど忌み言葉があり、恋は絶対禁止でした。</li>
                  <li><strong className="text-[#FFE5A0]">解任条件:</strong> 天皇の退位や死、あるいは親族の不幸など。帰京後は婚期を逃しひっそり暮らすことが多かった。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 年中行事 */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <Star className="w-8 h-8 text-[#B8F3D8]" />
              年中儀式
            </h2>
            <div className="space-y-4 text-white/80">
              <p className="mb-4">平安貴族の生活は、現代の年中行事のルーツとなる儀式で埋め尽くされていました。</p>
              <div className="bg-[#1B2B44] p-4 rounded-xl border-l-4 border-[#FFC2D1]">
                <strong className="text-white block mb-1">春：白馬節会・曲水の宴</strong>
                1/7に青馬を見て邪気を払い、庭の川に盃を流して歌を詠む優雅な遊び。
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border-l-4 border-[#B8F3D8]">
                <strong className="text-white block mb-1">夏：端午の節句・名越の祓</strong>
                5/5は菖蒲の強い香りで邪気払い。6月末は茅の輪をくぐって半年の穢れを清める。
              </div>
              <div className="bg-[#1B2B44] p-4 rounded-xl border-l-4 border-[#FFE5A0]">
                <strong className="text-white block mb-1">秋冬：七夕・五節舞</strong>
                7/7に梶の葉に和歌を書いて上達を祈る。11月は選ばれた令嬢が舞い、貴族の婚活の場にもなった。
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 色と衣服 */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Paintbrush className="w-8 h-8 text-[#C3B7F5]" />
            衣服と「色」の美学
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#2A3B5A] p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Flower2 className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-3 relative z-10">重なるシルエット</h3>
              <p className="text-white/80 text-sm mb-4 relative z-10">体の線を隠しボリュームを出すことで権威を表現。</p>
              <ul className="space-y-4 text-white/90 relative z-10">
                <li>
                  <strong className="text-white block">女性：十二単（五衣唐衣裳）</strong>
                  12枚ではなく基本5枚の「五衣」。重さは20kgにもなる重労働ファッション。
                </li>
                <li>
                  <strong className="text-white block">男性：束帯・狩衣</strong>
                  正装の「束帯」は長く引きずる裾がステータス。日常着の「狩衣」は風通しが良い。
                </li>
              </ul>
            </div>

            <div className="bg-[#2A3B5A] p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-[#B3E5FC] mb-3">階級と絶対禁色</h3>
              <p className="text-white/80 text-sm mb-4">身分によって着て良い色が厳格に決定。</p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#8E4B29]"></div>
                  <span><strong>黄櫨染（こうろぜん）:</strong> 天皇のみの絶対禁色。</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#8A2BE2]"></div>
                  <span><strong>紫:</strong> 最も高貴な色。最高位の貴族に限定。</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#E60012]"></div>
                  <span><strong>緋（赤）:</strong> 紫に次ぐ高位。</span>
                </li>
                <li className="text-sm mt-2 text-white/60">※特別な許しを得て着ることを「禁色を許される」と言い、宮廷の大ステータスでした。</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2A3B5A] to-[#1B2B44] p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">重ね色目（かさねいろめ）</h3>
            <p className="text-white/80 mb-6">
              袖口や襟元から見える表と裏の布の重なりで自然の風景を表現しました。季節外れの色を着ることは「教養がない」と恥ずべきことでした。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-sm text-white/60 mb-2">春：桜</div>
                <div className="flex justify-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-l-md border border-gray-300"></div>
                  <div className="w-6 h-6 bg-[#FFC2D1] rounded-r-md"></div>
                </div>
                <div className="text-xs text-white/80">白 × 紅</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-sm text-white/60 mb-2">夏：杜若</div>
                <div className="flex justify-center mb-2">
                  <div className="w-6 h-6 bg-[#8A2BE2] rounded-l-md"></div>
                  <div className="w-6 h-6 bg-[#B8F3D8] rounded-r-md"></div>
                </div>
                <div className="text-xs text-white/80">紫 × 薄緑</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-sm text-white/60 mb-2">秋：紅葉</div>
                <div className="flex justify-center mb-2">
                  <div className="w-6 h-6 bg-[#FFE5A0] rounded-l-md"></div>
                  <div className="w-6 h-6 bg-[#E60012] rounded-r-md"></div>
                </div>
                <div className="text-xs text-white/80">黄 × 赤</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                <div className="text-sm text-white/60 mb-2">冬：氷</div>
                <div className="flex justify-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-l-md opacity-80 border border-gray-300"></div>
                  <div className="w-6 h-6 bg-white rounded-r-md border border-gray-400 opacity-50"></div>
                </div>
                <div className="text-xs text-white/80">白 × 艶</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 文字と遊び */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#2A3B5A]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <ScrollText className="w-8 h-8 text-[#FFE5A0]" />
              言葉と文字
            </h2>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-[#FFE5A0]/20 h-full">
              <h3 className="text-xl font-bold text-[#FFE5A0] mb-3">ひらがなの誕生</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                男性が公的文書で使う「真名（漢字）」に対し、女性の「女手（ひらがな）」が完成し、源氏物語など文学が爆発的に発展しました。
              </p>
              <h3 className="text-xl font-bold text-white mb-2 mt-6">和歌と高度な言葉遊び</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                当時の和歌は現在のSNSのような必須ツール。
                「まつ」に「松」と「待つ」を掛けるような<strong>懸詞（かけことば）</strong>を使いこなすことが、モテるための絶対条件でした。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Music className="w-8 h-8 text-[#FFC2D1]" />
              当時の遊び
            </h2>
            <div className="bg-[#1B2B44] p-6 rounded-2xl border border-[#FFC2D1]/20 h-full">
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                勝ち負けよりも「いかに風流（みやび）であるか」を競うコンテストでした。
              </p>
              <ul className="space-y-4 text-sm text-white/90">
                <li><strong className="text-[#FFC2D1]">管弦の遊び:</strong> 琴や笛による即興セッション。</li>
                <li><strong className="text-[#FFC2D1]">歌合（うたあわせ）:</strong> 左右に分かれてお題の和歌を競う。台座の装飾等も評価対象。</li>
                <li><strong className="text-[#FFC2D1]">薫物合（たきものあわせ）:</strong> 練り合わせた香りの良さを競う。すれ違った後の残り香で自分をアピール。</li>
                <li><strong className="text-[#FFC2D1]">貝合・偏つぎ:</strong> 絵を合わせる遊びや、漢字の部首当てクイズ。</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2A3B5A] text-white rounded-2xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            ホームアプリに戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
