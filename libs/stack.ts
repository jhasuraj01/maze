class Stack <T> {
    private array: T[];

    constructor(initialArray: T[] = new Array()) {
        this.array = initialArray;
    }

    public get empty(): boolean {
        return this.array.length == 0;
    }

    public get top(): T | null {
        const value = this.array.at(-1);

        if(value == undefined) {
            console.warn("Unable to access element from empty stack");
            return null;
        }
        else {
            return value;
        }
    }

    public push(element: T): number {
        return this.array.push(element);
    }

    public pop(): T | null {
        const value = this.array.pop();

        if(value == undefined) {
            console.warn("Unable to pop element from empty stack");
            return null;
        }
        else {
            return value;
        }
    }
}


export default Stack;