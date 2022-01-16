import { VIEWPORT_RESIZE, MAZE_CREATION_ALGO_CHANGE } from "../actions/types";

const initialState = {
    width: typeof window === "undefined" ? 640 : window.innerWidth,
    height: typeof window === "undefined" ? 460 : window.innerHeight,
    refreshCount: 0
}

function viewportReducer(state = initialState, action) {

    if(action.type === VIEWPORT_RESIZE) {
        return {
            ...state,
            width: action.width,
            height: action.height,
            refreshCount: state.refreshCount + 1
        }
    }

    return state;
}


export default viewportReducer;