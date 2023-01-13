import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Ourteam from './components/Ourteam';
import Services from './components/Services';
import Contact from './components/Contact';
import  Employement from './components/Employement'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


 
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
          <Route exact path="/Ourteam">
            <Ourteam />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Services">
            <Services/>
          </Route>
          <Route exact path="/Employement">
            <Employement/>
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
    </Switch>
    </Router>
    </> 
  );
}

export default App;
