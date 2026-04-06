import { Star, Sparkles, ArrowLeft, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router';

export function Dan37() {
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
                        第37段
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
                        木は
                    </h1>
                    <p className="text-xl text-white/80">
                        「顔がブサイク」なんて言わせない！梨の花を見直す超教養的視点
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
                            木は、檜。松。桃。柳。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            梨の花、いとすさまじきものにして、近う見ず、はかなき文の端などにも書かず。<br/>
                            顔のいと見苦しきを、これにたとへて言ふ。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            色などは、いと清らにて、紅（くれなゐ）の、つややかなる。<br/>
                            「唐人の顔」などに言ひて、めづらしきものにするは、例の、いふかひなき人の心なるべし。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            楊貴妃が、玄宗皇帝の御前にて泣きける顔を「梨花一枝（りかいっし）、春、雨を帯びたり」と作りたる、いみじうめでたきことなれば、さらば、いとよき木なるべし。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            桐の木、いと、をかし。花の色、紫に咲きたる、いと、をかし。葉のひろごりたるなど、いと、うたて、むつかしけれど、また、さらでも、いふべきにあらず。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            唐土（もろこし）には、いみじき鳥の、これにのみゐるなれば、これまた、いと、めでたし。まして、琴（こと）に作りて、さまざまの音（ね）の出で来るなど、いみじう、をかし。
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            譲葉（ゆづりは）、いと、をかし。<br/>
                            青き葉の、つややかなるに、茎のいと赤き。
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
                                木は、ヒノキ。松。桃。柳。
                            </p>
                            <p>
                                <strong>梨の花</strong>は、本当につまらないもの（すさまじきもの）だと思われていて、みんな近くで見ようともせず、ちょっとした手紙の端っこに書くことさえしないわね。<br/>
                                顔がすごくブサイクなのを、「梨の花みたい」なんて例えて言ったりもするわ。
                            </p>
                            <p>
                                でも、花の色はとても清らかで、縁取りの紅（べに）がツヤツヤしている。<br/>
                                「中国人の顔みたい（派手で不気味）」なんて言って、珍しがるのは、いつものように、感性の鈍い人たちが考えることよ。
                            </p>
                            <p>
                                あの楊貴妃が、玄宗皇帝の前で泣いた顔を<strong>「雨に濡れた一枝の梨の花のようだ」</strong>と詩（白居易の『長恨歌』）に詠まれているけれど、それは素晴らしい表現だわ。そう考えれば、梨の花はとても良い木であるはずだわ。
                            </p>
                            <p>
                                <strong>桐の木</strong>も、とても素敵。花が紫に咲いているのは、本当に風情がある。葉っぱがデカデカと広がっているのは、ちょっと不気味で嫌（むつかし）だけれど、それでも他の木と比べ物にならないくらい素晴らしい。
                            </p>
                            <p>
                                中国では、伝説の鳥（鳳凰）がこの木にしか止まらないというのだから、それだけでも価値があるわね。まして、この木で琴を作って、いろんな音色が出るのだから、最高に素敵だわ。
                            </p>
                            <p>
                                <strong>ユズリハ</strong>も、いいわね。<br/>青い葉っぱがツヤツヤしていて、茎がとても赤いところが最高。
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
                            <h3 className="text-2xl font-bold text-[#FFE5A0] mb-4">⚖️ 「梨の花」逆転裁判</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                当時、梨の花は「白すぎて死装束みたい」「ブサイクの例え」と、宮廷では不人気でした。しかし清少納言は「白楽天の詩を知らないの？」と言わんばかりに、漢詩の教養を盾に梨の花の地位を爆上げさせます。彼女にとって、美しさは単なる見た目ではなく<strong className="text-[#FFE5A0]">「背後にある教養やストーリー（文脈）」とセット</strong>なのです。
                            </p>
                        </div>

                        <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                            <h3 className="text-2xl font-bold text-[#FFC2D1] mb-4">🌳 桐の木への「多角的評価」</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                葉っぱの見た目が「キモい（むつかし）」と本音を漏らしつつも、鳳凰が止まるという伝説や、琴の材料になるという実用性・ステータスを総合して<strong className="text-[#FFC2D1]">「やっぱり最高」</strong>と結論づけます。この「欠点も認めた上での推し」という視点が、ただ褒めるだけじゃないリアリティを生んでいます。
                            </p>
                        </div>

                        <div className="bg-[#2A3B5A] p-8 rounded-3xl border-2 border-white/20">
                            <h3 className="text-2xl font-bold text-[#B8F3D8] mb-4">🎨 色彩への鋭い反応</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                最後にサラッと褒められているユズリハの<strong className="text-[#B8F3D8]">「青い葉と赤い茎」という色のコントラスト</strong>に注目。清少納言の審美眼は、常にパッと目を引く色の組み合わせを探しており、色彩感覚の豊かさが伺えます。
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
                                <div className="text-2xl">💡</div>
                                <div>
                                    <h4 className="font-bold text-xl text-[#1B2B44] mb-2">「文脈」を知れば、モノの価値は一変する</h4>
                                    <p className="text-[#1B2B44]/80 leading-relaxed">
                                        世間が「ダサい」「イケてない」と言っているものでも、その背景にある歴史や優れたエピソード（文脈）を知ることで評価は180度変わります。清少納言のように、<strong className="text-[#1B2B44]">周りの意見に流されず「自分の知識で再評価する力」</strong>は、現代の情報社会でも非常に強力な武器になります。
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
