import Logo from './Components/Logo';
import Tabs from './Components/Tabs';
import Button from './Components/Button';
import LeftSide from './Components/LSide';
import RightSide from './Components/RSide';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='head'>
        <Logo />
        <Tabs />
        <Button />
      </div>
      <div className='section'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;