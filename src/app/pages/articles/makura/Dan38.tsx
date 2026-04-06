import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan38() {
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
                        第38段
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
                        草は
                    </h1>
                    <p className="text-xl text-white/80">
                        「卑しい場所×美しい花」のエモさ。ギャップ萌えの元祖！
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
                            草は、菖蒲（あやめ）。葵。おもだか、名もいとをかし。<br/>
                            しのぶ、いとをかし。蓬（よもぎ）、いとをかし。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            草の庵（いほ）などは、いとあはれなり。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            なづな、なまえだに、いとおかしき。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            夕顔、花のかたちはいとをかしう、実のなりたるもいとをかし。<br/>
                            いかなれば、あやしき家にのみ生ひかかるらむと、いとあやし。<br/>
                            はふ（這う）めるも、いとあはれなり。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            秋の野の、女郎花（をみなへし）、萩（はぎ）、桔梗（きちかう）、菊、かるかや。<br/>
                            露の降りたる、いふべきにもあらず。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            なでしこ、唐（から）のはさらなり、大和のも、いとめでたし。
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
                                草といえば、まずは菖蒲（あやめ）。葵（あおい）も本当に素晴らしい。神代の昔から特別なご利益があると言われているのも、とても興味深くて素敵（をかし）。
                            </p>
                            <p>
                                オモダカは、名前からしてとても面白いわね。<br/>
                                シノブも、とても素敵。ヨモギも、とても素敵。
                            </p>
                            <p>
                                ヨモギに覆われた「草の庵（あばら家）」なんて、なんともしみじみとした風情があるわ。
                            </p>
                            <p>
                                ペンペン草（なづな）。これなんて、名前からして最高に面白いわね。
                            </p>
                            <p>
                                夕顔は、花の形がとても可愛らしくて、実がなっている様子もすごくいい。<br/>
                                どうしてあんなに、ボロボロの見苦しい家（あやしき家）にばかり這いかかって生えているのかしら、本当に不思議。<br/>
                                でも、そのツルが這っている様子は、なんとも情緒があって素敵だわ。
                            </p>
                            <p>
                                秋の野に咲く女郎花、萩、桔梗、菊、カルカヤ。<br/>
                                これらに露が降りている様子は、もう言うまでもない（最高！）。
                            </p>
                            <p>
                                ナデシコは、唐（中国）のものは言うまでもなく、日本のものでも、本当に素晴らしいわ。
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
                            <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">👀 「ギャップ」を愛でる視点</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                夕顔について、「あんなボロい家に咲くなんて不思議」と毒を吐きつつも、その這い上がる生命力に「エモさ（あはれ）」を感じています。この<strong className="text-[#FFE5A0]">「卑しい場所 × 美しい花」というコントラスト</strong>を楽しむのが、清少納言流の美学です。
                            </p>
                        </div>

                        <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                            <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">💧 「露」というフィルター</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                「露の降りたる、いふべきにもあらず（露が降りているのは言うまでもない）」というフレーズ。彼女にとって、秋の草花は単体で完成しているのではなく、<strong className="text-[#FFC2D1]">「朝露に濡れてキラキラしている瞬間」</strong>こそが真の完成形なのです。シーンの切り取り方が天才的です。
                            </p>
                        </div>

                        <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                            <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🎌 ナデシコへのリスペクト</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                当時、中国（唐）のものは高級品として珍重されていましたが、清少納言は<strong className="text-[#B8F3D8]">「日本のナデシコも負けてない、素晴らしい！」</strong>と断言。ここにも彼女の自国文化へのプライドと、権威や流行に流されない「自分の目による確かな評価基準」が見て取れます。
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
                                <div className="text-2xl">📸</div>
                                <div>
                                    <h4 className="font-bold text-xl text-[#1B2B44] mb-2">最高の「フィルター」を見つける</h4>
                                    <p className="text-[#1B2B44]/80 leading-relaxed">
                                        清少納言が草花を「朝露」というフィルターを通して評価したように、私たちも日常の景色をより美しく見せる「最高の条件」を知っておくと、暮らしが豊かになります。晴れた日より雨の日のほうが魅力的な場所、朝より夜のほうが美しい街並み――そんな自分だけの「フィルター設定」を見つけてみましょう。
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
