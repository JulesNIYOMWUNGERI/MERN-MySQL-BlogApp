import {combineReducers} from 'redux'

import auth from './Auth'
import posts from './post'

export const reducers = combineReducers({auth,posts});