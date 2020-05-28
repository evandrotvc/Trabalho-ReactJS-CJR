import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokedex20201.herokuapp.com',
  headers: {
    'Accept': 'application/json'
  }
})

export default api