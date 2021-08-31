import { SET_JOBS } from '../actions/jobs'

const initialState = {
    list: [],
}

const jobsReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_JOBS:
            return {
                ...state,
                list: payload.jobs,
            }
        default:
            return state
    }
}

export default jobsReducer