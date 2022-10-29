import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000"});


export const fetchPosts = () => API.get('/');
export const createPost = (newPost) => API.post('/compose', newPost);
export const deletePost = (id) => API.delete(`/${id}`, deletePost);
