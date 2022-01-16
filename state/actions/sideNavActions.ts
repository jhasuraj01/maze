import { SIDENAV_TOGGLE } from "./types";

export const openSideNav = () => ({
    type: SIDENAV_TOGGLE,
    visible: true
})

export const closeSideNav = () => ({
    type: SIDENAV_TOGGLE,
    visible: false
})