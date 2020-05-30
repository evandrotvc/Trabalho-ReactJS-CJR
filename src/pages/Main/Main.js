import React from 'react';
import { Router } from "@reach/router";

import Home from '../Home';
import PerfilPokemon from '../PerfilPokemon/PerfilPokemon'
import Header from '../../Components/Header/Header';
import Login from '../Login';
import Pokemon from '../Pokemons/Pokemon';
import NotFound from '../NotFound';
import Footer from '../../Components/Footer'
import './Main.css';
import User from '../User';
import LogOut from '../../components/LogOut';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/login"/>
        <User path="/users/:username" />
        <LogOut path="/sair" />
        <Pokemon path="/"/>
        <Home path = "/home" />
        <PerfilPokemon path = "/pokemons/:name"/>
        <NotFound default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;