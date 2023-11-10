import * as React from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { menus } from './constants';
import { Layout } from './layouts/Layout';

function App() {
  const location = useLocation();

  return (
    <>
      <Layout isLogoCenter>
        <Outlet />
      </Layout>

      {
        location.pathname === "/"
        ? null
        : <Navbar menus={menus} />
      }
    </>
  )
}

export default App
