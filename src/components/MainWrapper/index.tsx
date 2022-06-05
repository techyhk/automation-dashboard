import React, { ReactNode } from 'react';

interface MainWrapperProps {
  children: ReactNode;
}

export const MainWrapper = (props: MainWrapperProps) => {
  return <div className="p-5">{props.children}</div>;
};
