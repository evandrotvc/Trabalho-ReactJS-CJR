import React from 'react';
import {Router} from "@reach/router";
import Header from '../components/Header';
import Login from './Login'
import './Main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/"/>
      </Router>
    </div>
  );
}

export default App;
