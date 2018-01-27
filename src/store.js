import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

const store = createStore({
    combineReducers({

    }),
    applyMiddleware(thunk)
});

export default store;