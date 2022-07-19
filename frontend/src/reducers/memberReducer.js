import { types } from '../actions';
const { MEMBER: ACTION_HEADER } = types;

const initialState = {
    loading: false,
    error: null,
    members: [],
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_HEADER.GET_MEMBERS_REQUEST:
            return { ...state, loading: true }

        case ACTION_HEADER.GET_MEMBERS_SUCCESS:
            return { ...state, members: action.payload, loading: false }

        case ACTION_HEADER.GET_MEMBERS_FAILED:
            return { ...state, error: action.payload, loading: false }

        case ACTION_HEADER.POST_MEMBER_REQUEST:
            return { ...state, loading: true }

        case ACTION_HEADER.POST_MEMBER_SUCCESS:
            return { ...state, members: [...state.members, action.payload], loading: false }

        case ACTION_HEADER.POST_MEMBER_FAILED:
            return { ...state, error: action.payload, loading: false }

        case ACTION_HEADER.DELETE_MEMBER_REQUEST:
            return { ...state, loading: true }

        case ACTION_HEADER.DELETE_MEMBER_SUCCESS:
            return { ...state, members: state.members.filter(el => el.id !== action.payload.id),  loading: false }

        case ACTION_HEADER.DELETE_MEMBER_FAILED:
            return { ...state, error: action.payload, loading: false }

        default:
            return state;
    }
};

export default memberReducer;
