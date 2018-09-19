import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const store = createStore({
    reducers,
    applyMiddleware(thunk, logger)
    
})

export default store;
