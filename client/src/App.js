import React from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
const App = () => {
  return (
    <div className="App">
      <LandingPage/>
      <Cards/>
    </div>
  );
}

export default App;
