import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <div>{children}</div>;
}

export default Main;
