import api from "./api";

export const getPokemons = (pages) => api.get(`/pokemons?page=${pages}`);
// const response = await api.get(`/pokemons?page=${pages}`);