import { BookOpen, Target, Lightbulb, Star, Sparkles } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'わかりやすい構成',
      description: '各記事には、キャッチコピー、要約、背景、豆知識、相関図、レーダーチャートなど、理解を助ける要素が満載です。',
      color: '#FFC2D1',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'ビジュアルで理解',
      description: '人物相関図や物語のロードマップで、複雑な人間関係やストーリーの流れを視覚的に把握できます。',
      color: '#C3B7F5',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: '現代的な視点',
      description: 'ドロドロ度、現代への転用力など、ユニークな指標で評価。今の自分に響く作品が見つかります。',
      color: '#B3E5FC',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '教養としての実用性',
      description: 'ビジネスや日常会話で使える知識として、より実践的に学べます。',
      color: '#FFE5A0',
    },
  ];

  const radarItems = [
    {
      title: '人間関係の複雑度（ドロドロ度）',
      description: '愛憎、裏切り、世継ぎ争いなど。数値が高いほど「昼ドラ」的。',
      emoji: '💔',
    },
    {
      title: '現代への転用力（サバイバル知恵）',
      description: '今の仕事や人間関係にどれだけ活かせるか。「教養としての実用性」を示す軸。',
      emoji: '💼',
    },
    {
      title: 'エモ・情緒レベル（をかし・あはれ度）',
      description: '風景描写の美しさや、心の機微。西洋絵画との親和性が高い作品はこの数値がアップ。',
      emoji: '🌸',
    },
    {
      title: '哲学的深度（思考の沼）',
      description: '「人生とは？」「死とは？」という問いの深さ。',
      emoji: '🤔',
    },
    {
      title: 'タイパ・読了難易度（読了コスト）',
      description: '文章の長さや、文脈の難しさ。',
      emoji: '⏱️',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-40 left-10 text-white/20 animate-pulse delay-100">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-60 left-1/4 text-white/20 animate-pulse delay-200">
        <Sparkles className="w-7 h-7" />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-[#FFB3D9] text-[#1a2744] rounded-full mb-6 font-bold border-2 border-white">
            大人の教養白書
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">このサイトについて</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            教養を、もっと身近に、もっと楽しく。<br />
            あらゆる分野の知識を「制覇」するための、新しい学習ガイドです。
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">コンセプト</h2>
          <div className="bg-gradient-to-br from-[#FFB3D9] to-[#D4B8FF] p-8 md:p-12 rounded-3xl border-4 border-white">
            <p className="text-lg text-[#1a2744]/90 mb-6 leading-relaxed">
              「教養は難しい」「自分には関係ない」と思っていませんか？
            </p>
            <p className="text-lg text-[#1a2744]/90 mb-6 leading-relaxed">
              でも実は、源氏物語の恋愛模様も、モナ・リザの微笑みも、ベートーヴェンの交響曲も、
              すべて今の私たちに通じるものがあります。
            </p>
            <p className="text-lg text-[#1a2744]/90 mb-6 leading-relaxed">
              このサイトは、大人が教養を学びたいと思ったとき、
              「どこから始めればいいのか」「どう理解すればいいのか」がわかる、
              新しいスタイルの教養ガイドです。
            </p>
            <p className="text-lg text-[#1a2744]/90 leading-relaxed">
              レーダーチャート、人物相関図、ロードマップなど、視覚的に理解できる工夫を凝らし、
              あらゆる分野の知識を、もっと身近に感じていただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">このサイトの特徴</h2>
            <p className="text-lg text-white/70">
              教養を楽しく、わかりやすく学べる工夫
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl hover:scale-105 transition-all border-4 border-white"
                style={{ backgroundColor: feature.color }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#1a2744] rounded-2xl mb-6 text-white border-2 border-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#1a2744]">{feature.title}</h3>
                <p className="text-[#1a2744]/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radar Chart Explanation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">レーダーチャートの見方</h2>
          <p className="text-lg text-white/70 mb-8 text-center">
            各記事を5つの軸で評価し、その特徴を視覚化しています
          </p>
          <div className="space-y-4">
            {radarItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#2a3b5a] p-6 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Structure */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">各記事ページの構成</h2>
          <div className="bg-gradient-to-br from-[#B8E6E1] to-[#FFD89B] p-8 md:p-12 rounded-3xl border-4 border-white">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📝</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a2744]">キャッチコピー</h3>
                  <p className="text-[#1a2744]/70">その記事の魅力を一言で表現</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📄</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a2744]">要約</h3>
                  <p className="text-[#1a2744]/70">内容の全体像を簡潔に</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏛️</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a2744]">背景・作者</h3>
                  <p className="text-[#1a2744]/70">時代背景や作者について詳しく</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a2744]">豆知識</h3>
                  <p className="text-[#1a2744]/70">知っておくと面白いトリビア</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🗺️</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a2744]">人物相関図・ロードマップ</h3>
                  <p className="text-[#1a2744]/70">視覚的に理解できる図解</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a2744]">レーダーチャート</h3>
                  <p className="text-[#1a2744]/70">5つの指標で特徴を可視化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center border-4 border-white bg-gradient-to-br from-[#FFB3D9] via-[#D4B8FF] to-[#B8E6E1]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
                さあ、教養の旅を始めよう
              </h2>
              <p className="text-lg text-[#1a2744]/80 mb-8">
                サイドバーから、気になるカテゴリーを選んでください
              </p>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-white rounded-2xl shadow-lg border-4 border-[#1a2744] hover:scale-105 transition-all"
              >
                <span className="font-bold text-[#1a2744]">ホームに戻る</span>
              </a>
            </div>
            <div className="absolute top-6 right-6 text-white/40">
              <Star className="w-10 h-10 fill-current" />
            </div>
            <div className="absolute bottom-6 left-6 text-white/40">
              <Star className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}