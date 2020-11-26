import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store"
import App from "./components/app";
import { receiveTodo, receiveTodos } from "./actions/todo_actions";


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    //testing
    window.store = store
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    //end testing

    const content = document.getElementById('content');
    ReactDOM.render(<Root store={store} />, content)
})