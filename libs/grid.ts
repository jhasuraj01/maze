export interface Walls {
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean
}

interface Grid {
    x: number
    y: number
    walls: Walls
}

class Grid implements Grid {
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.walls = {
            top: true,
            bottom: true,
            left: true,
            right: true
        }
    }

    right(ignoreWalls: boolean = false): { x: number, y: number } | null {
        if(ignoreWalls || !this.walls.right) {
            return {x: this.x + 1, y: this.y};
        }
        return null
    }

    left(ignoreWalls: boolean = false): { x: number, y: number } | null {
        if(ignoreWalls || !this.walls.left) {
            return {x: this.x - 1, y: this.y};
        }
        return null
    }

    top(ignoreWalls: boolean = false): { x: number, y: number } | null {
        if(ignoreWalls || !this.walls.top) {
            return {x: this.x, y: this.y - 1};
        }
        return null
    }

    bottom(ignoreWalls: boolean = false): { x: number, y: number } | null {
        if(ignoreWalls || !this.walls.top) {
            return {x: this.x, y: this.y + 1};
        }
        return null
    }

    set rightWall(isSet: boolean) {
        this.walls.right = isSet;
    }

    set leftWall(isSet: boolean) {
        this.walls.left = isSet;
    }

    set topWall(isSet: boolean) {
        this.walls.top = isSet;
    }

    set bottomWall(isSet: boolean) {
        this.walls.bottom = isSet;
    }
}

export default Grid;