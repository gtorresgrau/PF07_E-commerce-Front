import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import Error404 from './Components/Error404';
import SneakerDetail from './Components/SneakerDetail.jsx';
import './App.css';

export default function App() {
  return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/sneakers/:id" component={SneakerDetail} /> */}
          <Route exact path="/sneakers/:id"><SneakerDetail /></Route>
          <Route exact path="/sneakers" component={Home} />
          <Route exact path="/" component={Landing} /> 
          <Route path="*" component={Error404} />
        </Switch>
      </div>
  );
};
