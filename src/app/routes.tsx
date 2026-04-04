import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Author } from './pages/Author';
import { GenjiMonogatari } from './pages/articles/GenjiMonogatari';
import { MakuraNoSoshi } from './pages/articles/MakuraNoSoshi';
import { Dan1 } from './pages/articles/makura/Dan1';
import { Dan2 } from './pages/articles/makura/Dan2';
import { Dan41 } from './pages/articles/makura/Dan41';
import { Dan42 } from './pages/articles/makura/Dan42';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'author', Component: Author },
      { path: 'article/literature/genji', Component: GenjiMonogatari },
      { path: 'article/literature/makura', Component: MakuraNoSoshi },
      { path: 'article/literature/makura/dan-1', Component: Dan1 },
      { path: 'article/literature/makura/dan-2', Component: Dan2 },
      { path: 'article/literature/makura/dan-41', Component: Dan41 },
      { path: 'article/literature/makura/dan-42', Component: Dan42 },
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