import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Author } from './pages/Author';
import { GenjiMonogatari } from './pages/articles/GenjiMonogatari';
import { MakuraNoSoshi } from './pages/articles/MakuraNoSoshi';
import { MakuraDanDetail } from './pages/articles/MakuraDanDetail';
import { HeianCulture } from './pages/articles/culture/HeianCulture';
import { HeikeMonogatari } from './pages/articles/HeikeMonogatari';
import { HeikeEpisodeDetail } from './pages/articles/HeikeEpisodeDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'author', Component: Author },
      { path: 'article/literature/genji', Component: GenjiMonogatari },
      { path: 'article/literature/makuranososhi', Component: MakuraNoSoshi },
      { path: 'article/literature/makura/:danId', Component: MakuraDanDetail },
      { path: 'article/literature/heian', Component: HeianCulture },
      { path: 'article/literature/heike', Component: HeikeMonogatari },
      { path: 'article/literature/heike/:episodeId', Component: HeikeEpisodeDetail },
      {
        path: '*',
        Component: () => (
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="text-center">
              <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-[#FFC2D1] to-[#C3B7F5] bg-clip-text text-transparent">404</h1>
              <p className="text-xl text-white/70 mb-8">
                お探しのページが見つかりませんでした。
              </p>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFC2D1] to-[#C3B7F5] text-[#1B2B44] rounded-2xl hover:shadow-lg transition-all font-bold border-2 border-white"
              >
                ホームに戻る
              </a>
            </div>
          </div>
        ),
      },
    ],
  },
]);