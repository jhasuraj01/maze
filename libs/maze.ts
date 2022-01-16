import Grid from './grid';
import type { Walls } from './grid';
import matrix from './matrix';
import type Queue from './queue';
import type Stack from './stack';
import shuffleArray from './shuffleArray';
import { Direction } from 'readline';

interface Store<Grid> {
    new (array?: Grid[]): Stack<Grid> | Queue<Grid>;
}

type GridDirection = 'left' | 'right' | 'top' | 'bottom'
type GridWallName = 'leftWall' | 'rightWall' | 'topWall' | 'bottomWall'

function oppositeWallName(direction: GridDirection): GridWallName {
    switch (direction) {
        case 'left':
            return 'rightWall';
        case 'right':
            return 'leftWall';
        case 'top':
            return 'bottomWall';
        case 'bottom':
            return 'topWall';
    }
}

function WallName(direction: GridDirection): GridWallName {
    switch (direction) {
        case 'left':
            return 'leftWall';
        case 'right':
            return 'rightWall';
        case 'top':
            return 'topWall';
        case 'bottom':
            return 'bottomWall';
    }
}



class Maze {
    private width: number;
    private height: number;
    private maze: Grid[][]

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;

        this.maze = new Array();

        for (let y = 0; y < height; y++) {
            const row: Grid[] = new Array();
            for (let x = 0; x < width; x++) {
                row.push(new Grid(x, y));
            }
            this.maze.push(row);
        }

        this.maze[0][0].leftWall = false;
        this.maze[height - 1][width - 1].rightWall = false;
    }

    toVisit({x, y}: {x: number, y: number}, visited: boolean[][]): boolean {
        if(x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        return !(visited[y][x]);
    }

    gridAt({x, y}: {x: number, y: number}): Grid {
        return this.maze[y][x];
    }

    build(Store: Store<Grid>): void {
        const visited: boolean[][] = matrix<boolean>(this.width, this.height, false);
        const store = new Store();
        store.push(this.maze[0][0]);
        visited[0][0] = true;

        while(!store.empty) {
            const grid = store.pop();

            if(grid == null) {
                console.error("Something Went Wrong While Building Maze");
                return
            }

            const directions: GridDirection[] = shuffleArray<GridDirection>(['left', 'top', 'bottom', 'right']);

            for (let i = 0; i < 4; i++) {
                const direction = directions[i];
                const nextLocation = grid[direction](true);

                if(nextLocation !== null && this.toVisit(nextLocation, visited)) {

                    visited[nextLocation.y][nextLocation.x] = true;

                    const neighbourGrid = this.gridAt(nextLocation);

                    const currentGridWall: GridWallName = WallName(direction);
                    const neighbourGridWall: GridWallName = oppositeWallName(direction);

                    grid[currentGridWall] = false;
                    neighbourGrid[neighbourGridWall] = false;

                    store.push(grid)
                    store.push(neighbourGrid)

                    break;
                }
            }
        }
    }
    
    get result(): Walls[][] {
        return this.maze.map(row => row.map(grid => grid.walls));
    }
}


export default Maze;