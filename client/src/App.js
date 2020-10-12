import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import GridImages from './components/GridImages/GridImages';

const App = () => {
  return (
    <div className="App">
      <div className='App__navbar'>
        <Navbar/>
      </div>
      <div className='landing-page'>
        <LandingPage/>
      </div>
      
      <div className='container'>
        <div className='container__about'>
          <About/>
        </div>

        <div className='container_grid-images'>
          <GridImages/>
        </div>
      </div>

      <div className='container__cards'>
          <Cards/>
      </div>
    </div>
  );
}

export default App;
