import React from 'react';
import './../stylesheet/App.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import Amortization from './pages/Amortization';
import ExtraPayments from './pages/ExtraPayments';
import Graphs from './pages/Graphs';
import Footer from './Footer';


import MainStateApp from './MainStateApp';

const App = ()=>{
  return(
    <>
    {/* <MainStateApp /> */}
    <Router>
    <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: "/Amortization",
                  state: {
                    
                    from:"./MainStateApp.js"
                  }
                }
              }>Amortization</Link>
            </li>
            <li>
              <Link to="/Extra_Payments">Extra Payments</Link>
            </li>
            <li>
              <Link to="/Graphs/Welcome/User">Graphs!</Link>
            </li>
          </ul>
        </header>
          <section id="main">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Amortization" component={Amortization} />
              <Route exact path="/Extra_Payments" component={ExtraPayments}/>
              <Route exact path="/Graphs/:firstname/:lastname" component={Graphs} />
            </Switch>
          </section>
        <Footer />
      </div>
    </Router>
              </>
  )
}

export default App;
