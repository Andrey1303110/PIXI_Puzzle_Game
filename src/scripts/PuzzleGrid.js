import * as PIXI from "pixi.js";
import { PuzzleGridConfig } from "./PuzzleGridConfig";
import { PuzzlePiece } from "./PuzzlePiece";

export class PuzzleGrid {
    constructor() {
        this.container = new PIXI.Container();
        this.container.x = document.body.clientWidth / 2;
        this.container.y = document.body.clientHeight / 2;
        this.container.sortableChildren = true;
        this.createPuzzlePieces();
    }

    createPuzzlePieces(){
        this.pieces = [];

        let ids = PuzzleGridConfig.map(field => field.id);

        PuzzleGridConfig.forEach(field => {
            const random = Math.floor(Math.random() * ids.length);
            const id = ids[random];
            ids = ids.filter(item => item !== id);
            
            const piece = new PuzzlePiece(id, field);
            piece.on('dragend', () => this.onPieceDragEnd(piece));

            this.container.addChild(piece.sprite);
            this.pieces.push(piece);
        });
    }

    onPieceDragEnd(piece){
        piece.reset();
    }
}