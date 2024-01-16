import * as React from 'react';

import { useLocation } from 'react-router-dom';

import { Logo } from '../components/Logo/Logo';
import { Navbar } from '../components/Navbar/Navbar';
import { menus } from '../constants';
import { AuthProvider } from '../providers/AuthProvider';

export type LayoutProps = {
  isLogoCenter?: boolean,
} & React.PropsWithChildren;

export function Layout({ children, isLogoCenter=false }: LayoutProps) {
  const location = useLocation();
  return (
    <main style={{padding: 30}}>
      <div style={{display: 'flex', justifyContent: isLogoCenter ? 'center': 'start'}}>
        <Logo />
      </div>
      <AuthProvider>
        {children}
        {
          location.pathname === "/"
          ? null
          : <Navbar menus={menus} />
        }
      </AuthProvider>
    </main>
  );
}