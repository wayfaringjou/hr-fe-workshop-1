import { Scene } from "phaser";
import { WIDTH } from "../main";

// prettier-ignore
export const stage1Map = [
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null,   48, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null,    0,    0, null,   64, null, null, null, null, null, null, null, null,   53],
    [null, null, null, null, null, null,    0,   16,   16, null,   80, null, null, null,    0,    0, null, null, null,   69],
    [null, null, null, null, null, null,   16,    1,   16,    0,    0,    9,   11,    0,   16,   16,    0, null,  103,   85],
    [null, null, null, null, null, null, null, null, null,   16,   17, null, null,   16,   17,   16,   16,    4,    4,    4],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,   21,   20,   20],
    [null, null, null,    0,    0, null, null, null, null, null, null, null, null, null, null, null, null, null, null,   20],
    [null,   97,    1,   16,   16, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null,    0,    0,   16,   16,    6,   23,    6,    9,   10,   11,    6,    6, null, null,    7,    7, null, null, null],
    [null,   16,   16,   16,   17,   22,   24,   22, null, null, null,   22,    8, null, null,   38,   38, null, null, null],
    [null,   16,   17,   16,   16,    8,   22,   22, null, null, null,   22,   22, null, null,   38,   38, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
];

export function renderStageBackgroundLayer(scene: Scene) {
    const backgroundDeep = scene.add.tileSprite(
        0,
        16 * 39,
        WIDTH,
        16 * 2,
        "world",
        240
    );
    backgroundDeep.setScale(3);
    backgroundDeep.setOrigin(0, 0);

    const backgroundHorizonTransition = scene.add.tileSprite(
        0,
        16 * 36,
        WIDTH,
        16,
        "world",
        224
    );
    backgroundHorizonTransition.setScale(3);
    backgroundHorizonTransition.setOrigin(0, 0);

    const backgroundHorizon = scene.add.tileSprite(
        0,
        16 * 21,
        WIDTH,
        16 * 5,
        "world",
        208
    );
    backgroundHorizon.setScale(3);
    backgroundHorizon.setOrigin(0, 0);

    const backgroundSkyTransition = scene.add.tileSprite(
        0,
        16 * 18,
        WIDTH,
        16,
        "world",
        192
    );
    backgroundSkyTransition.setScale(3);
    backgroundSkyTransition.setOrigin(0, 0);

    const backgroundSky = scene.add.tileSprite(
        0,
        0,
        WIDTH,
        16 * 6,
        "world",
        176
    );
    backgroundSky.setScale(3);
    backgroundSky.setOrigin(0, 0);

    const backgroundClouds = scene.add.tileSprite(0, 0, WIDTH, 16, "world", 160);
    backgroundClouds.setScale(3);
    backgroundClouds.setOrigin(0, 0);

    const backgroundLayer = scene.add.layer();
    backgroundLayer.add([
        backgroundDeep,
        backgroundHorizonTransition,
        backgroundHorizon,
        backgroundSkyTransition,
        backgroundSky,
        backgroundClouds,
    ]);
    return backgroundLayer;
}

