import { VIEWPORT_RESIZE } from "./types";

export const viewportResize = () => ({
    type: VIEWPORT_RESIZE,
    width: window.innerWidth,
    height: window.innerHeight
})