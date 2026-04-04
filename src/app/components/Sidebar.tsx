import { Link, useLocation } from 'react-router';
import { BookOpen, Palette, TrendingUp, Music, History, ChevronRight, Menu, X, User, Info } from 'lucide-react';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
  color: string;
  articles: { id: string; title: string }[];
}

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('literature');

  const categories: Category[] = [
    {
      id: 'literature',
      name: '日本の古典文学',
      icon: <BookOpen className="w-5 h-5" />,
      color: '#FFC2D1',
      articles: [
        { id: 'genji', title: '源氏物語' },
        { id: 'makura', title: '枕草子' },
        { id: 'heike', title: '平家物語' },
        { id: 'taketori', title: '竹取物語' },
      ],
    },
    {
      id: 'art',
      name: '西洋絵画',
      icon: <Palette className="w-5 h-5" />,
      color: '#C3B7F5',
      articles: [
        { id: 'monalisa', title: 'モナ・リザ' },
        { id: 'starrynight', title: '星月夜' },
        { id: 'thedream', title: '夢' },
      ],
    },
    {
      id: 'economy',
      name: '政治・経済',
      icon: <TrendingUp className="w-5 h-5" />,
      color: '#B3E5FC',
      articles: [
        { id: 'capitalism', title: '資本主義の歴史' },
        { id: 'democracy', title: '民主主義とは' },
      ],
    },
    {
      id: 'music',
      name: 'クラシック音楽',
      icon: <Music className="w-5 h-5" />,
      color: '#FFE5A0',
      articles: [
        { id: 'beethoven', title: 'ベートーヴェン交響曲第9番' },
        { id: 'mozart', title: 'モーツァルト：レクイエム' },
      ],
    },
    {
      id: 'history',
      name: '世界史',
      icon: <History className="w-5 h-5" />,
      color: '#B8F3D8',
      articles: [
        { id: 'roman', title: 'ローマ帝国の興亡' },
        { id: 'french', title: 'フランス革命' },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-[#1B2B44]">
      <div className="p-6 border-b border-white/15">
        <Link to="/" className="block">
          <div className="text-2xl font-black text-center mb-2">
            <span className="bg-gradient-to-r from-[#FFC2D1] via-[#C3B7F5] to-[#B8F3D8] bg-clip-text text-transparent">
              大人の
            </span>
          </div>
          <div className="text-2xl font-black text-center">
            <span className="bg-gradient-to-r from-[#FFC2D1] via-[#C3B7F5] to-[#B8F3D8] bg-clip-text text-transparent">
              教養白書
            </span>
          </div>
          <div className="text-xs text-white/60 text-center mt-2">Knowledge Base</div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group ${
                  expandedCategory === category.id 
                    ? 'bg-[#2A3B5A]' 
                    : 'hover:bg-[#2A3B5A]/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-white shadow-lg"
                    style={{ backgroundColor: category.color }}
                  >
                    <div className="text-[#1B2B44]">
                      {category.icon}
                    </div>
                  </div>
                  <span className="font-medium text-sm text-white">{category.name}</span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform text-white/60 ${
                    expandedCategory === category.id ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {expandedCategory === category.id && (
                <div className="mt-2 ml-6 space-y-1">
                  {category.articles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${category.id}/${article.id}`}
                      className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                        location.pathname === `/article/${category.id}/${article.id}`
                          ? 'font-medium bg-[#2A3B5A]'
                          : 'text-white/70 hover:text-white hover:bg-[#2A3B5A]/50'
                      }`}
                      style={
                        location.pathname === `/article/${category.id}/${article.id}`
                          ? { color: category.color }
                          : {}
                      }
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-white/15 space-y-3">
        <Link
          to="/about"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#B8F3D8] to-[#B3E5FC] text-[#1B2B44] rounded-xl hover:shadow-lg transition-all font-bold border-2 border-white"
        >
          <Info className="w-4 h-4" />
          このサイトについて
        </Link>
        <Link
          to="/author"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#FFC2D1] to-[#C3B7F5] text-[#1B2B44] rounded-xl hover:shadow-lg transition-all font-bold border-2 border-white"
        >
          <User className="w-4 h-4" />
          作者について
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-[#FFC2D1] rounded-xl shadow-lg flex items-center justify-center border-2 border-white text-[#1B2B44]"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-80 bg-[#1B2B44] border-r border-white/15 z-40 transition-transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}