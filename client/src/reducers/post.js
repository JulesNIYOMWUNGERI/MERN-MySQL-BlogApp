import { FETCH_ALL,GET_BY_ID } from '../constants/actionTypes.js'

const PostsReducers = (state={ posts:[], post:[] },action) => {
    switch (action.type) {
        case FETCH_ALL:
            return{
                ...state,posts:action?.payload
            }
        case GET_BY_ID:
            return{
                ...state,post:action?.payload
            }
        default:
            return state;
    }
}

export default PostsReducers;