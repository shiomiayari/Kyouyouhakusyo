import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan41() {
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
                    <div className="inline-block px-4 py-2 bg-[#B8F3D8] text-[#1B2B44] rounded-full mb-6 font-bold border-2 border-white text-sm">
                        第41段
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
                        鳥は
                    </h1>
                    <p className="text-xl text-white/80">
                        推し鳥はホトトギス！鳥の格付けランキング
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
                            鳥は、ほととぎす。特定（とて）もさらなり。明けはつるほど、かすかに鳴きて行く、いとあはれなり。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            明けゆくまに、ものの声々聞こゆるなかに、また、ただ一つ二つなど、ほのかにうち光りて行くもをかし。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            五月雨（さみだれ）の短き夜に、寝覚（ねざめ）をして、いかで先に聞かむと待たれて、明けゆく空のけしきも、いとをかし。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            山鳥。特定（とて）もさらなり。友を恋ひて、己（おの）が尾の重きをも忘れて、夜を明かすらむ。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            鷺（さぎ）はいと見苦し。眼（まなこ）の居所（ゐどころ）など。いとよき人の、いみじう腹立ちたる顔に似て、いと見苦し。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            うぐひすは、鳴く声のいみじうめでたきを、なほそのことと思ふに、いとわろし。九重（ここのへ）のうららかなるに、鳴きたるこそ、いみじうめでたけれ。
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
                    <div className="bg-gradient-to-br from-[#FFE5A0] to-[#B8F3D8] p-8 rounded-3xl border-4 border-white">
                        <div className="text-[#1B2B44]/90 leading-relaxed space-y-4">
                            <p>
                                鳥といえば、なんといっても<strong>ホトトギス</strong>。あらためて言うまでもないけれど、夜が明けるころに、かすかに鳴きながら飛び去っていく様子は、本当にかっこよくて、しみじみと心に染みるわ。
                            </p>
                            <p>
                                だんだん夜が明けていくにつれて、いろんな鳥の声が聞こえてくる中で、ただ一つ二つ、まだ残っている蛍がぼんやり光って飛んでいくのも素敵。
                            </p>
                            <p>
                                梅雨（五月雨）の短い夜に、ふと目が覚めて「誰よりも先にホトトギスの初鳴きを聞いてやろう」と待ち構えている、その明け方の空の気配も最高にエモい。
                            </p>
                            <p>
                                <strong>山鳥</strong>も、もちろんいい。パートナー（友）を恋しがって、自分の重い尾っぽのことさえ忘れて、夜を明かしているなんて健気じゃない。
                            </p>
                            <p>
                                一方で、<strong>サギ（鷺）は本当に見苦しいわ</strong>。目の位置とかが最悪。育ちの良い立派な人が、ものすごく怒っている時の顔にそっくりで、見ていられないわね。
                            </p>
                            <p>
                                <strong>ウグイス</strong>は、鳴き声が素晴らしいから、やっぱり「春といえばこれよね」と思うのだけど、場所によって評価が変わるの。宮中のうららかな庭で鳴いているのは最高に素晴らしいけれど、秋の終わりや冬の初めになると、声が枯れてしまうのが、なんとも残念（わろし）だわ。
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
                            <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">🎤 「ライブ感」を重視する耳</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                清少納言にとって、ホトトギスは「ただ鳴いている鳥」ではなく、五月雨の夜に耳を澄ませて<strong className="text-[#FFE5A0]">「誰よりも早く聴きたい」と願う、期間限定のアーティスト</strong>のような存在です。その「待機時間」すらも楽しむ姿勢は、現代の「推し活」に通じるものがあります。
                            </p>
                        </div>

                        <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                            <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">😤 サギへの辛辣すぎる例え</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                <strong className="text-[#FFC2D1]">「育ちの良い人が激怒している顔」</strong>という描写は、宮廷で実際に感情を露わにしている貴族を見ていた彼女ならではの皮肉。鳥の観察が、いつの間にか人間観察（しかも欠点の指摘）にスライドするあたりが、枕草子らしい面白さです。
                            </p>
                        </div>

                        <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                            <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">📍 ウグイスへの「場所・時期」指定</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                ウグイスの声は認めつつも、<strong className="text-[#B8F3D8]">「宮中で鳴いてこそ一流」「声が枯れる冬はイマイチ」</strong>と、そのコンディションやシチュエーションにまで細かく注文をつけるあたりに、彼女の美学の厳しさが表れています。
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
                                <div className="text-2xl">🎯</div>
                                <div>
                                    <h4 className="font-bold text-xl text-[#1B2B44] mb-2">自分の「推し」を明確に持つ</h4>
                                    <p className="text-[#1B2B44]/80 leading-relaxed">
                                        清少納言のように、自分の好きなものを明確に言語化し、その理由を説明できる力は、自分の価値観を確立する上で重要です。推し活はただの趣味ではなく、自己理解の一つの形なのです。
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
                            to="/article/literature/makuranososhi"
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
