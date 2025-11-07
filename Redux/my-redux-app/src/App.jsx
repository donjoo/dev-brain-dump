import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import ReduxDevTools from './components/ReduxDevTools';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header style={{ 
          backgroundColor: '#282c34', 
          padding: '20px', 
          color: 'white', 
          textAlign: 'center' 
        }}>
          <h1>Redux Learning App</h1>
          <p>Multiple State Management: User, Todos, and Counter</p>
        </header>
        
        <main style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '20px', 
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <UserProfile />
          <TodoList />
          <Counter />
        </main>
        
        <ReduxDevTools />
      </div>
    </Provider>
  );
}

export default App;