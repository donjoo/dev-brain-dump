import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import todosReducer from '../reducers/todosReducer';
import countReducer from '../reducers/countReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer,
        count: countReducer
    }
});

export default store;
