import React, {useState} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Service from './components/Service/Service';
import Cards from './components/Cards/Cards';
import Illustrations from './components/Illustration/Illustrations';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Contact from './components/Footer/Footer';

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState)
  }

  const backDropClickHandler = () => {
    setSideDrawerOpen(false)
  };

  let backDrop;
  if (sideDrawerOpen) {
    backDrop = <Backdrop click={backDropClickHandler}/>;
  }

  return (
    <div className="App">
      <Navbar drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer showSideDrawer={sideDrawerOpen}/>
      {backDrop}
      <LandingPage/>
      <Service/>
      <Cards/>
      <Illustrations/>
      <Contact/>
    </div>
  );
}

export default App;
