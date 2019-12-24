import React from 'react';
import './../stylesheet/App.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import Amortization from './pages/Amortization';
import ExtraPayments from './pages/ExtraPayments';
import Graphs from './pages/Graphs';
import Footer from './Footer';
import NotFound404 from './pages/404';


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
              <Link to="/DebtFree/">Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: "/DebtFree/Amortization",
                  state: {
                    
                    from:"./MainStateApp.js"
                  }
                }
              }>Amortization New</Link>
            </li>
            <li>
              <Link to="/DebtFree/Extra_Payments">Extra Payments</Link>
            </li>
            <li>
              <Link to="/DebtFree/Graphs/Welcome/User">Graphs!</Link>
            </li>
          </ul>
        </header>
          <section id="main">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/DebtFree/Amortization" component={Amortization} />
              <Route exact path="/DebtFree/Extra_Payments" component={ExtraPayments}/>
              <Route exact path="/DebtFree/Graphs/:firstname/:lastname" component={Graphs} />
              <Route path="/saykaren.github.io/" component={Graphs}/>
              {/* <Route component={MainStateApp} /> */}
              <Route path="" component={NotFound404} />
            </Switch>
          </section>
        <Footer />
      </div>
    </Router>
              </>
  )
}

export default App;
