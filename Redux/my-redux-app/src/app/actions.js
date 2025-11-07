import * as actions from "./actionTypes";

// User Action Creators
export const userLogin = (user, profile) => ({
    type: actions.USER_LOGIN,
    payload: {
        user,
        profile
    }
});

export const userLogout = () => ({
    type: actions.USER_LOGOUT
});

export const userUpdateProfile = (profileData) => ({
    type: actions.USER_UPDATE_PROFILE,
    payload: profileData
});

// Todo Action Creators
export const todoAdd = (text) => ({
    type: actions.TODO_ADD,
    payload: {
        text
    }
});

export const todoDelete = (id) => ({
    type: actions.TODO_DELETE,
    payload: {
        id
    }
});

export const todoToggle = (id) => ({
    type: actions.TODO_TOGGLE,
    payload: {
        id
    }
});

export const todoUpdate = (id, text) => ({
    type: actions.TODO_UPDATE,
    payload: {
        id,
        text
    }
});

// Count Action Creators
export const countIncrement = () => ({
    type: actions.COUNT_INCREMENT
});

export const countDecrement = () => ({
    type: actions.COUNT_DECREMENT
});

export const countReset = () => ({
    type: actions.COUNT_RESET
});

export const countSet = (value) => ({
    type: actions.COUNT_SET,
    payload: {
        value
    }
});

// Legacy Bug Action Creators (keeping for backward compatibility)
export const bugAdded = descriptions => ({
    type: actions.BUG_ADDED,
    payload:{
        description: descriptions,
    }
}) 

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload:{
        id:id,
    }  
})

export const bugResolved =id => ({
    type: actions.BUG_RESOLVED,
    payload:{
        id:id,
    }
})
// 