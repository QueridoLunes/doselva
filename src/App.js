import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Product from "./containers/Product/Product";
import Impact from "./containers/Impact/Impact";
import About from "./containers/About/About";
import Quality from "./containers/Quality/Quality";
import Stories from "./containers/Stories/Stories";
import Contact from "./containers/Contact/Contact";
import "./App.scss";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/product" component={Product} />
        <Route exact path="/impact" component={Impact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quality" component={Quality} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;