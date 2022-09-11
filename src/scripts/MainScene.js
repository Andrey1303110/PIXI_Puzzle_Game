import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
    }

    createBackground() {
        this.bg = new PIXI.Sprite(Globals.resources["bg"].texture);

        let ratio = Globals.resources["bg"].texture.frame.width / Globals.resources["bg"].texture.frame.height;

        this.bg.width = Math.max(window.innerWidth, window.innerHeight);
        this.bg.height = Math.max(window.innerWidth, window.innerHeight);

        this.bg.x = document.body.clientWidth / 2;
        this.bg.y = document.body.clientHeight / 2;

        this.bg.anchor.set(0.5);

        this.container.addChild(this.bg);
    }
}