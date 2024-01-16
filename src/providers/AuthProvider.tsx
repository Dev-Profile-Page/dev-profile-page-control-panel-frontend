import React, { Fragment, PropsWithChildren, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { LocalStorageKeys, getLocalStorage, removeLocalStorage } from '../utils/localstorage.utils';

export type AuthProviderProps = {  } & PropsWithChildren;

export function AuthProvider({ children }: AuthProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const accessTokenLocalStorage = getLocalStorage(LocalStorageKeys.ACCESS_TOKEN);
  
  const currentPath = location.pathname;

  useEffect(() => {
    if(accessToken || accessTokenLocalStorage) {
      const isIndexOrRootURL = (currentPath === '/auth-callback') || (currentPath === '/');
      const navigateTo = isIndexOrRootURL ? '/dashboard': currentPath
      navigate(navigateTo);
    } else {
      removeLocalStorage(LocalStorageKeys.ACCESS_TOKEN);
      navigate('/');
    }
  }, [accessToken, currentPath]);

  return (
    <Fragment>
      { children }
    </Fragment>
  );
}