import { ReactComponentElement, ReactNode } from 'react';
import Main from '../Main';
import Sidebar from '../Sidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full overflow-y-visible">
        <Main>{children}</Main>
      </div>
    </div>
  );
}
