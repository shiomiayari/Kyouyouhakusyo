import { Code, Palette, Smartphone, Cloud, Search, BarChart } from 'lucide-react';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web開発',
      description: '最新のテクノロジーを使用した、高品質なWebアプリケーション開発。',
      features: ['レスポンシブデザイン', 'パフォーマンス最適化', 'セキュリティ対策'],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'モバイルアプリ開発',
      description: 'iOS・Android対応のネイティブアプリ、クロスプラットフォームアプリの開発。',
      features: ['ネイティブアプリ', 'クロスプラットフォーム', 'UI/UXデザイン'],
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UXデザイン',
      description: 'ユーザー中心の魅力的で使いやすいデザインを提供します。',
      features: ['ユーザーリサーチ', 'プロトタイピング', 'デザインシステム'],
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'クラウドソリューション',
      description: 'AWS、Azure、GCPを活用したスケーラブルなインフラ構築。',
      features: ['クラウド移行', 'インフラ管理', 'コスト最適化'],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO対策',
      description: '検索エンジン最適化で、ビジネスの可視性を向上させます。',
      features: ['キーワード分析', 'コンテンツ最適化', 'テクニカルSEO'],
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: 'データ分析',
      description: 'データドリブンな意思決定をサポートする分析サービス。',
      features: ['データ可視化', 'レポート作成', '予測分析'],
    },
  ];

  const process = [
    { step: '01', title: 'ヒアリング', description: 'お客様のニーズと目標を詳しくお伺いします。' },
    { step: '02', title: '企画・提案', description: '最適なソリューションを企画し、提案します。' },
    { step: '03', title: '開発・制作', description: '経験豊富なチームが高品質な成果物を制作します。' },
    { step: '04', title: 'テスト・検証', description: '徹底的なテストで品質を保証します。' },
    { step: '05', title: '納品・サポート', description: '納品後も継続的なサポートを提供します。' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6">サービス</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            お客様のビジネス目標を達成するための、包括的なサービスを提供します。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-secondary p-8 rounded-3xl hover:shadow-xl transition-all border border-border group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">開発プロセス</h2>
            <p className="text-xl text-muted-foreground">
              明確なプロセスで、高品質な成果物を提供します
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">料金プラン</h2>
            <p className="text-xl text-muted-foreground">
              お客様のニーズに合わせた柔軟なプランをご用意
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gradient-to-br from-white to-secondary p-8 rounded-3xl border border-border">
              <div className="text-center mb-8">
                <h3 className="mb-4">ベーシック</h3>
                <div className="text-4xl mb-2">
                  ¥50,000
                  <span className="text-lg text-muted-foreground">/月</span>
                </div>
                <p className="text-muted-foreground">小規模プロジェクト向け</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>基本的なWebサイト制作</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>レスポンシブデザイン</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>メールサポート</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-secondary text-secondary-foreground rounded-2xl hover:bg-muted transition-all"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-primary to-accent text-white p-8 rounded-3xl shadow-2xl transform md:scale-105">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
                  人気
                </div>
                <h3 className="mb-4">プロ</h3>
                <div className="text-4xl mb-2">
                  ¥150,000
                  <span className="text-lg text-blue-100">/月</span>
                </div>
                <p className="text-blue-100">中規模プロジェクト向け</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>高度なWebアプリケーション</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>カスタムデザイン</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>SEO対策</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>優先サポート</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-white text-primary rounded-2xl hover:bg-blue-50 transition-all"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-white to-secondary p-8 rounded-3xl border border-border">
              <div className="text-center mb-8">
                <h3 className="mb-4">エンタープライズ</h3>
                <div className="text-4xl mb-2">
                  カスタム
                </div>
                <p className="text-muted-foreground">大規模プロジェクト向け</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>フルカスタマイズ</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>専任チーム</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>24/7サポート</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>SLA保証</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block text-center px-6 py-3 bg-secondary text-secondary-foreground rounded-2xl hover:bg-muted transition-all"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">プロジェクトを始めましょう</h2>
          <p className="text-xl text-blue-100 mb-8">
            お客様のビジネス目標を達成するために、最適なソリューションをご提案します。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>
    </div>
  );
}
