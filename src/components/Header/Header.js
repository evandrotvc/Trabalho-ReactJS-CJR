import React, { useState }  from 'react'

import { Link } from '@reach/router'

import styles from './Header.module.css'

const Header = () => {
    const [username , setUsername] = useState('')
    function ClickPerfil(){
        const getTodos = localStorage.getItem('user-token')
        if(getTodos){
            
             setUsername(JSON.parse(getTodos))            
        }
    }
    return (
    <header >
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        <Link style={{textDecoration:'none'}} to="/">
            <h1 className= {styles.pokedex}>Pokedex</h1>
        </Link>
        <div className="linkButtons">
            <Link className="navButton" to="/users/">
                <button >Login</button>
            </Link>

            <Link className="navButton" to="/" >
                <button >Home</button>
            </Link>
            
            <Link className="navButton" to={`/users/${username.username}`}  onClick={() => ClickPerfil() }>
                <button >Perfil</button>
            </Link>
        </div>
    </header>
    )

}

export default Header;