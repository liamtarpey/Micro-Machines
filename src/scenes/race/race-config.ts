import { RacePreload } from './engine/race-preload';
import { RaceCreate } from './engine/race-create';
import { RaceUpdate } from './engine/race-update';
import { CommonConfig } from '../../common/common-config';

/**
 * NB: Phaser.AUTO uses WebGL or falls back to Canvas
 */
export const RaceConfig = {
    ...CommonConfig,
    scene: {
        preload: RacePreload,
        create: RaceCreate,
        update: RaceUpdate
    }
};
