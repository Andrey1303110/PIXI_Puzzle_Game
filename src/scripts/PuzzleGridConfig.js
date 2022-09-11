export let PuzzleGridConfig = [];

let piece_in_width = 3;
let piece_in_height = 3;

let puzzle_sizes = document.body.clientWidth / 7;
let gap = puzzle_sizes / 16;

for (let i = 0; i < piece_in_height; i++) {
    for (let j = 1; j <= piece_in_width; j++) {
        const id = j + (piece_in_height * i);
        let x;
        let y;

        if (id%piece_in_width === 1) {
            x = -puzzle_sizes - gap;
        } else if (id%piece_in_width === 2) {
            x = 0;
        } else {
            x = puzzle_sizes + gap;
        }

        if (Math.floor((id-1)/3) === 0) {
            y = -puzzle_sizes - gap;
        } else if (Math.floor((id-1)/3) === 1) {
            y = 0;
        } else {
            y = puzzle_sizes + gap;
        }
        
        PuzzleGridConfig.push({id, x, y});
    }
}