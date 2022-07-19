import { types } from '../actions';
const { USER: ACTION_HEADER } = types;

const initialState = {
    loading: false,
    error: null,
    user: null,
    avatar: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_HEADER.GET_PROFILE_REQUEST:
            return { ...state, loading: true, error: null }

        case ACTION_HEADER.GET_PROFILE_SUCCESS:
            return { ...state, loading: false, user: action.payload }

        case ACTION_HEADER.GET_PROFILE_FAILED:
            return { ...state, loading: false, error: action.payload }

        case ACTION_HEADER.UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true, error: null }

        case ACTION_HEADER.UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false }

        case ACTION_HEADER.UPDATE_PROFILE_FAILED:
            return { ...state, loading: false, error: action.payload }

        case ACTION_HEADER.UPLOAD_AVATAR_REQUEST:
            return { ...state, loading: true, error: null }

        case ACTION_HEADER.UPLOAD_AVATAR_SUCCESS:
            return { ...state, loading: false, avatar: action.payload }

        case ACTION_HEADER.UPDATE_PROFILE_FAILED:
            return { ...state, loading: false, error: action.payload }

        case ACTION_HEADER.GET_AVATAR_REQUEST:
            return { ...state, loading: true, error: null }

        case ACTION_HEADER.GET_AVATAR_SUCCESS:
            return { ...state, loading: false, avatar: action.payload }

        case ACTION_HEADER.GET_AVATAR_FAILED:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default userReducer;