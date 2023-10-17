import * as React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { menus } from './constants';


// TODO: Setup routes
function App() {
  return (
    <>
      <Navbar menus={menus} />
    </>
  )
}

export default App
