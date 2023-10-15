import * as React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Menu } from './components/Navbar/Navbar.types';
import { Dashboard, Logout, PageContents, SocialAccounts } from './components/Icons/Icons';

const menus: Menu[] = [
  {
    name: 'Dashboard',
    icon: Dashboard,
    path: '/dashboard'
  },
  {
    name: 'Social Accounts',
    icon: SocialAccounts,
    path: '/social-accounts'
  },
  {
    name: 'Page contents',
    icon: PageContents,
    path: '/page-contents'
  },
  {
    name: 'Logout',
    icon: Logout,
    action: () => alert('logout'),
  },
];

// TODO: Setup routes
function App() {
  return (
    <>
      <Navbar menus={menus} />
    </>
  )
}

export default App
