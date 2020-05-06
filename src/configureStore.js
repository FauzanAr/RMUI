import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './store/reducers';

export default function configureStore(persistedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );

    return store;
}