import { BookOpen, Palette, Music, History, Sparkles, Star, Swords, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
const logoImage = '/logo.png';

// ============================================================
// データ定義
// ============================================================

const categories = [
  {
    id: 'literature',
    name: '日本の古典文学',
    icon: <BookOpen className="w-5 h-5" />,
    color: '#FFC2D1',
    bgDark: '#4a1a2a',
    link: '/article/literature/genji',
    count: 4,
  },
  {
    id: 'art',
    name: '西洋絵画',
    icon: <Palette className="w-5 h-5" />,
    color: '#C3B7F5',
    bgDark: '#2a1a4a',
    link: '/article/art/monet',
    count: 5,
  },
  {
    id: 'music',
    name: 'クラシック音楽',
    icon: <Music className="w-5 h-5" />,
    color: '#FFE5A0',
    bgDark: '#4a3a1a',
    link: '/article/music/liebestraum',
    count: 4,
  },
  {
    id: 'history',
    name: '歴史と文化',
    icon: <History className="w-5 h-5" />,
    color: '#B8F3D8',
    bgDark: '#1a4a3a',
    link: '/article/literature/heian',
    count: 2,
  },
  {
    id: 'mythology',
    name: '神話と伝説',
    icon: <Star className="w-5 h-5" />,
    color: '#B3E5FC',
    bgDark: '#1a3a4a',
    link: '/article/mythology/king-arthur',
    count: 1,
  },
];

const featuredMain = {
  title: '源氏物語',
  subtitle: '日本の古典文学',
  description: '千年愛される、究極の恋愛ストーリー。光源氏の恋愛模様から学ぶ、人間関係のサバイバル術。平安時代の宮廷を舞台に、優雅さと権謀術数が交差する物語。',
  tags: ['恋愛', '宮廷', '人間ドラマ'],
  link: '/article/literature/genji',
  color: '#FFB3D9',
  icon: <BookOpen className="w-8 h-8" />,
  label: '📖 FEATURED',
};

const featuredSub = [
  {
    title: '睡蓮',
    subtitle: '西洋絵画 / モネ',
    link: '/article/art/monet',
    color: '#C3B7F5',
    icon: <Palette className="w-4 h-4" />,
  },
  {
    title: '月光ソナタ',
    subtitle: 'クラシック音楽 / ベートーヴェン',
    link: '/article/music/moonlight',
    color: '#FFE5A0',
    icon: <Music className="w-4 h-4" />,
  },
  {
    title: 'アーサー王伝説',
    subtitle: '神話と伝説',
    link: '/article/mythology/king-arthur',
    color: '#B3E5FC',
    icon: <Star className="w-4 h-4" />,
  },
];

const tabArticles: Record<string, { title: string; description: string; link: string; color: string; icon: React.ReactNode; tags: string[] }[]> = {
  literature: [
    { title: '源氏物語', description: '千年愛される、究極の恋愛ストーリー。', link: '/article/literature/genji', color: '#FFB3D9', icon: <BookOpen className="w-5 h-5" />, tags: ['恋愛', '宮廷'] },
    { title: '枕草子', description: '1000年前のインフルエンサー・清少納言の日常エッセイ。', link: '/article/literature/makuranososhi', color: '#FFE5A0', icon: <BookOpen className="w-5 h-5" />, tags: ['日常', 'エッセイ'] },
    { title: '平家物語', description: '奢れる者も久しからず。最強の軍団の壮大な滅亡。', link: '/article/literature/heike', color: '#FF9999', icon: <Swords className="w-5 h-5" />, tags: ['諸行無常', '合戦'] },
  ],
  art: [
    { title: '睡蓮', description: '印象派の巨匠モネが晩年に描き続けた光と水の世界。', link: '/article/art/monet', color: '#C3B7F5', icon: <Palette className="w-5 h-5" />, tags: ['印象派', 'モネ'] },
    { title: '印象派とは', description: 'パリの画壇に革命を起こした新しい絵画運動の誕生。', link: '/article/art/impressionism', color: '#B3E5FC', icon: <Palette className="w-5 h-5" />, tags: ['美術史', '革命'] },
    { title: 'モナ・リザ', description: '世界で最も有名な絵の謎と秘密を徹底解説。', link: '/article/art/monalisa', color: '#FFE5A0', icon: <Palette className="w-5 h-5" />, tags: ['ダ・ヴィンチ', '謎'] },
  ],
  music: [
    { title: '月光ソナタ', description: 'ベートーヴェンの傑作に隠された悲恋の真実。', link: '/article/music/moonlight', color: '#FFE5A0', icon: <Music className="w-5 h-5" />, tags: ['ベートーヴェン', '悲恋'] },
    { title: '英雄ポロネーズ', description: 'ショパンが祖国への想いを込めた圧倒的な名曲。', link: '/article/music/heroic', color: '#B8F3D8', icon: <Music className="w-5 h-5" />, tags: ['ショパン', '祖国'] },
    { title: 'クレールドゥリュヌ', description: 'ドビュッシーの月光が生む夢幻の音楽世界。', link: '/article/music/clairdelune', color: '#C3B7F5', icon: <Music className="w-5 h-5" />, tags: ['ドビュッシー', '月'] },
  ],
  history: [
    { title: '平安時代の文化', description: '後宮の構造や色の美学、煌びやかな宮中生活の裏側。', link: '/article/literature/heian', color: '#B8F3D8', icon: <History className="w-5 h-5" />, tags: ['宮中', '十二単'] },
    { title: 'アーサー王伝説', description: '中世ヨーロッパを席巻した伝説の騎士たちの物語。', link: '/article/mythology/king-arthur', color: '#B3E5FC', icon: <Star className="w-5 h-5" />, tags: ['騎士', '聖杯'] },
  ],
};

const tabKeys = [
  { key: 'literature', label: '📖 文学', color: '#FFC2D1' },
  { key: 'art', label: '🎨 絵画', color: '#C3B7F5' },
  { key: 'music', label: '🎵 音楽', color: '#FFE5A0' },
  { key: 'history', label: '🏛️ 歴史', color: '#B8F3D8' },
];

// ============================================================
// コンポーネント
// ============================================================

export function Home() {
  const { scrollYProgress } = useScroll();
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yHeroLogo = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const starY1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const starY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yBgFast = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  const [activeTab, setActiveTab] = useState('literature');
  const marqueeRef = useRef<HTMLDivElement>(null);

  const currentArticles = tabArticles[activeTab] ?? [];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0f1d]">
      {/* Background Image Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/80 via-transparent to-[#0a0f1d]/80 z-10" />
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-[-50%] w-[200%] h-[200%] bg-[url('/bg-japanese.png')] bg-repeat opacity-40 bg-[length:600px] sm:bg-[length:800px]"
        />
        <motion.div
          style={{ y: yBgFast, opacity: opacityBg }}
          className="absolute inset-[-50%] w-[200%] h-[200%] bg-[url('/bg-japanese.png')] bg-repeat bg-[length:800px] sm:bg-[length:1200px] mix-blend-overlay rotate-180"
        />
      </div>

      <div className="relative z-10">
        {/* Sparkle decorations */}
        <motion.div style={{ y: starY1, rotate: starRotate }} className="absolute top-20 left-10 text-white/30 animate-pulse">
          <Star className="w-8 h-8 fill-current" />
        </motion.div>
        <motion.div style={{ y: starY2, rotate: starRotate }} className="absolute top-40 right-20 text-white/20 animate-pulse delay-100">
          <Star className="w-6 h-6 fill-current" />
        </motion.div>
        <motion.div style={{ y: starY1 }} className="absolute bottom-40 left-1/4 text-white/25 animate-pulse delay-200">
          <Star className="w-5 h-5 fill-current" />
        </motion.div>
        <motion.div style={{ rotate: starRotate }} className="absolute top-60 right-1/3 text-white/20 animate-pulse delay-300">
          <Sparkles className="w-7 h-7" />
        </motion.div>
        <motion.div style={{ y: starY2, rotate: starRotate }} className="absolute bottom-60 right-10 text-white/30 animate-pulse">
          <Star className="w-6 h-6 fill-current" />
        </motion.div>

        {/* ── Hero Section ───────────────────────────────── */}
        <section className="relative py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div style={{ y: yHeroLogo }} className="mb-8 inline-block">
              <img
                src={logoImage}
                alt="大人の教養白書"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div style={{ y: yHeroText }}>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                知的好奇心を、もっと楽しく。
              </p>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                古典文学、絵画、音楽、歴史、経済。<br />
                大人が知りたい教養を、わかりやすく、面白く。
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Category Marquee ────────────────────────────── */}
        <section className="py-8 relative" style={{ overflow: 'hidden' }}>
          {/* フェードエッジ */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0a0f1d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0a0f1d] to-transparent z-10 pointer-events-none" />

          <div
            ref={marqueeRef}
            className="flex gap-4 marquee-track"
            style={{ willChange: 'transform' }}
          >
            {/* 2周分レンダリングでループ */}
            {[...categories, ...categories, ...categories].map((cat, i) => (
              <Link
                key={`${cat.id}-${i}`}
                to={cat.link}
                className="group flex-shrink-0"
              >
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-full border-2 border-white/20 hover:border-white/60 transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: cat.color + '22', backdropFilter: 'blur(10px)' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cat.color + '44', color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <span className="text-white font-bold whitespace-nowrap text-sm">{cat.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: cat.color + '33', color: cat.color }}
                  >
                    {cat.count}本
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Magazine Featured Layout ─────────────────────── */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* セクションヘッダー */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-[#FFC2D1]/60 to-transparent" />
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#FFC2D1] uppercase">
                ✦ PICK UP
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-[#C3B7F5]/60 to-transparent" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* メインフィーチャー（左2/3） */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Link to={featuredMain.link} className="group block h-full">
                  <div
                    className="relative overflow-hidden rounded-3xl h-full min-h-[340px] border-2 border-white/20 hover:border-white/50 transition-all hover:shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${featuredMain.color}33 0%, #0a0f1d 60%)`,
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {/* 背景装飾 */}
                    <div
                      className="absolute inset-0 opacity-10 rounded-3xl"
                      style={{ background: `radial-gradient(ellipse at top right, ${featuredMain.color}, transparent 70%)` }}
                    />

                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div>
                        <span
                          className="inline-block text-xs font-black tracking-widest px-3 py-1.5 rounded-full mb-5"
                          style={{ backgroundColor: featuredMain.color + '33', color: featuredMain.color }}
                        >
                          {featuredMain.label}
                        </span>

                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-white/20"
                            style={{ backgroundColor: featuredMain.color + '33', color: featuredMain.color }}
                          >
                            {featuredMain.icon}
                          </div>
                          <div>
                            <p className="text-sm text-white/50 mb-1">{featuredMain.subtitle}</p>
                            <h3
                              className="text-4xl font-black"
                              style={{ color: featuredMain.color }}
                            >
                              {featuredMain.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-white/70 leading-relaxed text-base mb-6 max-w-lg">
                          {featuredMain.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredMain.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-bold"
                              style={{ backgroundColor: featuredMain.color + '22', color: featuredMain.color, border: `1px solid ${featuredMain.color}44` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 group-hover:gap-4 transition-all">
                        <span className="font-bold text-white/80">読んでみる</span>
                        <ArrowRight className="w-5 h-5" style={{ color: featuredMain.color }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* サブ記事リスト（右1/3） */}
              <div className="flex flex-col gap-4">
                {featuredSub.map((article, i) => (
                  <motion.div
                    key={article.link}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    <Link to={article.link} className="group block">
                      <div
                        className="relative overflow-hidden rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all hover:shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${article.color}18 0%, #111827 100%)`,
                          backdropFilter: 'blur(12px)',
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                          style={{ background: `radial-gradient(ellipse at top left, ${article.color}18, transparent 70%)` }}
                        />
                        <div className="relative z-10 flex items-center gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: article.color + '33', color: article.color }}
                          >
                            {article.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-white/40 mb-0.5 truncate">{article.subtitle}</p>
                            <h4 className="font-bold text-white text-base truncate">{article.title}</h4>
                          </div>
                          <ChevronRight
                            className="w-4 h-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                            style={{ color: article.color }}
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* 小さなティーザー */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.36 }}
                >
                  <div
                    className="rounded-2xl p-5 border border-dashed border-white/20 text-center"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <Sparkles className="w-6 h-6 text-white/30 mx-auto mb-2" />
                    <p className="text-white/40 text-sm">記事は随時追加中</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tab Pickup Section ──────────────────────────── */}
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* セクションヘッダー */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                テーマで探す
              </h2>
              <p className="text-white/50">気になるジャンルを選んでください</p>
            </motion.div>

            {/* タブ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {tabKeys.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative px-5 py-2.5 rounded-full text-sm font-bold transition-all"
                  style={
                    activeTab === tab.key
                      ? {
                          backgroundColor: tab.color,
                          color: '#1a2744',
                          boxShadow: `0 0 20px ${tab.color}66`,
                          transform: 'scale(1.05)',
                        }
                      : {
                          backgroundColor: tab.color + '18',
                          color: tab.color,
                          border: `1px solid ${tab.color}44`,
                        }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* タブコンテンツ */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {currentArticles.map((article, i) => (
                  <motion.div
                    key={article.link}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                  >
                    <Link to={article.link} className="group block h-full">
                      <div
                        className="relative overflow-hidden rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:shadow-xl h-full flex flex-col"
                        style={{
                          background: `linear-gradient(145deg, ${article.color}1a 0%, #0d1324 100%)`,
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {/* グロー */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                          style={{ background: `radial-gradient(ellipse at 20% 20%, ${article.color}22, transparent 60%)` }}
                        />

                        <div className="relative z-10 flex flex-col h-full">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                            style={{ backgroundColor: article.color + '33', color: article.color }}
                          >
                            {article.icon}
                          </div>

                          <h3 className="text-xl font-black text-white mb-2">{article.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">{article.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map(tag => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                                style={{ backgroundColor: article.color + '22', color: article.color }}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 mt-auto">
                            <span className="text-xs font-bold text-white/50 group-hover:text-white/80 transition-colors">読む</span>
                            <ChevronRight
                              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              style={{ color: article.color }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── New CTA Section ──────────────────────────────── */}
        <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
          {/* CTA背景グロー */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-20"
              style={{ background: 'radial-gradient(ellipse, #FFC2D1 0%, #C3B7F5 50%, #B3E5FC 100%)' }}
            />
          </div>

          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[2rem] border border-white/20 p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,194,209,0.12) 0%, rgba(195,183,245,0.12) 50%, rgba(179,229,252,0.12) 100%)',
                backdropFilter: 'blur(30px)',
              }}
            >
              {/* 浮かぶ星 */}
              {[
                { top: '12%', left: '8%', size: 'w-6 h-6', color: '#FFC2D1', delay: 0 },
                { top: '20%', right: '12%', size: 'w-4 h-4', color: '#C3B7F5', delay: 0.4 },
                { bottom: '15%', left: '15%', size: 'w-5 h-5', color: '#FFE5A0', delay: 0.8 },
                { bottom: '20%', right: '8%', size: 'w-3 h-3', color: '#B8F3D8', delay: 1.2 },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ top: s.top, left: (s as any).left, right: (s as any).right, bottom: s.bottom }}
                  animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                >
                  <Star className={`${s.size} fill-current`} style={{ color: s.color, opacity: 0.6 }} />
                </motion.div>
              ))}

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-5xl mb-6 inline-block"
                >
                  ✨
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  さあ、教養の扉を<br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(90deg, #FFC2D1, #C3B7F5, #B3E5FC)' }}
                  >
                    開いてみよう。
                  </span>
                </h2>

                <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  古典文学から西洋絵画、クラシック音楽まで。<br />
                  サイドバーから気になるカテゴリーをどうぞ。
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/article/literature/genji"
                    className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-[#1a2744] transition-all hover:scale-105 hover:shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #FFC2D1, #C3B7F5)' }}
                  >
                    <BookOpen className="w-5 h-5" />
                    まずは源氏物語
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/article/art/monet"
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white border border-white/20 hover:border-white/50 transition-all hover:bg-white/5"
                  >
                    <Palette className="w-5 h-5 text-[#C3B7F5]" />
                    絵画を見る
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}