import React , {useState } from 'react'
import  styles from './PerfilUser.module.css'
import {FaThumbsDown} from 'react-icons/fa'


import {list,Deslike} from '../../services/users'
const PerfilUser = ({username , pokemon}) => {
    const [load , setLoad] = useState(true)
    const [info , setInfo] = useState([]);
    const [Username , setUsername] = useState ( async () =>
    {
        const getTodos = localStorage.getItem('user-token')
        if(getTodos){
            // return JSON.parse(getTodos)
            let user = JSON.parse(getTodos)
            let response = await list(user.username)
            
            setInfo(response.data)
            setLoad(false)
            return response.data
        }

        return '';

    })
    
   async function deslike(pokemon , user){
        let array = []
        
        console.log(user.username, pokemon.name)
        const response = await Deslike(user.username, pokemon.name)
        console.log(response)
            
        info.pokemons.forEach((elem , i) => {
            if(elem.id !== pokemon.id){
                array.push(elem)                
            }
        })
        setInfo({user : user , pokemons : array } )            
    }
    return (
        <>
        
        <h1>Perfil Treinador</h1>
        <h2>{username}</h2>
        
        <div className= {styles.card}>
            <img className={styles.treinador} src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdlvbcHe0b4UQhQlPY_u2QwRy_Y-n2fjC5DIbiOlNgQK80mYYY&usqp=CAU" alt = "treinador" />
            <h2>Favoritados</h2>
            <div className= {styles.favorites}>
            {load || info.pokemons.map(pokemon => (            
                <span key = {pokemon.id}>
                <FaThumbsDown className={styles.deslike} size= {20} onClick= {() => deslike(pokemon , info.user)}/>
                <img  className= {styles.imagem} src= {pokemon.image_url}  alt= "pokemon"/>
                </span>                       
            ))}
            </div>
        </div>
        
        </>
    )
}

export default PerfilUser