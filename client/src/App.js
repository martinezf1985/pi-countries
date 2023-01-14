import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import { ActivityCreate } from './components/activityCreate/ActivityCreate';
import { Details } from './components/Details/Details'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route path = '/activity' component = { ActivityCreate }/>
        <Route path = '/home/:id' component = { Details }/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
