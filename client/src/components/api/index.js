import axios from 'axios';

const API = axios.create({ baseURL:'http://localhost:8800/api'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});

//AUTHANTICATIONS
export const signUp = (inputs) => API.post('/auth/register',inputs);
export const signIn = (inputs) => API.post('/auth/login',inputs);
export const LogOut = () => API.post('/auth/logout');

//POSTS
export const getAllPosts = (cat) => API.get(`/posts/${cat}`) 
export const getPostById = (id) => API.get(`/posts/${id}`)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const getRecommanded = (cat) => API.get(`/posts/?cat=${cat}`)
export const AddPost = (inputs) => API.post('/posts',inputs)
export const UpdatePost = (id,inputs) => API.put(`/posts/${id}`,inputs)
