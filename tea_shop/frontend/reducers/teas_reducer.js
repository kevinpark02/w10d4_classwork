import { RECEIVE_TEA } from '../actions/tea_actions';
// reducers are functions
// never mutate currentState
// redux only knows state changed if reducer returns an object with new id
// all reducers get all actions

const { receiveTea } = require("../actions/tea_actions");

// never mutate currentState
const teasReducer = (currentState = {}, action) => {
    Object.freeze(currentState);
    let nextState = Object.assign({}, currentState); //creates shallow copy of currentState
    // let nextState = {...currentState}; fancy

    switch(action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        default:
            return currentState;
    }
}

export default teasReducer;