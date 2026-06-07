import { useParams, Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { Birth } from './king-arthur/Birth';
import { Knights } from './king-arthur/Knights';
import { HolyGrail } from './king-arthur/HolyGrail';
import { Camelot } from './king-arthur/Camelot';
import { Avalon } from './king-arthur/Avalon';
import { History } from './king-arthur/History';

export function KingArthurStoryDetail() {
  const { storyId } = useParams();

  if (storyId === 'birth') return <Birth />;
  if (storyId === 'knights') return <Knights />;
  if (storyId === 'holygrail') return <HolyGrail />;
  if (storyId === 'camelot') return <Camelot />;
  if (storyId === 'avalon') return <Avalon />;
  if (storyId === 'history') return <History />;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1B2B44]">
      <div className="text-center bg-[#2A3B5A] p-12 rounded-[2.5rem] border-4 border-white shadow-2xl relative z-10 w-full max-w-2xl mx-4">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-[#FFD6A5] to-[#FFC2D1] bg-clip-text text-transparent">404</h1>
          <p className="text-xl text-white/80 mb-8">お探しのストーリーは現在準備中です。</p>
          <Link to="/article/mythology/king-arthur" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B2B44] rounded-2xl font-bold hover:scale-105 transition-transform border-2 border-white">
            <ChevronLeft className="w-5 h-5" />
            アーサー王伝説の深淵に戻る
          </Link>
      </div>
    </div>
  );
}
