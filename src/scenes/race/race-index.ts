import { RaceConfig } from './race-config';

export let game = null;

export class RaceIndex {
    constructor() {
        game = new Phaser.Game(RaceConfig);
    }
}
