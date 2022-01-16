import { SIDENAV_TOGGLE } from "../actions/types";
import { stat } from "fs";

const initialState = {
    visible: false
}

function sideNavReducer(state = initialState, action: any) {

    if(action.type === SIDENAV_TOGGLE) {
        return {
            ...state,
            visible: action.visible
        }
    }

    return state;
}

export default sideNavReducer;