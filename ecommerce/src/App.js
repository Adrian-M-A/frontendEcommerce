import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./containers/login/login.jsx";
import Register from "./containers/register/register.jsx"; 

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
