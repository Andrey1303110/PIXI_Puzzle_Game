import * as PIXI from "pixi.js";
import { Loader } from "./Loader";
import { MainScene } from "./MainScene";
import { Globals } from "./Globals";

export class App {
    run() {
        // create canvas
        this.app = new PIXI.Application({
            resizeTo: window
        });
        document.body.appendChild(this.app.view);

        Globals.app = this.app;

        // load sprites
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => this.start());
    }

    start() {
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
    }
}