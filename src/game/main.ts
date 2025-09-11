import Boot from "./scenes/Boot";
import { Game as MainGame } from "./scenes/Game";
import { AUTO, Game, Types } from "phaser";
import HUD from "./scenes/HUD";
import GameOver from "./scenes/GameOver";

export const WIDTH = 960;
export const HEIGHT = 720;

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: WIDTH,
    height: HEIGHT,
    parent: "game-container",
    backgroundColor: "#028af8",
    render: {
        pixelArt: true,
    },
    scene: [Boot, MainGame, HUD, GameOver],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 700 },
            debug: true,
        },
    },
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;

