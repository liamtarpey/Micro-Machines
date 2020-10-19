export class RacePlayer {
    constructor(context) {
        /** Adds the player sprite vehicle */
        const player = context.physics.add.sprite(10, 500, 'vehicle');

        /** Controls bounce when colliding */
        player.setBounce(20);
        player.setCollideWorldBounds(true);
        player.setDamping(true);
        player.setDrag(0.99);
        player.setMaxVelocity(600); // Fastest the car will go!

        /** Controls gravity of player, higher means 'heavier' */
        // player.body.setGravityY(600);

        return player;
    }
}
