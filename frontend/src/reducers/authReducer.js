import { types } from '../actions';
const { AUTH: ACTION_HEADER } = types;

const initialState = {
    loading: false,
    error: null,
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_HEADER.LOGIN_REQUEST:
            return { ...state, loading: true }

        case ACTION_HEADER.LOGIN_SUCCESS:
            return { ...state, token: action.payload.access_token, loading: false }

        case ACTION_HEADER.LOGIN_FAILED:
            return { ...state, error: action.payload, loading: false }

        default:
            return state;
    }
};

export default authReducer;
