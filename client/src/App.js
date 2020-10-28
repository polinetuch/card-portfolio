import React, {useState} from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import OrderForm from './components/Form/OrderForm';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <Router>
        <Navbar drawerClickHandler={drawerToggleClickHandler}/>
        <Switch>
          <Route path='/order-form'><OrderForm/></Route>
          <Route path='/'><Home/></Route>
          </Switch>
        <SideDrawer showSideDrawer={sideDrawerOpen}/>
        {backDrop}
      </Router>

    </div>
  );
}

export default App;
