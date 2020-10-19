/**
 * Preload all of the images for the race
 */
export function RacePreload() {

    /** Temporary bg */
    this.load.image('sky', '../../assets/sky.png');

    /** Load vehicle spritesheet */
    this.load.spritesheet(
        'vehicle',
        '../../assets/race/vehicle-sprite.png',
        { frameWidth: 24, frameHeight: 32 }
    );
}
