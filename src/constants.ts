import { Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard/Dashboard';
import { SocialAccounts } from './pages/SocialAccounts/SocialAccounts';
import { PageContents } from './pages/PageContents/PageContents';
import { Dashboard as DashboardIcon, Logout as LogoutIcon, PageContents as PageContentsIcon, SocialAccounts as SocialAccountsIcon } from './components/Icons/Icons';
import { Menu } from "./components/Navbar/Navbar.types";
import { logout } from './features/auth/auth.slice';
import { LocalStorageKeys, removeLocalStorage } from './utils/localstorage.utils';

export const menus: Menu[] = [
    {
      name: 'Dashboard',
      icon: DashboardIcon,
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'Social Accounts',
      icon: SocialAccountsIcon,
      path: '/social-accounts',
      component: SocialAccounts,
    },
    {
      name: 'Page contents',
      icon: PageContentsIcon,
      path: '/page-contents',
      component: PageContents
    },
    {
      name: 'Logout',
      icon: LogoutIcon,
      action: (dispatch: Dispatch, navigate: NavigateFunction) => {
        dispatch(logout());
        removeLocalStorage(LocalStorageKeys.ACCESS_TOKEN);
        navigate('/');
      },
    },
];