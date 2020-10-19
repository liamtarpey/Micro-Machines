import { platforms, player, cursors } from './race-create';
import { game } from '../race-index';

const TURN_VELOCITY = 300;
const ROTATE_ANGLE_SPEED = 5;

export function RaceUpdate() {
    const { up, down, left, right } = cursors;

    /** Checks if player is moving - evaluates to true */
    const isMoving = !!player.body.velocity.y;

    if (left.isDown) {
        // if (isMoving) {
        //     player.setVelocityX(-TURN_VELOCITY);  
        // }
        // player.angle -= ROTATE_ANGLE_SPEED;
        player.setAngularVelocity(-TURN_VELOCITY);
    } else if (right.isDown) {
        // if (isMoving) {
        //     player.setVelocityX(TURN_VELOCITY);
        // }
        // player.angle += ROTATE_ANGLE_SPEED;
        player.setAngularVelocity(TURN_VELOCITY);
    } else {
        player.setAngularVelocity(0);
    }

    // If neither left or right are down?
    // player.setVelocityX(0);

    //https://phaser.io/examples/v3/view/physics/arcade/asteroids-movement
    if (up.isDown) {
        this.physics.velocityFromRotation(player.rotation, 1000, player.body.acceleration);
        // player.setAccelerationY(-300);
    } else {
        player.setAcceleration(0);
    }

    // TODO: remove
    if (down.isDown) {
        // player.setAccelerationY(300);
    }

    // if (down.isDown) {
    //     player.setAccelerationY(600);
    // }

    // if (cursors.left.isDown) {
    //     player.setVelocityX(-260);
    //     player.anims.play('left', true);
    // } else if (cursors.right.isDown) {
    //     player.setVelocityX(260);
    //     player.anims.play('right', true);
    // } else {
    //     player.setVelocityX(0);
    //     player.anims.play('turn');
    // }

    // if (cursors.up.isDown && player.body.touching.down) {
    //     player.setVelocityY(-530);
    // }
}
