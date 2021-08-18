import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from './components/Home';
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Gmail } from "./pages/Gmail";
import { Images } from "./pages/Images";


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/store" component={Store} /> 
        <Route exact path="/gmail" component={Gmail} /> 
        <Route exact path="/images" component={Images} /> 
      </Switch>
    </div>
  );
}

export default App;
