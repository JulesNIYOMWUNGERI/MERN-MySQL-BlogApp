import * as api from '../api/index.js'
import { FETCH_ALL,GET_BY_ID,DELETE,ADD,UPDATE } from '../../constants/actionTypes'


export const getAllPosts = (cat) => async(dispatch) => {
    try {
        const {data} = await api.getAllPosts(cat);

        dispatch({ type:FETCH_ALL, payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const getPostById = (id) => async(dispatch) => {
    try {
        const { data } = await api.getPostById(id)

        dispatch({ type:GET_BY_ID,payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id,history) => async(dispatch) => {
    try {
        const { data } = await api.deletePost(id)
        console.log(data)

        dispatch({ type:DELETE })

        history('/')
    } catch (error) {
        console.log(error)
    }
}

export const getRecommanded = (cat) => async(dispatch) => {
    try {
        const {data} = await api.getRecommanded(cat);

        dispatch({ type:FETCH_ALL, payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const AddPost = (inputs) => async(dispatch) => {
    try {
        const {data} = await api.AddPost(inputs);

        dispatch({ type:ADD, payload:data })
    } catch (error) {
        console.log(error)
    }
}

export const UpdatePost = (id,inputs) => async(dispatch) => {
    try {
        const {data} = await api.UpdatePost(id,inputs);

        dispatch({ type:UPDATE, payload:data })
    } catch (error) {
        console.log(error)
    }
}