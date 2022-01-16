import { MAZE_CREATION_ALGO_CHANGE, MAZE_REFRESH } from "../actions/types";
import Stack from "../../libs/stack";
import { stat } from "fs";

const initialState = {
    Store: Stack,
    id: 0
}

function mazeCreationAlgoChange(state = initialState, action) {

    if(action.type === MAZE_CREATION_ALGO_CHANGE) {
        return {
            ...state,
            Store: action.Store
        }
    }

    if(action.type === MAZE_REFRESH) {
        return {
            ...state,
            id: state.id + 1
        }
    }

    return state;
}


export default mazeCreationAlgoChange;