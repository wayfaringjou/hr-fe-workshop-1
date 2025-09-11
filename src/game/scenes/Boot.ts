import { Scene } from "phaser";

export default class Boot extends Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        this.load.setPath("assets");
        this.load.spritesheet("hero", "sprites/knight.png", {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet("green-slime", "sprites/slime_green.png", {
            frameWidth: 24,
            frameHeight: 24,
        });

        this.load.spritesheet("purple-slime", "sprites/slime_purple.png", {
            frameWidth: 24,
            frameHeight: 24,
        });

        this.load.spritesheet("platforms", "sprites/platforms.png", {
            frameWidth: 8,
            frameHeight: 8,
        });

        this.load.spritesheet("world", "sprites/world_tileset.png", {
            frameWidth: 16,
            frameHeight: 16,
        });
    }

    create() {
        this.scene.start("Game");
    }
}
