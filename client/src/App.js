import React, {useState} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Cards from './components/Cards/Cards';
import Illustrations from './components/Illustration/Illustrations';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState)
  }

  const backDropClickHandler = () => {
    setSideDrawerOpen(false)
  };

  let sideDrawer;
  let backDrop;
  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer/>;
    backDrop = <Backdrop click={backDropClickHandler}/>;
  }

  return (
    <div className="App">
      <Navbar drawerClickHandler={drawerToggleClickHandler}/>
      {sideDrawer}
      {backDrop}
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
