import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import loader from './pages/loader/index.js';
import home from './pages/home/index.js';

function App() {
  return (
    <Router>
      <ul style={{ "display": "none" }}>
        <li>
          <Link to="/">Loader</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <Route path="/" exact component={loader} />
      <Route path="/home" component={home} />
    </Router>
  );
}

export default App;
