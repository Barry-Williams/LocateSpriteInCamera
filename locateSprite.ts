/**
 * Locate a sprite to the top left of camera
 * To be used in forever loop
 * TODO: add dropdown to relocate to all corners of screen and centre
 */

//% color="#AA278D"
namespace LocateSprite {
    //% block="Position within camera $textSpriteToLocate=variables_get(textSprite)"
    export function locateSpriteInCamera(textSpriteToLocate: Sprite) {
        textSpriteToLocate.setPosition(scene.cameraProperty(CameraProperty.X) - scene.screenWidth() / 2 + textSpriteToLocate.width / 2, CameraProperty.Y + textSpriteToLocate.height / 2)
    }
}
