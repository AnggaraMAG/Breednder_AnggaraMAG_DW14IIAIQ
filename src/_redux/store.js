import { createStore, combineReducers, applyMiddleware } from 'redux';

import species from '../_reducers/species';
import ages from "../_reducers/ages";
import auth from "../_reducers/auth";
import user from "../_reducers/user";
import pets from "../_reducers/pets";
import { logger, promise } from '../middleware';


const rootReducers = combineReducers({
    species,
    ages,
    auth,
    user,
    pets
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;