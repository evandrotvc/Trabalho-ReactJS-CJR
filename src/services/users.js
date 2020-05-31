import api from "./api";

export const createLogin = (user) => api.post("/users", user);
export const list = (username) => api.get(`/users/${username}`)

export const Like = (username , pokemon) => api.post(`/users/${username}/starred/${pokemon}`);
export const Deslike = (username , pokemon) => api.delete(`/users/${username}/starred/${pokemon}`);