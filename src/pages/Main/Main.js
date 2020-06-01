import React from 'react';
import { Router } from "@reach/router";

import Home from '../Home';
import PerfilPokemon from '../PerfilPokemon/PerfilPokemon'
import Header from '../../components/Header/Header';
import Login from '../Login/Login';
import Pokemon from '../Pokemons/Pokemon';
import PerfilUser from '../PerfilUser/PerfilUser';
import NotFound from '../NotFound';
import Footer from '../../components/Footer'

import './Main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/users/"/>
        <Pokemon path="/pokemons"/>
        <Home path = "/home" />
        <PerfilPokemon path = "/pokemons/:name"/>
        <PerfilUser path = "/users/:username" />
        <NotFound default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;