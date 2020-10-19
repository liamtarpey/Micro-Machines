import { RacePlayer, RacePlayerAnimation } from '../player/race-player-index';
import { RaceKeyboard } from '../keyboard/race-keyboard';

export let platforms; // TODO: move
export let player; // TODO: move
export let cursors; // TODO: move

export function RaceCreate() {

    /** Centered sky bg repeated outwards */
    this.add.image(400, 300, 'sky'); 

    // TODO: Create track
    // /** Define all the platforms as static */
    // platforms = this.physics.add.staticGroup();

    // /** Bottom of screen, 2x size, refresh to let physics engine know */
    // platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    // /** Various small platforms */
    // platforms.create(600, 400, 'ground');
    // platforms.create(50, 250, 'ground');
    // platforms.create(750, 220, 'ground');

    /** Create Player */
    player = new RacePlayer(this);

    // new RacePlayerAnimation(this, player);

    /** Controls gravity of player, higher means 'heavier' */
    // player.body.setGravityY(600);

    /** Add keyboard */
    // cursors = this.input.keyboard.createCursorKeys(); // Move
    cursors = new RaceKeyboard(this);

    /** Add colliders */
    // this.physics.add.collider(player, platforms);

    /** TODO: move cameras */
    this.cameras.main.centerOn(player.x, player.y);
    this.cameras.main.startFollow(player);
}
