import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class PuzzlePiece {
    constructor(id, field) {
        this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture);
        this.sprite.position.copyFrom(field);
        this.sprite.anchor.set(.5);
        this.sprite.width = document.body.clientWidth / 7;
        this.sprite.height = document.body.clientWidth / 7;
        this.field = field;

        this.setInteractive();
    }

    setInteractive() {
        this.sprite.interactive = true;
        this.sprite.on('pointerdown', this.onTouchStart, this);
        this.sprite.on('pointerup', () => this.dragging = false, this);
        this.sprite.on('pointermove', this.onTouchMove, this);
    }

    onTouchStart(event) {
        this.touchPosition = {
            x: event.data.global.x,
            y: event.data.global.y,
        };

        this.dragging = true;
    }

    onTouchEnd() {

    }

    onTouchMove(event) {
        if (!this.dragging) {
            return;
        }

        const currentPosition = {
            x: event.data.global.x,
            y: event.data.global.y,
        }

        const offsetX = currentPosition.x - this.touchPosition.x;
        const offsetY = currentPosition.y - this.touchPosition.y;

        this.sprite.x = this.field.x + offsetX;
        this.sprite.y = this.field.y + offsetY;
    }
}