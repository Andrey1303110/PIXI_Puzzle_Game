import * as PIXI from "pixi.js";
import { Loader } from "../scripts/Loader";
import { MainScene } from "./MainScene";
import { Globals } from "./Globals";

export class App {
    run() {
        this.app = new PIXI.Application({
            view: app,
            width: 1280,
            height: 720,
            resizeTo: window,
        });

        document.body.appendChild(this.app.view);

        Globals.app = this.app;

        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => this.start());
    }

    start() {
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
    }
}
