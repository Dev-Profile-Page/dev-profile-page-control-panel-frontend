import * as React from 'react';

import { Outlet } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { menus } from './constants';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Navbar menus={menus} />
    </>
  )
}

export default App
