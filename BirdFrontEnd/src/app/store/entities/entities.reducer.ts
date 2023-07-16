import { birdReducer } from './bird/bird.reducer';
import { breederReducer } from './breeder/breeder.reducer';
import { ownerReducer } from './owner/owner.reducer';
import { coupleReducer } from './couple/couple.reducer';

export const Reducers = {
    bird: birdReducer,
    breeder: breederReducer,
    owner: ownerReducer,
    couple: coupleReducer
};
