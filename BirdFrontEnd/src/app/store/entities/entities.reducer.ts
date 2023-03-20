import { birdReducer } from './bird/bird.reducer';
import { breederReducer } from './breeder/breeder.reducer';
import { ownerReducer } from './owner/owner.reducer';

export const Reducers = {
    bird: birdReducer,
    breeder: breederReducer,
    owner: ownerReducer
};
