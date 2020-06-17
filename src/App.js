import React from 'react';
import {
  BrowserRouter as Router,
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
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
      <GlobalStyles />
      <Header />
      <BurgerMenu />
      <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route path='/plants-accessories' component={LivePlants} />
      <Route exact path='/checkout' component={Checkout} />
      </Switch> 
    </ScrollToTop>
    </Router>
  )
}

export default App;
