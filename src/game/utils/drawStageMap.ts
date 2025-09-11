export default function (
    stageMap: Array<Array<null | number>>,
    staticGroup: Phaser.Physics.Arcade.StaticGroup,
    spriteSheetName: string
) {
    stageMap.forEach((row, rowIndex) => {
        const Y = 48 * rowIndex;
        row.forEach((terrainSpriteFrame, columnIndex) => {
            if (terrainSpriteFrame === null) return;
            const X = 48 * columnIndex;
            const block = staticGroup
                .create(X, Y, spriteSheetName, terrainSpriteFrame)
                .setScale(3);
            block.setOrigin(0, 0);
            block.refreshBody();
        });
    });
}
