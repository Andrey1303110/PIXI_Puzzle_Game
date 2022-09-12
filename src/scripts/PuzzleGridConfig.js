export let PuzzleGridConfig = {
    pieces: [],
    piece_in_width: 3,
    piece_in_height: 3,
    puzzle_sizes: document.body.clientWidth / 7,
    gap: document.body.clientWidth / 7 / 16,
};

for (let i = 0; i < PuzzleGridConfig.piece_in_height; i++) {
    for (let j = 1; j <= PuzzleGridConfig.piece_in_width; j++) {
        const id = j + (PuzzleGridConfig.piece_in_height * i);
        let x;
        let y;

        if (id%PuzzleGridConfig.piece_in_width === 1) {
            x = -PuzzleGridConfig.puzzle_sizes - PuzzleGridConfig.gap;
        } else if (id%PuzzleGridConfig.piece_in_width === 2) {
            x = 0;
        } else {
            x = PuzzleGridConfig.puzzle_sizes + PuzzleGridConfig.gap;
        }

        if (Math.floor((id-1)/3) === 0) {
            y = -PuzzleGridConfig.puzzle_sizes - PuzzleGridConfig.gap;
        } else if (Math.floor((id-1)/3) === 1) {
            y = 0;
        } else {
            y = PuzzleGridConfig.puzzle_sizes + PuzzleGridConfig.gap;
        }
        
        PuzzleGridConfig.pieces.push({id, x, y});
    }
}