import api from "./api";

export const getPokemons = (pages) => api.get(`/pokemons?page=${pages}`);

export const getPokemonsHome = () => api.get("/pokemons"); //página Home

// const response = await api.get(`/pokemons?page=${pages}`);