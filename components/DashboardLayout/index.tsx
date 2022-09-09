import { ReactComponentElement, ReactNode } from 'react';
import Footer from '../Footer';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', (url: string) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="lg:flex lg:bg-none bg-smallScreen bg-center bg-no-repeat h-screen lg:h-auto">
      <Sidebar />
      <div className="w-full overflow-y-visible">
        <Main>
          {children}
          <Footer></Footer>
        </Main>
      </div>
    </div>
  );
}
