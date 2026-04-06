import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan150() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-16 bg-[#1B2B44]">
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

      {/* Back Button */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/article/literature/makuranososhi"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A3B5A] text-white rounded-xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            枕草子一覧に戻る
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#C3B7F5] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第150段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            あてなるもの
          </h1>
          <p className="text-xl text-white/80">
            白と紫、水晶、かき氷――清少納言の圧倒的な「色彩センス」と美学。
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#C3B7F5]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white/90 text-lg leading-loose space-y-6 whitespace-pre-wrap">
              {`あてなるもの。白き色の衣（きぬ）の上に、薄紫の織物（おりもの）重ねて着たる。

雁（かり）の卵。

削り氷（ひ。けづりひ）に、あまづら入れて、新しき金（かな）まりに入れたる。

水晶の数珠（ずず）。

藤の花。梅の花に雪の降りかかりたる。

いみじううつくしき児（ちご）の、いちごなど食ひたる。`}
            </p>
          </div>
        </div>
      </section>

      {/* 現代語訳 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#B8F3D8]" />
            現代語訳
          </h2>
          <div className="bg-gradient-to-br from-[#E1BEE7] to-[#B3E5FC] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-6">
              <p>
                <strong>上品で洗練されているもの。</strong>
              </p>
              <p>
                白い着物の上に、薄紫の織り物を重ねて着ている様子。
              </p>
              <p>
                雁（かり）の卵。（※鶏の卵より大きく、色が白いことから珍重されました）
              </p>
              <p>
                削った氷（かき氷）に、あまづら（ツタの樹液から作った天然甘味料）をかけて、ピカピカの新しい銀の器に入れたもの。
              </p>
              <p>
                水晶の数珠。
              </p>
              <p>
                藤の花。また、梅の花に雪が降りかかっている様子。
              </p>
              <p>
                とても可愛らしいちびっ子が、苺（いちご）を食べている様子。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 詳しい解説 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#FFC2D1]" />
            詳しい解説
          </h2>
          <div className="space-y-6">
            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#E1BEE7] mb-4">👘 「色」のレイヤード</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                冒頭の「白に薄紫」という配色。平安時代のファッションにおいて、紫は最高位の色であり、白と重ねることでその透明感と品格を際立たせています。彼女の色彩センスが光る一文です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B3E5FC] mb-4">🍧 平安時代のスイーツ</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                「削り氷（かき氷）」は当時の超贅沢品。冷蔵庫がない時代に、冬の氷を「氷室（ひむろ）」に保存し、それを夏に銀の器で食べる。この<strong className="text-[#B3E5FC]">「冷たさ」「甘さ」「銀の輝き」</strong>の三拍子が揃った瞬間を、彼女は最高にエレガントだと定義しています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">🥚 「白さ」への執着</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                雁の卵、雪、水晶。清少納言は「白」という色に清潔感と気高さ（あてなり）を感じています。濁りのない、凛とした美しさが彼女の理想です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🍓 「無垢」と「赤」のコントラスト</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                最後の一文、可愛い子が苺を食べる様子。幼子の白い肌と、苺の鮮やかな赤。この視覚的なコントラストを「あてなり」と捉えるあたりに、彼女の独自の審美眼と、対象を愛でる優しい眼差しが感じられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              to="/article/literature/makuranososhi"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2A3B5A] text-white rounded-2xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
              一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
