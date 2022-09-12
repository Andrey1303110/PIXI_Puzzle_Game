import * as PIXI from "pixi.js";
import {Howl, Howler} from 'howler';
import TWEEN from "@tweenjs/tween.js";
import { Globals } from "./Globals";
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

        let ids = PuzzleGridConfig.pieces.map(field => field.id);

        PuzzleGridConfig.pieces.forEach(field => {
            const random = Math.floor(Math.random() * ids.length);
            const id = ids[random];
            ids = ids.filter(item => item !== id);

            const piece = new PuzzlePiece(id, field, this.container);
            piece.on('dragend', () => this.onPieceDragEnd(piece));

            this.container.addChild(piece.sprite);
            this.pieces.push(piece);
        });
    }

    onPieceDragEnd(piece) {
        const pieceToReplace = this.pieces.find(item =>
            item !== piece 
            &&
            piece.sprite.x >= item.left 
            &&
            piece.sprite.x <= item.right 
            &&
            piece.sprite.y <= item.bottom 
            &&
            piece.sprite.y >= item.top
        );

        if (pieceToReplace) {
            const replaceField = pieceToReplace.field;
            pieceToReplace.setField(piece.field);
            piece.setField(replaceField);
        } else {
            piece.reset();
        }

        setTimeout(() => {
            this.checkPieces();
        }, 350);
    }

    checkPieces(){
        let correct_count = 0;
        for (let i = 0; i < this.container.children.length; i++) {
            const piece = this.container.children[i];
    
            if (piece.y === PuzzleGridConfig.pieces[piece.correctId-1].y && piece.x === PuzzleGridConfig.pieces[piece.correctId-1].x) {
                correct_count++;
                if (correct_count >= this.container.children.length) {
                    Globals.resources.sounds.win.play();
                    this.puzzleDone();
                }
            }
        }
    }

    puzzleDone(){
        for (let i = 0; i < this.container.children.length; i++) {
            const piece = this.container.children[i];

            const tween = new TWEEN.Tween(piece);
            let pos = { x: 0, y: 0};
            if (piece.x < 0) {
                pos.x = piece.x + PuzzleGridConfig.gap
            }
            if (piece.x > 0) {
                pos.x = piece.x - PuzzleGridConfig.gap
            }
            if (piece.y < 0) {
                pos.y = piece.y + PuzzleGridConfig.gap
            }
            if (piece.y > 0) {
                pos.y = piece.y - PuzzleGridConfig.gap
            }
            tween.to({ 
                x: pos.x,
                y: pos.y,
            }, 325);
            tween.easing(TWEEN.Easing.Back.Out);
            tween.start();
        }
    }
}