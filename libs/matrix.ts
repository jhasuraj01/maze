function matrix<T> (width: number, height: number, value: T): T[][] {
    const matrix: T[][] = new Array();
    for (let y = 0; y < height; y++) {
        const row: T[] = new Array();
        for (let x = 0; x < width; x++) {
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

export default matrix;