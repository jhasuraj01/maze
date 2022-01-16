import type { NextPage } from "next";
import type { Walls } from '../libs/grid';
import styles from '../styles/MazeElement.module.scss';

interface Props {
    maze: Walls[][]
    width: number
    height: number
}

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

const MazeElement: NextPage<Props> = ({ maze, width, height }) => {

    const style = { height: height + "px", width: width + "px" }

    return (
        <div className={styles.mazeContainer}>
            <div className={styles.maze} style={style}>
                {
                    maze.map((row, y) => {
                        return (
                            <>
                                {
                                    row.map((block, x) => <Block key={y+":"+x} x={x} y={y} {...block} />)
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MazeElement;