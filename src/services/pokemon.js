import api from "./api";

export const getPokemons = (pages) => api.get(`/pokemons?page=${pages}`);

export const getPokemonsHome = () => api.get("/pokemons"); //página Home

export const ProfilePokemon = (pokemon) => api.get(`/pokemons/${pokemon}`); //perfil pokemon



// const response = await api.get(`/pokemons?page=${pages}`);