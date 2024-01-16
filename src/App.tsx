import * as React from 'react';

import { Outlet } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { menus } from './constants';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Outlet />

      {
        location.pathname === "/"
        ? null
        : <Navbar menus={menus} />
      }
    </AuthProvider>
  )
}

export default App
