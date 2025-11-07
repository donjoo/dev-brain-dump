import { USER_LOGIN, USER_LOGOUT, USER_UPDATE_PROFILE } from '../app/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: null,
    profile: {
        name: '',
        email: '',
        avatar: ''
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                profile: action.payload.profile
            };
        
        case USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                profile: {
                    name: '',
                    email: '',
                    avatar: ''
                }
            };
        
        case USER_UPDATE_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload
                }
            };
        
        default:
            return state;
    }
};

export default userReducer;

