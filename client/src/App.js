import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import Error404 from './Components/Error404';
import SneakerDetail from './Components/SneakerDetail.jsx';
import './App.css';
import { CartProvider } from './Components/CardContex.jsx';
import ProtectedRoute from './auth/protected-route.js';
import Profile from './Components/Profile.jsx';

import Dashboard from './Components/Dashboard.jsx';

import UserForm from  './Components/LoginForm.jsx'


import  {FavProvider} from './Components/FavContainerContext.jsx';
import DashboardNewProduct from './Components/DashboardNewProduct.jsx';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/sneakers/:id"><FavProvider ><CartProvider><SneakerDetail /></CartProvider></FavProvider></Route>
        <Route exact path="/sneakers"><FavProvider><CartProvider><Home /></CartProvider></FavProvider></Route>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/newProduct" component={DashboardNewProduct}/>
        <ProtectedRoute exact path="/profile" component={Profile}/>

        <ProtectedRoute exact path="/admin" component={Dashboard}/>

        <ProtectedRoute exact path="/userform" component={UserForm}/>
        

        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
};
