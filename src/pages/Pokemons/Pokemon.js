import React, { Component } from 'react';
import {Link} from '@reach/router'
import { getPokemons } from '../../services/pokemon';
import './Pokemons.css';
import Modal from '../../Components/Modal';

class App extends Component{

  pokemonProfile(){};

  state = {
    pokemons: [],
    pokemonInfo: {},
    pages: 1,
    setPokemonProfile: false,
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

  handlePokemonProfile = (show) => {this.setState({setPokemonProfile:show})}

  render(){

    const { pokemons } = this.state;
    
    return (
      <div className="App">
        <h1>Pokemons</h1>

        {this.state.setPokemonProfile ? (
        <Modal setPokemonProfile={this.handlePokemonProfile.bind(this)} />
        ) : null}

        <div className= "pokedex">
        {pokemons.map(pokemon => (
          <div key={pokemon.id} 
          onClick={() => this.setState({setPokemonProfile: true})}
           className="pokemonCard"
           >
           {/* <Link to= {`/pokemons/${pokemon.name}`}> */}
            <img src = {pokemon.image_url} alt="pokemon"></img>
            <div>              
              {pokemon.name}
            </div>
          {/* </Link> */}

          </div>
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
