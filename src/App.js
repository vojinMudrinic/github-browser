import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import SearchPage from "./Pages/SearchPage";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchPage} />
      </div>
    </Router>
  );
}

export default App;
