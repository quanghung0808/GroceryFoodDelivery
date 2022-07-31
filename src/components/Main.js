import React, { Component, Suspense, lazy } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
const FoodDetail = React.lazy(() => import('./FoodDetail'));
const Cart = React.lazy(() => import('./Cart'));
const Footer = React.lazy(() => import('./Footer'));
const Home = React.lazy(() => import('./Home'));
const Menu = React.lazy(() => import('./Menu'));
const Navbar = React.lazy(() => import('./Navbar'));
const Service = React.lazy(() => import('./Service'));

class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/menu/:category' component={Menu} />
            <Route exact path='/menu/:category/:foodID' component={FoodDetail} />
            <Route exact path='/service' component={Service} />
            <Route exact path='/cart' component={Cart} />
            <Redirect to="/home" />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default withRouter((Main));
