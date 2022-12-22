import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import Error404 from './Components/Error404';
import SneakerDetail from './Components/SneakerDetail.jsx';
import AddSneaker from './Components/AddSneaker.jsx';
import './App.css';
import { CartProvider } from './Components/CardContex.jsx';
import FavContainer from './Components/FavContainer.jsx';
import  {Card} from './Components/Card.jsx';



export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/sneakers/:id"><CartProvider><SneakerDetail /></CartProvider></Route>
        <Route exact path="/sneakers"><CartProvider><Home /></CartProvider></Route>
        <Route exact path="/" component={Landing} />
        <Route exact path="/addSneaker" component={AddSneaker} />
        <Route exact path="/favorites" ><FavContainer><Card/></FavContainer></Route>
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
};
