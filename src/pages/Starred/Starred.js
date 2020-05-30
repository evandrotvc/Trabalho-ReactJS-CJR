import React , {useState } from 'react'
import  styles from './Starred.module.css'
const Starred = ({username , pokemon}) => {
    const [Username , setUsername] = useState ( () =>
    {
        const getTodos = localStorage.getItem('@React:pokemons')
        if(getTodos){
            return JSON.parse(getTodos)        
        }

        return '';

    })
    return (
        <>
        <h1>Favoritados</h1>
        <h2>{username}</h2>
        <div className= {styles.card}>
        {Username.starred.map(pokemon => (            
          <img className= {styles.imagem} src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`}  alt= "pokemon" />
                        
        ))}
        </div>
        
        </>
    )
}

export default Starred