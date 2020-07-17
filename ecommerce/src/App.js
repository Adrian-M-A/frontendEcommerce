import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./containers/login/login.jsx";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
