import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./containers/login/login.jsx";
import Register from "./containers/register/register.jsx"; 

import './App.css';

//import Components
import HeaderFija from "./containers/header/headerFija.jsx";
import Slider from "./containers/slider/slider.jsx";
import Error from "./containers/Error 404/error.jsx";
import Subheader from "./containers/Subheader/subheader.jsx";
import Sushimenu from "./containers/submenuCOMP/sushimenu.jsx";
import Entrantesmenu from "./containers/submenuCOMP/entrantesmenu.jsx";
import Antisushimenu from "./containers/submenuCOMP/antisushimenu.jsx";
import Dulcemenu from "./containers/submenuCOMP/dulcemenu.jsx";
import Bebidasmenu from "./containers/submenuCOMP/bebidasmenu.jsx";
import Pedidomenu from "./containers/pedidoMenu/pedidomenu.jsx";





//Usamos "className" porque solo "class" da lugar a confusión en jsx


function App() {
  return (
    <div className="App">

      <Router>

      <HeaderFija />


        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Slider} />
          <Route path="/menu" exact component={Pedidomenu} />
          <Route path="/sushi" exact component={Sushimenu} />
          <Route path="/entrantes" exact component={Entrantesmenu} />
          <Route path="/antisushi" exact component={Antisushimenu} />
          <Route path="/dulces" exact component={Dulcemenu} />
          <Route path="/bebidas" exact component={Bebidasmenu} />
          <Route component={Error} />  {/*Esta ruta siempre al final, es la del 404*/}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
