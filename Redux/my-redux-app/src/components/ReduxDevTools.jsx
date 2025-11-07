import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ReduxDevTools = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const userState = useSelector(state => state.user);
    const todosState = useSelector(state => state.todos);
    const countState = useSelector(state => state.count);

    const allState = {
        user: userState,
        todos: todosState,
        count: countState
    };

    return (
        <div style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            backgroundColor: '#1e1e1e', 
            color: '#fff', 
            padding: '10px', 
            borderRadius: '8px',
            maxWidth: '400px',
            maxHeight: isExpanded ? '500px' : '60px',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>
            <div 
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '5px 0'
                }}
            >
                <h4 style={{ margin: 0, color: '#61dafb' }}>Redux DevTools</h4>
                <span style={{ fontSize: '18px' }}>
                    {isExpanded ? '▼' : '▶'}
                </span>
            </div>
            
            {isExpanded && (
                <div style={{ marginTop: '10px' }}>
                    <div style={{ 
                        backgroundColor: '#2d2d2d', 
                        padding: '10px', 
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                            {JSON.stringify(allState, null, 2)}
                        </pre>
                    </div>
                    
                    <div style={{ 
                        marginTop: '10px', 
                        fontSize: '11px', 
                        color: '#888',
                        textAlign: 'center'
                    }}>
                        Click to toggle • Real-time state updates
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReduxDevTools;

