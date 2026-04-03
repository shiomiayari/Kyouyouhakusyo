import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <ScrollToTop />
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}