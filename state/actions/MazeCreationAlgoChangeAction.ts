import { MAZE_CREATION_ALGO_CHANGE } from "./types";
import Queue from "../../libs/queue";
import Stack from "../../libs/stack";

export const createWithQueue = () => ({
    type: MAZE_CREATION_ALGO_CHANGE,
    Store: Queue
})

export const createWithStack = () => ({
    type: MAZE_CREATION_ALGO_CHANGE,
    Store: Stack
})