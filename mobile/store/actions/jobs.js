import { JOBS } from '../../data/DummyData'

export const SET_JOBS = 'SET_JOBS'

export const setJobs = (jobs) => {
    return async dispatch => {
        dispatch({
            type: SET_JOBS,
            payload: { jobs, },
        })
    }
}

export const fetchJobs = () => {
    return async dispatch => {
        // Fetch
        // Check
        // Cast
        // Dispatch
        dispatch(setJobs(JOBS))
    }
}