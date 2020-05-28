import React, { Component } from 'react';
import { getPokemons } from '../../services/pokemon';
import './Pokemons.css';

class App extends Component{

  state = {
    pokemons: [],
    pokemonInfo: {},
    pages: 1,
  }

  componentDidMount(){
    this.loadPokemon();
  }

  loadPokemon = async (pages = 1) => {
    const response = await getPokemons(pages);

    console.log (response.data); 

    const {data, ...pokemonInfo} = response.data;

    this.setState({ pokemons: data, pokemonInfo});
  }

  prevPage = () => {
    const {pages, pokemonInfo} = this.state;

    if (pokemonInfo.prev_page === null) return;

    const pageNum = pages - 1;

    this.setState({pages: pageNum});
    
    this.loadPokemon(pageNum);
  }

  nextPage = () => {
    const {pages, pokemonInfo} = this.state;

    if (pokemonInfo.next_page === null) return;

    const pageNum = pages + 1;

    this.setState({pages: pageNum});

    this.loadPokemon(pageNum);
  }

  render(){

    const { pokemons } = this.state;
    
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <div className= "pokedex">
        {pokemons.map(pokemon => (
          <span key={pokemon.id} className="pokemonCard">
            <img src = {pokemon.image_url} alt="pokemon"></img>
            <span>              
              {pokemon.name}
            </span>
          </span>
        ))}
        </div>
        <div className="pageButtons">
          <button onClick= {this.prevPage}>Voltar</button>
          <button onClick= {this.nextPage}>Avançar</button>
        </div>
      </div>
    );
  }
}

export default App;
