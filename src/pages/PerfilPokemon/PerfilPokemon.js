import React , {useState, useEffect} from 'react'
import {  Link , } from '@reach/router'
import {FcRight} from 'react-icons/fc'
import {FaStar} from 'react-icons/fa'
import axios from 'axios'
import styles from './PerfilPokemon.module.css'
const PerfilPokemon = ({name , username}) => {
    const [Pokemons , setPokemons] = useState({})
    const [kind , setKind] = useState([])
    const [group , setgroup] = useState(0)
    const [Username , setUsername] = useState ( () =>
    {
        const getTodos = localStorage.getItem('@React:pokemons')
        
        if(getTodos){
            return JSON.parse(getTodos)
        }
        return '';

    })
    useEffect(() => {
        localStorage.setItem('@React:pokemons' , JSON.stringify(Username))
    }, [Username])
    useEffect(() => {
        async function LoadPokemons(){
            const response = await axios.get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
             setPokemons(response.data)
            
             const _kind = response.data.kind
             let vetor_kind = _kind.split(';')
             
              setKind(vetor_kind)
             let grupo = 0
             let modulo = response.data.id % 3
             if(modulo % 3 === 0 ){
                setgroup(parseInt(response.data.id -2) )     
             }
             else{
                grupo = response.data.id / 3 ;
                
                setgroup(parseInt(grupo) * 3  + 1)
             }
        }
        LoadPokemons()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    function starred (id){
        let list_starred = []
        list_starred = Username.starred
        if(list_starred.includes(id , 0)){
            return ;
        }
        list_starred.push(id)
        setUsername({ username : Username.username , starred : list_starred})
        // console.log(Username)
    }
    function deslike(id) {
        console.log("deslike")
    }
    return (
        <>
        <div className={styles.card2}>
            <h1 className={styles.h1}>{Pokemons.name}N˚{Pokemons.id}</h1> 
            <div className={styles.card}  key ={Pokemons.id} >
                <img className={styles.img} src= {Pokemons.image_url} alt= {Pokemons.name}/>
                <div className={styles.info} >
                    <span className={styles.span}>Height: {Pokemons.height}</span> 
                    <span className={styles.span}>Weight: {Pokemons.weight}</span> 
                    
                    <span >Type</span> <br></br>

                    {kind.map((elem , index) => (
                        <span key = {index} className={styles.kind}> {elem}</span>
                        
                    ))}
                    <Link to = {`/users/${Username.username}/starred/${name}`} className= {styles.star}>
                    <FaStar color= "orange" size = {20} onClick={() => starred(Pokemons.id)}/>
                    </Link>
                </div>
                    
            </div>
            
            <Link to = "/pokemons/">
            <button className={styles.button} path = "/">
                <span className={styles.explore}>Explorar mais -> </span>
                <img className={styles.icone}src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt = "pokebola"/>
            </button>
            </Link>
            
            <div className={styles.lista_evolucoes}>
                <h3>Evoluções</h3>
                <img className={styles.evolucoes} src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${group}.png`} alt = "e" />
                <FcRight className= {styles.FcRight} size={20} />
                <img className={styles.evolucoes} src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${group+1}.png`} alt = "e" />
                <FcRight className= {styles.FcRight} size={20}/>
                <img className={styles.evolucoes} src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${group+2}.png`}alt = "e" />
            </div>
          </div>
        
        </>
    )
}
export default PerfilPokemon