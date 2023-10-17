import * as React from 'react';

import { Outlet } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { menus } from './constants';

// TODO: Setup routes
function App() {
  return (
    <>
      <Outlet />
      <Navbar menus={menus} />
    </>
  )
}

export default App
