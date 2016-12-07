import * as actions from '../actions/actionTypes';
const initialState = {
    profileData: ''
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case actions.PROFILE_SUCCESS:
            return Object.assign({}, state, {profileData: action.data});

        default:
            return state;

    }
}
