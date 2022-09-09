import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
    }

    createBackground() {
        this.bg = new PIXI.Sprite(Globals.resources.bg.texture);

        let ratio = Globals.resources.bg.texture.width/Globals.resources.bg.texture.height;
        
        let max = Math.max(document.body.clientWidth, document.body.clientHeight);
        
        this.bg.width = max;
        this.bg.height = max;
        
        this.bg.y -= Globals.app.renderer.screen.height / 2;
        
        this.container.addChild(this.bg);
    }
}