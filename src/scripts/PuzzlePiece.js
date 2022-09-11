import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class PuzzlePiece extends PIXI.utils.EventEmitter {
    constructor(id, field) {
        super();
        this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture);
        this.sprite.anchor.set(.5);
        this.sprite.width = document.body.clientWidth / 7;
        this.sprite.height = document.body.clientWidth / 7;
        this.field = field;
        this.reset();

        this.setInteractive();
    }

    setInteractive() {
        this.sprite.interactive = true;
        this.sprite.on('pointerdown', this.onTouchStart, this);
        this.sprite.on('pointerup', this.onTouchEnd, this);
        this.sprite.on('pointermove', this.onTouchMove, this);
    }

    onTouchStart(event) {
        this.sprite.zIndex = 1;
        this.touchPosition = {
            x: event.data.global.x,
            y: event.data.global.y,
        };

        this.dragging = true;
        
        //Globals.resources.click.sound.play();
    }

    onTouchEnd() {
        //Globals.resources.click.sound.play();
        this.dragging = false;
        this.emit('dragend');
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

    reset() {
        this.sprite.zIndex = 0;
        this.sprite.position.copyFrom(this.field);
    }

    get left() {
        return this.sprite.x - this.sprite.width / 2;
    }

    get right() {
        return this.sprite.x + this.sprite.width / 2;
    }

    get top() {
        return this.sprite.y - this.sprite.height / 2;
    }

    get bottom() {
        return this.sprite.y + this.sprite.height / 2;
    }

    setField(field) {
        this.field = field;
        this.reset();
    }
}