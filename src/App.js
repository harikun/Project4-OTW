
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from './pages/About/AboutUs'
import Home from './pages/Home/Home'
import HowtoOrder from './pages/Order/HowtoOrder'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../src/Asset/Images/logo.jpg'
import Footer from './pages/Order/Footer';

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3" >
        <a className="navbar-brand"  to="/">
        <img src={logo} width="30" height="30" className="d-inline-block" alt="logo-otw" loading="lazy" id="logo" />
           Online Trans Walk</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link  className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">How to Order</Link>
            </li>
          </ul>
        </div>
      </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/order">
            <HowtoOrder />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
