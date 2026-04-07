import { useParams, Link } from 'react-router';
import { Star, Sparkles, ChevronLeft } from 'lucide-react';
import { allMakuraDans } from '../../data/makura-dan-data';
import { Dan1 } from './makura/Dan1';
import { Dan2 } from './makura/Dan2';
import { Dan41 } from './makura/Dan41';
import { Dan42 } from './makura/Dan42';
import { Dan37 } from './makura/Dan37';
import { Dan38 } from './makura/Dan38';
import { Dan22 } from './makura/Dan22';
import { Dan28 } from './makura/Dan28';
import { Dan63 } from './makura/Dan63';
import { Dan75 } from './makura/Dan75';
import { Dan84 } from './makura/Dan84';
import { Dan105 } from './makura/Dan105';
import { Dan143 } from './makura/Dan143';
import { Dan145 } from './makura/Dan145';
import { Dan146 } from './makura/Dan146';
import { Dan150 } from './makura/Dan150';
import { Dan179 } from './makura/Dan179';
import { Dan184 } from './makura/Dan184';
import { Dan299 } from './makura/Dan299';
import { Dan301 } from './makura/Dan301';

export function MakuraDanDetail() {
  const { danId } = useParams();

  if (danId === 'dan-1') return <Dan1 />;
  if (danId === 'dan-2') return <Dan2 />;
  if (danId === 'dan-22') return <Dan22 />;
  if (danId === 'dan-28') return <Dan28 />;
  if (danId === 'dan-37') return <Dan37 />;
  if (danId === 'dan-38') return <Dan38 />;
  if (danId === 'dan-41') return <Dan41 />;
  if (danId === 'dan-42') return <Dan42 />;
  if (danId === 'dan-63') return <Dan63 />;
  if (danId === 'dan-75') return <Dan75 />;
  if (danId === 'dan-84') return <Dan84 />;
  if (danId === 'dan-105') return <Dan105 />;
  if (danId === 'dan-143') return <Dan143 />;
  if (danId === 'dan-145') return <Dan145 />;
  if (danId === 'dan-146') return <Dan146 />;
  if (danId === 'dan-150') return <Dan150 />;
  if (danId === 'dan-179') return <Dan179 />;
  if (danId === 'dan-184') return <Dan184 />;
  if (danId === 'dan-299') return <Dan299 />;
  if (danId === 'dan-301') return <Dan301 />;
  
  const danData = allMakuraDans.find(d => d.id === danId);

  if (!danData) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1B2B44]">
        <div className="text-center bg-[#2A3B5A] p-12 rounded-3xl border-4 border-white shadow-2xl relative z-10 w-full max-w-2xl mx-4">
            <h1 className="text-6xl font-black mb-4 text-[#FFC2D1]">404</h1>
            <p className="text-xl text-white/80 mb-8">お探しの段は見つかりませんでした。</p>
            <Link to="/article/literature/makuranososhi" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1B2B44] rounded-2xl font-bold hover:scale-105 transition-transform">
              <ChevronLeft className="w-5 h-5" />
              枕草子の目次に戻る
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden pb-16 bg-[#1B2B44]">
      {/* Sparkles */}
      <div className="absolute top-10 left-10 text-white/20 animate-pulse">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute top-40 right-10 text-white/20 animate-pulse delay-100">
        <Sparkles className="w-10 h-10 text-current" />
      </div>

      <div className="max-w-4xl mx-auto pt-16 px-6">
        <Link to="/article/literature/makuranososhi" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-5 h-5" />
          枕草子へ戻る
        </Link>

        {/* Header */}
        <div className="p-8 md:p-12 rounded-3xl border-4 border-white bg-gradient-to-br from-[#B8F3D8] to-[#FFE5A0] shadow-2xl relative">
          <div className="absolute -top-6 -right-6 text-6xl drop-shadow-xl">{danData.emoji}</div>
          <div className="inline-block px-4 py-2 bg-white/60 rounded-full mb-4 text-sm font-bold text-[#1B2B44]">
            大人の教養白書：Deep Report #02
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1B2B44] leading-tight mb-4">
            {danData.title}
          </h1>
          <p className="text-xl text-[#1B2B44]/90 font-medium">
            {danData.summary}
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 bg-[#2A3B5A] p-8 md:p-12 rounded-3xl border-2 border-white/20 shadow-xl">
          <div className="text-lg text-white/90 leading-loose whitespace-pre-wrap">
            {danData.content.trim()}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
            <Link to="/article/literature/makuranososhi" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFE5A0] to-[#B8F3D8] text-[#1B2B44] rounded-2xl font-bold border-4 border-white hover:scale-105 transition-transform shadow-lg">
              <Star className="w-5 h-5" />
              他の章も読んでみる
            </Link>
        </div>
      </div>
    </div>
  );
}
