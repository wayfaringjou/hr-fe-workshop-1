import { GameObjects, Scene } from "phaser";

export default class HUD extends Scene {
    parentScene: Scene;

    constructor() {
        super("scene-hud");
    }

    init({ parentScene }: { parentScene: Scene }) {
        this.parentScene = parentScene;
    }

    create() {
        // this.add.text(24, 72, "HP:", {
        //     color: "#fff",
        //     fontFamily: "Bytesized",
        //     stroke: "#032659",
        //     strokeThickness: 4,
        //     fontSize: 28,
        // });
    }
}

