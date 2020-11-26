import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "go shopping",
    body: "@ vons",
    done: false,
  },
  2: {
    id: 2,
    title: "study homework",
    body: "on appAcademy open",
    done: true,
  },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    //[{id:1, title: sdflj, body: lksjdflj, done:lkjsdflk}, {id:2, title: sldkfj, body: sldkfjls, done: pwjeflkj}]

    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach((todo) => {
                nextState[todo.id] = todo
            });
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        default:
        return state;
    }
};

export default todosReducer;