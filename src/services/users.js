import api from "./api";

export const createLogin = (user) => api.post("/users", user);