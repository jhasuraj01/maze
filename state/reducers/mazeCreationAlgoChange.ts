import { MAZE_CREATION_ALGO_CHANGE } from "../actions/types";
import Stack from "../../libs/stack";

const initialState = {
    Store: Stack
}

function mazeCreationAlgoChange(state = initialState, action) {

    if(action.type === MAZE_CREATION_ALGO_CHANGE) {
        console.log("Store Changed");
        return {
            ...state,
            Store: action.Store
        }
    }

    return state;
}


export default mazeCreationAlgoChange;