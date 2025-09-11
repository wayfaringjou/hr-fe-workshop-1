import { GameObjects, Scene } from "phaser";

const { Sprite } = GameObjects;

export class Hero extends Sprite {
    hero;
    cursors;
    scene;
    constructor(
        scene: Scene,
        x: number,
        y: number,
        world: Phaser.Physics.Arcade.StaticGroup,
        cursors: Phaser.Types.Input.Keyboard.CursorKeys
    ) {
        super(scene, x, y, "hero");
        this.scene = scene;

        this.hero = this.scene.physics.add.sprite(48 * 3 - 24, 48, "hero");
        this.hero.setScale(3);
        this.hero.setSize(16, 20).setOffset(8, 8);
        this.hero.setBounce(0.2);
        this.hero.setCollideWorldBounds(true);

        this.scene.physics.add.collider(this.hero, world);

        this.cursors = cursors;

        this.scene.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("hero", {
                start: 0,
                end: 3,
            }),
            frameRate: 6,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("hero", {
                start: 16,
                end: 23,
            }),
            frameRate: 10,
            repeat: -1,
        });
        this.scene.anims.create({
            key: "roll",
            frames: this.anims.generateFrameNumbers("hero", {
                start: 40,
                end: 47,
            }),
            frameRate: 10,
        });
        this.scene.anims.create({
            key: "hit",
            frames: this.anims.generateFrameNumbers("hero", {
                start: 48,
                end: 51,
            }),
            frameRate: 10,
        });
        this.scene.anims.create({
            key: "death",
            frames: this.anims.generateFrameNumbers("hero", {
                start: 56,
                end: 59,
            }),
            frameRate: 3,
        });
    }

    isOnGround() {
        return this.hero.body.touching.down;
    }
    runLeft() {
        this.hero.setVelocityX(-160);
        this.hero.flipX = true;
        this.hero.anims.play("run", true);
    }
    runRight() {
        this.hero.setVelocityX(160);
        this.hero.flipX = false;
        this.hero.anims.play("run", true);
    }
    jump() {
        this.hero.setVelocityY(-630);
    }
    idle() {
        this.hero.setVelocityX(0);
        this.hero.anims.play("idle", true);
    }
    hurt() {
        this.hero.anims.play("hit", true);
    }
    downed() {
        this.hero.anims.play("death", true);
    }
}

