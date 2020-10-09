import React from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
const App = () => {
  return (
    <div className="App">
      <div className='navbar'>
        <h1>deboodle</h1>
      </div>
      <LandingPage/>
    </div>
  );
}

export default App;
