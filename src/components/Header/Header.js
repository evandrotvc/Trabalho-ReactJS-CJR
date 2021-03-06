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
    <header>
        <div className={styles.elemento}>
        <img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
        </div>

        <div className= {styles.title}>
            <Link style={{textDecoration:'none'}} to="/">
                <h1 className= {styles.pokedex}>Pokedex</h1>
            </Link>
        </div>

        <div className= {styles.elemento +' '+ styles.linkButtons}>
            <Link className="navButton" to="/">
                <button >Login</button>
            </Link>

            <Link className="navButton" to="/pokemons" >
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