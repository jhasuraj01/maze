import type { NextPage } from "next";
import type { Walls } from '../libs/grid';
import styles from '../styles/MazeElement.module.scss';
import { connect } from 'react-redux';
import Stack from "../libs/stack";
import Maze from "../libs/maze";
import { useEffect } from "react";

import { viewportResize } from '../state/actions/viewportResizeAction';

interface BlockProps extends Walls {
    x: number
    y: number
}

const Block: NextPage<BlockProps> = ({ top, left, right, bottom, x, y }) => {

    const classNames = [styles.block];
    if(top) classNames.push(styles.topWall);
    if(left) classNames.push(styles.leftWall);
    if(right) classNames.push(styles.rightWall);
    if(bottom) classNames.push(styles.bottomWall);

    const style = {
        top: y*36 + "px",
        left: x*36 + "px"
    }

    return (
        <div className={classNames.join(" ")} style={style}></div>
    )
}

interface Props {
    screenWidth: number
    screenHeight: number
    viewportResize: any
}
const MazeElement: NextPage<Props> = ({ ID, screenWidth, screenHeight, viewportResize, Store }) => {

    useEffect(function(){
        viewportResize();
        window.addEventListener('resize', viewportResize)
    }, [])

    const BLOCK_SIZE = 36;

    // const ID = Math.round(Math.random()*1e9)

    const width = Math.floor((screenWidth - 100) / BLOCK_SIZE)
    const height = Math.floor((screenHeight - 100) / BLOCK_SIZE)

    const mazeBuilder = new Maze(width, height);
    mazeBuilder.build(Store);
    const maze = mazeBuilder.result;

    const style = { height: (height * BLOCK_SIZE) + "px", width: (width * BLOCK_SIZE) + "px" }

    return (
        <div className={styles.mazeContainer}>
            <div className={styles.maze} style={style} key={ID}>
                {
                    maze.map((row, y) => {
                        return (
                            row.map((block, x) => <Block key={`${ID}:${x}:${y}`} x={x} y={y} {...block} />)
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProp = (state) => ({
    screenWidth: state.screen.width,
    screenHeight: state.screen.height,
    ID: `${state.screen.refreshCount}:${state.mazeBuild.id}`,
    Store: state.mazeBuild.Store,
})

export default connect(mapStateToProp, { viewportResize })(MazeElement);