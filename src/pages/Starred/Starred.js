import React , {useState } from 'react'
import  styles from './Starred.module.css'
import {FaThumbsDown} from 'react-icons/fa'
const Starred = ({username , pokemon}) => {
    const [Username , setUsername] = useState ( () =>
    {
        const getTodos = localStorage.getItem('@React:pokemons')
        if(getTodos){
            return JSON.parse(getTodos)        
        }

        return '';

    })
    function deslike(id){
        let array = []

        console.log(Username.starred)                   
        Username.starred.forEach((elem , i) => {
            if(elem !== id){
                array.push(elem)                
            }
        })
        console.log(array)
        setUsername({username : Username.username , starred : array } )            
    }
    return (
        <>
        <h1>Perfil Treinador</h1>
        <h2>{username}</h2>
        <div className= {styles.card}>
            <img className={styles.treinador} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdlvbcHe0b4UQhQlPY_u2QwRy_Y-n2fjC5DIbiOlNgQK80mYYY&usqp=CAU" alt = "treinador" />
            <h2>Favoritados</h2>
            <div className= {styles.favorites}>
            
            {Username.starred.map(pokemon => (            
                <span key = {pokemon}>
                <FaThumbsDown className={styles.deslike} size= {20} onClick= {() => deslike(pokemon)}/>
                <img  className= {styles.imagem} src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`}  alt= "pokemon"/>
                </span>                       
            ))}
            </div>
        </div>
        
        </>
    )
}

export default Starred