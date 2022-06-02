// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010100000000000000000101010101010101000000000000000001010101010101010000010101010000010100000000000000000100000000000100000000000000000001010101000000000001010101010000010000000000000001010101010100000100000000000000010101010101000001010101000000000000000000000000000000010000000000000000000000000000000100000000010101010101010101000001000000000100000000000000000000010000000001010101010101000001010100000000010000000100010000010001000200000100000001000001010000010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 . . 2 2 2 2 . . 
2 2 . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 2 2 2 . . 
. . . 2 2 2 2 2 2 . 2 . . . . . 
. . 2 2 2 2 2 2 . . 2 . . . . . 
. . 2 2 2 2 2 2 . . 2 2 2 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 . . 2 2 2 . . 
. . 2 . . . 2 . 2 . . 2 . 2 . . 
. . 2 . . . 2 . . 2 2 . . 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
