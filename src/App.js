import React, { Component } from 'react';
import api from './api';
import './App.css';

class App extends Component{

  state = {
    pokemons: [],
  }

  async componentDidMount(){
    const response = await api.get('/pokemons');

    console.log (response.data); 

    this.setState({ pokemons: response.data.data});
  }

  render(){

    const { pokemons } = this.state;

    return (
      <div className="App">
        <h1>Pokemons</h1>
        {pokemons.map(pokemon => (
          <span key={pokemon.id}>
            <img src = {pokemon.image_url}></img>
            <span>              
              {pokemon.name}
            </span>
          </span>
        ))}

          {/* <button onClick= {this.prevPage}>Voltar</button>
          <button onClick= {this.nextPage}>Avançar</button> */}
      </div>
    );
  }
}

export default App;
