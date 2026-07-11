import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { ScrollToTop } from './ScrollToTop';
import { ReactLenis } from 'lenis/react';

export function Layout() {
  return (
    <ReactLenis root>
      <div className="flex min-h-screen">
        <ScrollToTop />
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </ReactLenis>
  );
}