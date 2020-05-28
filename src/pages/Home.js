import React , {useState, useEffect} from 'react'

import axios from 'axios'
import { Link } from '@reach/router'
const Home = () => {
    const [Pokemons , setPokemons] = useState([])
    useEffect(() => {
        async function LoadPokemons(){
            const response = await axios.get('https://pokedex20201.herokuapp.com/pokemons')
            //  console.log(response.data.data)
             setPokemons(response.data.data)
        }
        LoadPokemons()
        
    }, [])
    return (
        <>
        
        <Link to = "/bumb">
        <button><span>Aquiii    </span>  </button>
        </Link>
      <h1>Home page</h1>
        
        { Pokemons.map(pokemon => (
            <div  key ={pokemon.id} >
                <img src= {pokemon.image_url} alt= {pokemon.name}/>
            </div>
         
            
         ) )
        }
        
         
       </> 
     
    )
}

export default Home