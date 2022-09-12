import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { PuzzleGrid } from "./PuzzleGrid";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPuzzleGrid();
        this.addSounds();
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

    createPuzzleGrid(){
        const grid = new PuzzleGrid();
        this.container.addChild(grid.container);
    }

    addSounds(){
        Globals.resources.sounds = {
            click: new Howl({
                src: Globals.resources.click.url,
                html5: true
            }),
            win: new Howl({
                src: Globals.resources.win.url,
                html5: true
            }),
            theme: new Howl({
                src: Globals.resources.theme.url,
                html5: true,
                autoplay: true,
                loop: true,
                volume: 0.2,
            }),
        };


    }
}