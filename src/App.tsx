import * as React from 'react';

import { RouterProvider } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { menus } from './constants';
import { router } from './router.tsx';

// TODO: Setup routes
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Navbar menus={menus} />
    </>
  )
}

export default App
