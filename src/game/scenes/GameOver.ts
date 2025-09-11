import { Scene } from "phaser";

export default class GameOver extends Scene {
    parentScene: Scene;
    cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super("game-over");
    }

    init({ parentScene }: { parentScene: Scene }) {
        this.parentScene = parentScene;
    }

    create() {
        this.cursors = this.input.keyboard?.createCursorKeys();

        const { width: w, height: h } = this.game.scale;

        this.add
            .text(w / 2, h / 2 - 56, "GAME OVER", {
                color: "#fff",
                fontFamily: "Bytesized",
                fontSize: 56,
            })
            .setOrigin(0.5);

        this.add
            .text(w / 2, h / 2 + 48, "Press [Space] to retry...", {
                color: "#fff",
                fontFamily: "Bytesized",
                fontSize: 48,
            })
            .setOrigin(0.5);
    }
    update() {
        if (this.cursors?.space.isDown) this.scene.start("Game");
    }
}

