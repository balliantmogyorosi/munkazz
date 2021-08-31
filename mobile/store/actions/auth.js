export const AUTHENTICATE = 'AUTHENTICATE'

export const authenticate = (token, userId, expiresIn) => {
    return async dispatch => {
        await dispatch({
            type: AUTHENTICATE,
            payload: { token, userId, expiresIn }
        })
    }
}

export const logIn = (email, password) => {
    return async dispatch => {
        // Fetch
        // Check
        // Dispatch
        dispatch(authenticate('token', 'userId', 'expiresIn'))
    }
}

export const signUp = (email, password, passwordAgain) => {
    return async dispatch => {
        // Fetch
        // Check
        // Dispatch
        dispatch(authenticate('token', 'userId', 'expiresIn'))
    }
}