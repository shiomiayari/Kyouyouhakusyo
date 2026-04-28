import { useParams, Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { GionShoja } from './heike/GionShoja';
import { Atsumori } from './heike/Atsumori';
import { NasuNoYoichi } from './heike/NasuNoYoichi';
import { Dannoura } from './heike/Dannoura';

export function HeikeEpisodeDetail() {
  const { episodeId } = useParams();

  if (episodeId === 'gion') return <GionShoja />;
  if (episodeId === 'atsumori') return <Atsumori />;
  if (episodeId === 'yoichi') return <NasuNoYoichi />;
  if (episodeId === 'dannoura') return <Dannoura />;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1a2e]">
      <div className="text-center bg-[#1f1f3a] p-12 rounded-[2.5rem] border-4 border-white shadow-2xl relative z-10 w-full max-w-2xl mx-4">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-[#FF4D4D] to-[#4D79FF] bg-clip-text text-transparent">404</h1>
          <p className="text-xl text-white/80 mb-8">お探しのアピソードは見つかりませんでした。</p>
          <Link to="/article/literature/heike" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a2e] rounded-2xl font-bold hover:scale-105 transition-transform border-2 border-white">
            <ChevronLeft className="w-5 h-5" />
            平家物語の目次に戻る
          </Link>
      </div>
    </div>
  );
}
