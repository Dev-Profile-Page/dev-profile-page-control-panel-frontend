import * as React from 'react';
import { Logo } from '../components/Logo/Logo';

export type LayoutProps = {
  isLogoCenter?: boolean,
} & React.PropsWithChildren;

export function Layout({ children, isLogoCenter=false }: LayoutProps) {
  return (
    <main style={{padding: 30}}>
      <div style={{display: 'flex', justifyContent: isLogoCenter ? 'center': 'start'}}>
        <Logo />
      </div>
      {children}
    </main>
  );
}