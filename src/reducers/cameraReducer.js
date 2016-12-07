import * as actions from '../actions/actionTypes';
const initialState = {
    pictureData: ''
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case actions.CAMERA_SUCCESS:
            return Object.assign({}, state, {pictureData: action.picture});
        default:
            return state;

    }
}
