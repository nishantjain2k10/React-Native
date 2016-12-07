import * as actions from '../actions/actionTypes';
const initialState = {
    phoneNumber: '',
    verisToken: ''
};
export default function user(state = initialState, action) {

    switch (action.type) {
        case actions.OTP_SUCCESS:
            return Object.assign({}, state, {
                phoneNumber: action.phoneNumber,
                verisToken: action.verisToken
            });

        default:
            return state;

    }
}
