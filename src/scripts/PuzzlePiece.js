import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class PuzzlePiece {
    constructor(id, field) {
        this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture);
        this.sprite.position.copyFrom(field);
        this.sprite.anchor.set(.5);
        this.sprite.width = document.body.clientWidth / 7;
        this.sprite.height = document.body.clientWidth / 7;
    }
}