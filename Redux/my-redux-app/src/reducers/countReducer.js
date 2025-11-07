import { COUNT_INCREMENT, COUNT_DECREMENT, COUNT_RESET, COUNT_SET } from '../app/actionTypes';

const initialState = {
    value: 0,
    history: []
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_INCREMENT:
            return {
                ...state,
                value: state.value + 1,
                history: [...state.history, { action: 'increment', value: state.value + 1, timestamp: new Date().toISOString() }]
            };
        
        case COUNT_DECREMENT:
            return {
                ...state,
                value: state.value - 1,
                history: [...state.history, { action: 'decrement', value: state.value - 1, timestamp: new Date().toISOString() }]
            };
        
        case COUNT_RESET:
            return {
                ...state,
                value: 0,
                history: [...state.history, { action: 'reset', value: 0, timestamp: new Date().toISOString() }]
            };
        
        case COUNT_SET:
            return {
                ...state,
                value: action.payload.value,
                history: [...state.history, { action: 'set', value: action.payload.value, timestamp: new Date().toISOString() }]
            };
        
        default:
            return state;
    }
};

export default countReducer;

