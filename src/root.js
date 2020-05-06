import React from 'react';
import { Provider } from 'react-redux';
import Display from './components/Display';
import configureStore from './configureStore';

const store = configureStore();

function Root() {
    return (
        <Provider store = {store}>
            <Display />
        </Provider>
    )
}

export default Root;