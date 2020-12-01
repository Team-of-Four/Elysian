import './App.css';
import Home from './components/Home'
import Landing from './components/Landing'
import UserDetails from './components/UserDetails'
import Album from './components/Album';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/userdetails'>
            <UserDetails />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/album'>
            <Album />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
