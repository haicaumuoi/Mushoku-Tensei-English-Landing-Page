import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <div className="hidden lg:block">{children}</div>;
}

export default Main;
