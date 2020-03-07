import React from 'react';
import './App.css';
import Info from './Info'

import Form from './Form';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


class App extends React.Component {
  
  render(){
  return (
    <div className="App">
       <Router>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark">

  <Link to={"/"} className="navbar-brand" href="#">React Sample</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Link</a>
         */}
         <Link to={"/show"} className="nav-link">Show Data</Link>
      </li>
    </ul>
  </div>
</nav>
<Switch>
    {/* <Route exact path="/" component={App}></Route> */}
    <Route exact path="/" component={Form} />
    <Route exact path="/show" component={ Info } />
</Switch>
</Router> 
    </div>
  );
}
}

export default App;
