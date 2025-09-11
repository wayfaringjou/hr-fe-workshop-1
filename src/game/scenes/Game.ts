import { Scene } from "phaser";
import { EventBus } from "../EventBus";
import { renderStageBackgroundLayer, stage1Map } from "../stages/stage1";
import drawStageMap from "../utils/drawStageMap";
import { Hero } from "../sprites/Hero";
import { heroMachine } from "../../stateMachines/heroMachine";
import { createActor } from "xstate";

function handlePlayerEnemyOverlap(
    player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody,
    enemy: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody,
    onDamageEnemy: (
        sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    ) => void,
    onDamageHero: (
        sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    ) => void
) {
    const playerBottom = player.body.y + player.body.height;
    const enemyTop = enemy.body.y;

    // Check if player is above enemy and moving downward
    if (playerBottom <= enemyTop + 20 && player.body.velocity.y > 0) {
        // Player landed on the enemy's head → DAMAGE ENEMY
        onDamageEnemy(enemy);

        // Bounce player slightly after stomping
        player.setVelocityY(-250);
    } else {
        // Otherwise, player gets hurt
        onDamageHero(player);
    }
}

export class Game extends Scene {
    hud: Scene;
    cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    hero!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    greenSlime!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    purpleSlime!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    heroMachineActor = createActor(heroMachine).start(); //Actor<ReturnType<typeof createHeroMachine>>;

    constructor() {
        super("Game");
    }

    create() {
        /* BACKGOUND */
        renderStageBackgroundLayer(this);
        /* HUD */
        this.scene.launch("scene-hud", { parentScene: this });
        this.hud = this.scene.get("scene-hud");

        /* TERRAIN */
        const world = this.physics.add.staticGroup();
        drawStageMap(stage1Map, world, "world");

        /* HERO */
        this.cursors = this.input.keyboard?.createCursorKeys();
        const heroInstance = new Hero(
            this,
            48 * 3 - 24,
            48,
            world,
            this.cursors!
        );

        this.hero = heroInstance.hero;

        this.heroMachineActor.subscribe((snapshot) => {
            switch (snapshot.value) {
                case "idle":
                    heroInstance.idle();
                    break;
                case "moveForward":
                    heroInstance.runRight();
                    break;
                case "jump":
                    heroInstance.jump();
                    break;
            }
        });

        /* SLIME */
        this.greenSlime = this.physics.add.sprite(
            48 * 15 - 24,
            48 * 4,
            "green-slime"
        );
        this.greenSlime.setScale(3);
        this.greenSlime.setSize(16, 16).setOffset(4, 8);
        this.greenSlime.setBounce(0.2);
        this.greenSlime.setCollideWorldBounds(true);
        this.physics.add.collider(this.greenSlime, world);

        this.anims.create({
            key: "green-slime-idle",
            frames: this.anims.generateFrameNumbers("green-slime", {
                start: 0,
                end: 7,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.greenSlime.play("green-slime-idle");

        /* SLIME COLLISION */
        this.physics.add.collider(this.hero, this.greenSlime);

        function killEnemy(
            enemy: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
        ) {
            enemy.disableBody(true, true);
        }

        function damagePlayer(
            player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
        ) {
            console.log("Player hurt!");
            player.setVelocityX(-300);
            player.setTint(0xff0000);
            // this.time.delayedCall(200, () => player.clearTint());
        }

        const handleSlimeStomp = () =>
            handlePlayerEnemyOverlap(
                this.hero,
                this.greenSlime,
                killEnemy,
                damagePlayer
            );

        this.physics.add.overlap(
            this.hero,
            this.greenSlime,
            handleSlimeStomp,
            undefined,
            this
        );

        EventBus.emit("current-scene-ready", this);
    }
    update() {
        if (this.cursors?.left.isDown) {
            this.heroMachineActor.send({ type: "backwardKeyDown" });
        } else if (this.cursors?.right.isDown) {
            this.heroMachineActor.send({ type: "forwardKeyDown" });
        } else {
            this.heroMachineActor.send({ type: "stop" });
        }

        if (this.cursors?.space.isDown && this.hero.body.touching.down) {
            this.heroMachineActor.send({ type: "jumpKeyDown" });
        }
    }
}

