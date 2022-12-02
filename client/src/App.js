
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Home from './Components/Home.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Landing}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
