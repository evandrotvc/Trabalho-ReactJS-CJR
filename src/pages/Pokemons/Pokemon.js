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

  handleColor = (type) => {
    switch (type) {
      case 'grass':
          return '#9bcc50';
      case 'fire':
          return '#fd7d24';
      case 'poison':
          return '#b97fc9';
      case 'flying':
          return '#3dc7ef';
      case 'water':
          return '#4592c4';
      case 'bug':
          return '#729f3f';
      case 'normal':
          return '#a4acaf';
      case 'electric':
          return '#eed535';
      case 'ground':
          return '#ab9842';
      case 'fairy':
          return '#fdb9e9';
      case 'fighting':
          return '#d56723';
      case 'psychic':
          return '#f366b9';
      case 'rock':
          return '#a38c21';
      case 'steel':
          return '#9eb7b8';
      case 'ice':
          return '#51c4e7';
      case 'ghost':
          return '#7b62a3';
      case 'dragon':
          return '#f16e57';
      case 'dark':
          return '#707070';
      default:
          return;
    }
  }

  handleType = (string_type) => {
    let arr_type = string_type.split(';');
    if (arr_type.length == 1){
      return this.handleColor(arr_type[0]);      
    }
    else{
      return `linear-gradient(to bottom, ${this.handleColor(arr_type[0])}, ${this.handleColor(arr_type[1])})`
    }
  }

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
           style =  {{background: this.handleType(pokemon.kind)}}
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
