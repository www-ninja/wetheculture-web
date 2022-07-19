import { types } from '../actions';
const { CONTACT: ACTION_HEADER } = types;

const initialState = {
    loading: false,
    error: null,
    contacts: null,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_HEADER.GET_CONTACT_REQUEST:
            return { ...state, loading: true }

        case ACTION_HEADER.GET_CONTACT_SUCCESS:
            return { ...state, contacts: action.payload, loading: false }

        case ACTION_HEADER.GET_CONTACT_FAILED:
            return { ...state, error: action.payload, loading: false }

        default:
            return state;
    }
};

export default contactReducer;
