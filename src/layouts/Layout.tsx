import * as React from 'react';
import { Logo } from '../components/Logo/Logo';

export type LayoutProps = {} & React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <main style={{padding: 10}}>
      <Logo />
      {children}
    </main>
  );
}