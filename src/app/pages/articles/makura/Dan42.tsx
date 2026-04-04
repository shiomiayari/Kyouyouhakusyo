import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan42() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-16">
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
            to="/article/literature/makura"
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
          <div className="inline-block px-4 py-2 bg-[#FFC2D1] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第42段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            虫は
          </h1>
          <p className="text-xl text-white/80">
            鈴虫1位！蚊はボロクソ！虫の格付けランキング
          </p>
        </div>
      </section>

      {/* 原文（一部抜粋） */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#B8F3D8]" />
            原文（一部抜粋）
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20 space-y-4">
            <p className="text-white text-lg leading-relaxed">
              虫は鈴虫。ひぐらし。てふ。あり。かげろふ。蛾。
            </p>
            <p className="text-white text-lg leading-relaxed">
              松虫、いとをかし。
            </p>
            <p className="text-white text-lg leading-relaxed">
              きりぎりす、はたおり。
            </p>
            <p className="text-white text-lg leading-relaxed">
              わらぢ虫、いと見苦し。
            </p>
            <p className="text-white text-lg leading-relaxed">
              壁だに、いと見苦しきに、いと心苦し。
            </p>
            <p className="text-white text-lg leading-relaxed">
              蚊はいと憎し。羽音の耳もとになきて、いと小さき風の吹きくるさへ。
            </p>
            <p className="text-white text-lg leading-relaxed">
              ぬかご。これは、秋風の吹くころ、声のいと細くて鳴きたる。
            </p>
            <p className="text-white text-lg leading-relaxed">
              蛍、いとおかし。
            </p>
            <p className="text-white text-lg leading-relaxed">
              また、ただ一つ二つなど、ほのかにうち光りて行くもをかし。
            </p>
            <p className="text-white text-lg leading-relaxed">
              雨など降るもをかし。
            </p>
          </div>
        </div>
      </section>

      {/* 現代語訳 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#FFE5A0]" />
            現代語訳
          </h2>
          <div className="bg-gradient-to-br from-[#B8F3D8] to-[#C3B7F5] p-8 rounded-3xl border-4 border-white">
            <div className="text-[#1B2B44]/90 leading-relaxed space-y-4">
              <p>
                虫は、<strong>鈴虫</strong>。ヒグラシ。蝶。アリ。カゲロウ。蛾（が）もいいわね。
              </p>
              <p>
                <strong>松虫</strong>は、とても趣があって素敵。
              </p>
              <p>
                キリギリス。ハタオリムシ（機織り虫）。
              </p>
              <p>
                <strong>ワラジムシは、本当におぞましくて見苦しいわ</strong>。
              </p>
              <p>
                （汚い）壁にいるのさえ見苦しいのに、わざわざ近くに寄ってこられると、もう本当に辛くて堪えられない。
              </p>
              <p>
                <strong>蚊は、もう本当に憎たらしい！</strong>あの羽音が耳もとでプ〜ンと鳴って、ごく小さな羽風（はかぜ）まで吹かせてくる感じさえ、最高にムカつく。
              </p>
              <p>
                ヌカゴ（小さな虫の一種）は、秋風が吹くころに、とても細い声で鳴いているのがいいわね。
              </p>
              <p>
                <strong>蛍</strong>は、とても素敵。
              </p>
              <p>
                （第1段でも言ったけれど）ただ一つ二つ、ぼんやり光って飛んでいくのも趣があるし、雨が降っている夜の蛍も風情があっていいわ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 詳しい解説 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-[#C3B7F5]" />
            詳しい解説
          </h2>
          <div className="space-y-6">
            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">👂👁️ 「聴覚」と「視覚」のセレクト</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                鈴虫やヒグラシのように「声」を楽しむ虫と、蝶や蛍のように「姿」を楽しむ虫。清少納言は、その虫が持つ<strong className="text-[#FFE5A0]">「最高の見せ場」</strong>を瞬時に判断してリストアップしています。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🦟 蚊への「風」の描写</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-[#FFC2D1]">「耳もとで鳴く」だけでなく、「小さな風が吹いてくる」という描写</strong>に注目。これは実際に静かな夜に蚊に悩まされた人でないと書けない、極めてリアルで繊細な不快感の表現です。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B3E5FC] mb-4">🐛 ワラジムシへの拒絶反応</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-[#B3E5FC]">「壁にいるのさえ嫌なのに、近くに来るなんて！」</strong>という生理的な嫌悪感。平安時代も今も、虫に対する「好き嫌い」の感覚は驚くほど変わっていないことがわかります。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">☔ 蛍の「雨の日」という新提案</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-[#B8F3D8]">「雨が降る夜の蛍もいい」</strong>という視点は、彼女ならではの「をかし（発見）」です。晴れた夜の輝きだけでなく、雨に煙る中での淡い光に美しさを見出すあたり、さすがのセンスです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 現代に活かせるポイント */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#FFE5A0]" />
            現代に活かせるポイント
          </h2>
          <div className="bg-gradient-to-br from-[#C3B7F5] to-[#FFC2D1] p-8 rounded-3xl border-4 border-white">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎭</div>
                <div>
                  <h4 className="font-bold text-xl text-[#1B2B44] mb-2">好き嫌いをハッキリ言う誠実さ</h4>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    清少納言は鈴虫を褒めるだけでなく、蚊やワラジムシを「嫌い」とハッキリ言います。全てを好きにならなくていい、という自分の感性に正直な姿勢は、現代のSNS疲れを考える上でも参考になります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              to="/article/literature/makura"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2A3B5A] text-white rounded-2xl hover:bg-[#3A4B6A] transition-all border-2 border-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
              一覧に戻る
            </Link>
            <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFE5A0] to-[#B8F3D8] text-[#1B2B44] rounded-2xl border-4 border-white font-bold">
              <Sparkles className="w-5 h-5" />
              次の段へ（準備中）
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
