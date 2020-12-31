
import './App.scss';
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
      <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
