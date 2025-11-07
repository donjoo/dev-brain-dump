# Redux Learning App

A comprehensive React Redux application demonstrating multiple state management patterns with three different state types: User, Todos, and Counter.

## Features

### 🧑‍💼 User State Management
- **Login/Logout**: User authentication state
- **Profile Management**: Update user profile information
- **Avatar Support**: Display user avatars

### ✅ Todo State Management
- **Add Todos**: Create new todo items
- **Toggle Completion**: Mark todos as complete/incomplete
- **Edit Todos**: Update existing todo text
- **Delete Todos**: Remove todos from the list

### 🔢 Counter State Management
- **Increment/Decrement**: Basic counter operations
- **Reset**: Reset counter to zero
- **Set Custom Value**: Set counter to any number
- **History Tracking**: Track all counter operations with timestamps

## Redux Architecture

### Store Structure
```javascript
{
  user: {
    isLoggedIn: boolean,
    user: object,
    profile: {
      name: string,
      email: string,
      avatar: string
    }
  },
  todos: {
    todos: array,
    filter: string
  },
  count: {
    value: number,
    history: array
  }
}
```

### Action Types
- **User Actions**: `USER_LOGIN`, `USER_LOGOUT`, `USER_UPDATE_PROFILE`
- **Todo Actions**: `TODO_ADD`, `TODO_DELETE`, `TODO_TOGGLE`, `TODO_UPDATE`
- **Count Actions**: `COUNT_INCREMENT`, `COUNT_DECREMENT`, `COUNT_RESET`, `COUNT_SET`

### Reducers
- **userReducer**: Manages user authentication and profile state
- **todosReducer**: Handles todo CRUD operations
- **countReducer**: Manages counter state and operation history

## Key Redux Concepts Demonstrated

### 1. **Store Configuration**
```javascript
const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    count: countReducer
  }
});
```

### 2. **Action Creators**
```javascript
export const userLogin = (user, profile) => ({
  type: USER_LOGIN,
  payload: { user, profile }
});
```

### 3. **Reducers**
```javascript
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, isLoggedIn: true, user: action.payload.user };
    default:
      return state;
  }
};
```

### 4. **React-Redux Hooks**
```javascript
// useSelector - Access state
const { isLoggedIn, user } = useSelector(state => state.user);

// useDispatch - Dispatch actions
const dispatch = useDispatch();
dispatch(userLogin(userData, profileData));
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:5173`

## Learning Objectives

### Redux Fundamentals
- ✅ **Store**: Centralized state container
- ✅ **Actions**: Plain objects describing what happened
- ✅ **Reducers**: Pure functions that specify how state changes
- ✅ **Dispatch**: Method to trigger state changes
- ✅ **Selectors**: Functions to extract specific pieces of state

### React-Redux Integration
- ✅ **Provider**: Makes store available to components
- ✅ **useSelector**: Hook to access Redux state
- ✅ **useDispatch**: Hook to dispatch actions
- ✅ **Action Creators**: Functions that return action objects

### State Management Patterns
- ✅ **Multiple Reducers**: Combining different state slices
- ✅ **Immutable Updates**: Using spread operator for state updates
- ✅ **Action Payloads**: Passing data with actions
- ✅ **State Normalization**: Organizing state structure

## Redux DevTools

The app includes a custom Redux DevTools component that shows:
- Real-time state updates
- Complete state tree
- All three state slices (user, todos, count)

## File Structure

```
src/
├── app/
│   ├── actions.js          # Action creators
│   ├── actionsTypes.js     # Action type constants
│   └── store.js           # Store configuration
├── components/
│   ├── UserProfile.jsx    # User management component
│   ├── TodoList.jsx       # Todo management component
│   ├── Counter.jsx        # Counter component
│   └── ReduxDevTools.jsx  # Custom dev tools
├── reducers/
│   ├── userReducer.js     # User state reducer
│   ├── todosReducer.js    # Todos state reducer
│   └── countReducer.js    # Counter state reducer
├── App.jsx                # Main app component
└── main.jsx              # App entry point
```

## Best Practices Demonstrated

1. **Action Type Constants**: Using string constants for action types
2. **Action Creators**: Functions that return action objects
3. **Pure Reducers**: Reducers that don't mutate state
4. **Immutable Updates**: Using spread operator for state updates
5. **Component Separation**: Separating concerns into different components
6. **State Structure**: Organizing state in logical slices

## Next Steps

Try these exercises to deepen your Redux understanding:

1. **Add Filtering**: Implement todo filtering (all, active, completed)
2. **Persistence**: Add localStorage to persist state
3. **Async Actions**: Add API calls with Redux Thunk
4. **Middleware**: Add logging middleware
5. **Testing**: Write tests for reducers and action creators

## Resources

- [Redux Official Documentation](https://redux.js.org/)
- [React-Redux Hooks](https://react-redux.js.org/api/hooks)
- [Redux Toolkit](https://redux-toolkit.js.org/)