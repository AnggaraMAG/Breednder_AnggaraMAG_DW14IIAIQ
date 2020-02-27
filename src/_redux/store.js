import { createStore, combineReducers, applyMiddleware } from 'redux';

import species from '../_reducers/species';
import ages from "../_reducers/ages";
import auth from "../_reducers/auth";
import { logger, promise } from '../middleware';


const rootReducers = combineReducers({
    species,
    ages,
    auth
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;