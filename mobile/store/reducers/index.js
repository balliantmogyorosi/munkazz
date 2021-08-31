import { combineReducers } from 'redux'

import authReducer from './auth'
import jobsReducer from './jobs'


const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
})

export default rootReducer