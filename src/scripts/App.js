import * as PIXI from "pixi.js";
import { Loader } from "../scripts/Loader";

export class App {
    run() {
        this.app = new PIXI.Application({resizeTo: window});
        console.log(this);

        document.body.appendChild(this.app.view);

        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => this.start());
    }

    start() {
        console.log('game started');
    }
}