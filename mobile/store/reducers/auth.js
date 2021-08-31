import { AUTHENTICATE } from '../actions/auth'

const initialState = {
    token: null,
    userId: null,
    expiresIn: null,
}

const authReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case AUTHENTICATE:
            return {
                ...state,
                token: payload.token,
                userId: payload.userId,
                expiresIn: payload.expiresIn,
            }
        default:
            return state
    }
}

export default authReducer