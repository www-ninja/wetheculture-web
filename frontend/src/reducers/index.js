import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authReducer from './authReducer';
import contactReducer from './contactReducer';
import memberReducer from './memberReducer';
import userReducer from './userReducer';


const rootReducer = () =>
    combineReducers({
        auth: authReducer,
        contact: contactReducer,
        member: memberReducer,
        toastr: toastrReducer,
        user: userReducer,
    });

export default rootReducer;
