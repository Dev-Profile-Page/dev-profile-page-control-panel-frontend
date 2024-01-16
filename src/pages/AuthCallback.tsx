import React from 'react';

import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { LocalStorageKeys, setLocalStorage } from '../utils/localstorage.utils';
import { login } from '../features/auth/auth.slice';
import { AuthProvider } from '../providers/AuthProvider';

export function AuthCallbackPage() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const dispatch = useDispatch();

  if(searchParams) {
    const accessToken = searchParams.get('accessToken');

    if(accessToken) {
      setLocalStorage(LocalStorageKeys.ACCESS_TOKEN, accessToken);
      setSearchParams(new URLSearchParams());
      dispatch(login({ accessToken }));
    }
  }

  return (
    <AuthProvider>
      <div>
        <h3>Redirecting you to the dashboard...</h3>
      </div>
    </AuthProvider>
  );
}