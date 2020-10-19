import 'phaser';

/**
 * NB: Phaser.AUTO uses WebGL or falls back to Canvas
 */
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);
let platforms; // TODO: move
let player; // TODO: move
let cursors; // TODO: move

/**
 * Preload all of the images
 */
function preload() {
    this.load.image('sky', './assets/sky.png');
    this.load.image('bomb', './assets/bomb.png');
    this.load.image('star', './assets/star.png');
    this.load.image('ground', './assets/platform.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {

    /** Centered sky bg repeated outwards */
    this.add.image(400, 300, 'sky'); 

    /** Define all the platforms as static */
    platforms = this.physics.add.staticGroup();

    /** Bottom of screen, 2x size, refresh to let physics engine know */
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    /** Various small platforms */
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    /** Adds the player sprite next */
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(600); // Heavier player

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 // Loop animation frame
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1 // Loop animation frame
    });

    /** Add colliders */
    this.physics.add.collider(player, platforms);

    /** Add keyboard */
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-260);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(260);
        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-530);
    }
}
