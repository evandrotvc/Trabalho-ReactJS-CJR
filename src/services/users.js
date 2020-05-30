import api from "./api";

export const createLogin = (user) => api.post("/users", user);
export const getUser = (username) => api.get('/users/',username);
