import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import NavItem from './components/Navbar/NavItem/NavItem';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Illustrations from './components/Illustration/Illustrations';

const App = () => {
  return (
    <div className="App">
      <Navbar>
        <NavItem value='About'/>
        <NavItem value='Cards'/>
        <NavItem value='Illustrations'/>
        <NavItem value='Order'/>
      </Navbar>


      <div className='landing-page'>
        <LandingPage/>
      </div>
      
      <div className='container'>
        <div className='container__about'>
          <About/>
        </div>

        <div className='container_grid-images'>
          <Cards/>
        </div>
      </div>

      <div className='container__cards'>
          <Illustrations/>
      </div>
    </div>
  );
}

export default App;
