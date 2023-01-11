import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import Error404 from './Components/Error404';
import SneakerDetail from './Components/SneakerDetail.jsx';
import './App.css';
import ProtectedRoute from './Auth/protected-route.js';
import Profile from './Components/Profile.jsx';

import Dashboard from './Components/Dashboard.jsx';
import DashboardPurchases from './Components/DashboardPurchases.jsx';
import UserForm from './Components/LoginForm.jsx'



import { CartProvider } from './Components/CardContex.jsx';
import { FavProvider } from './Components/FavContainerContext.jsx';

import DashboardNewProduct from './Components/DashboardNewProduct.jsx';
import CheckoutForm from './Components/CheckoutForm.jsx';
import DashboardUsers from './Components/DashboardUsers.jsx';
import FormEdit from './Components/FormEdit.jsx';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/sneakers/:id"><FavProvider ><CartProvider><SneakerDetail /></CartProvider></FavProvider></Route>
        <Route exact path="/sneakers"><FavProvider><CartProvider><Home /></CartProvider></FavProvider></Route>
        <Route exact path="/checkoutForm"><CartProvider><CheckoutForm /></CartProvider></Route>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/updateSneaker/:id" component={FormEdit} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/admin" component={Dashboard} />
        <ProtectedRoute exact path="/purchases" component={DashboardPurchases} />
        <ProtectedRoute exact path="/userform" component={UserForm} />
        <ProtectedRoute exact path="/users" component={DashboardUsers} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
};
