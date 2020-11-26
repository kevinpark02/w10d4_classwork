import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from'./store/store';
import { receiveTea } from './actions/tea_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

    const preloadedState = {
        teas: {
            1: { flavor: 'Hoji Cha', amount: 5, id: 1 }
        }
    }


    const store = configureStore(preloadedState);
    
    //Testing
    window.store = store;
    window.receiveTea = receiveTea;
    //End Testing

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});