import * as actions from '../actions/actionTypes';
const initialState = {
    isLoggedIn: 'ninja',
    username: '',
    passwd: ''
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                username: action.username,
                passwd: action.passwd,
                organizationLogo: action.organizationLogo,
                organizationName: action.organizationName,
                screens: action.data
            });

        case actions.LOGIN_ERROR:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: action.username,
                passwd: action.passwd
            });

        default:
            return state;

    }
}
