import { TODO_ADD, TODO_DELETE, TODO_TOGGLE, TODO_UPDATE } from '../app/actionTypes';

const initialState = {
    todos: [],
    filter: 'all' // all, active, completed
};

let nextId = 1;

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextId++,
                        text: action.payload.text,
                        completed: false,
                        createdAt: new Date().toISOString()
                    }
                ]
            };
        
        case TODO_DELETE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        
        case TODO_TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        
        case TODO_UPDATE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                        ? { ...todo, text: action.payload.text }
                        : todo
                )
            };
        
        default:
            return state;
    }
};

export default todosReducer;

