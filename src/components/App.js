import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
