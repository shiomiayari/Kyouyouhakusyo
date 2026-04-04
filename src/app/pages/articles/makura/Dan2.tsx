import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan2() {
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
          <div className="inline-block px-4 py-2 bg-[#FFE5A0] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
            第2段
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            ころは
          </h1>
          <p className="text-xl text-white/80">
            季節のベストタイミング
          </p>
        </div>
      </section>

      {/* 原文 */}
      <section className="py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#B8F3D8]" />
            原文
          </h2>
          <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
            <p className="text-white text-lg leading-relaxed">
              正月は一日はなほ。三月は三日。四月は賀茂祭のころ。五月は五日。七月は七日。九月は九日はなほ。十一月は五節のころ。十二月は追儺（ついな）の夜。
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
          <div className="bg-gradient-to-br from-[#FFE5A0] to-[#FFC2D1] p-8 rounded-3xl border-4 border-white">
            <p className="text-[#1B2B44]/90 text-lg leading-relaxed">
              正月は、やっぱり1日が最高。三月は3日（桃の節句）。四月は葵祭のころ。五月は5日（端午の節句）。七月は7日（七夕）。九月は、やっぱり9日（重陽の節句）。十一月は五節（ごせち）の舞姫の行事があるころ。十二月は、大晦日の追儺（鬼払いの儀式）の夜。
            </p>
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
              <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🎉 イベント大好き清少納言</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                第1段が「自然の美」なら、第2段は「行事のワクワク感」です。彼女にとって季節とは、カレンダー上の数字ではなく、そこで行われる華やかなイベントや儀式とセットで楽しむものでした。
              </p>
            </div>

            <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
              <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">✨ 「はなほ」というこだわり</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                正月1日や九月9日に使われている<strong className="text-[#B8F3D8]">「はなほ（やはり、いっそう）」</strong>という言葉に、彼女の強いこだわりが見えます。「他の日もいいけど、やっぱりこの日が本番だよね！」という、イベント当日の高揚感を表現しています。
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
                <div className="text-2xl">📅</div>
                <div>
                  <h4 className="font-bold text-xl text-[#1B2B44] mb-2">季節の行事を楽しむ心</h4>
                  <p className="text-[#1B2B44]/80 leading-relaxed">
                    清少納言のように、季節ごとの行事やイベントを「自分のベストタイミング」として楽しむ姿勢は、日常に彩りを添えます。正月、節分、七夕など、日本の暦の美しさを再発見してみましょう。
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
