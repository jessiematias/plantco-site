import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import BurgerMenu from './components/Burger/BurgerMenu'
import LivePlants from './pages/Shop';
import ScrollToTop from 'react-router-scroll-top'
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
      <ScrollToTop>
      <GlobalStyles />
      <Header />
      <BurgerMenu />
      <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route path='/plants-accessories' component={LivePlants} />
      <Route path='/checkout' component={Checkout} />
      </Switch> 
    </ScrollToTop>
  )
}

export default App;
