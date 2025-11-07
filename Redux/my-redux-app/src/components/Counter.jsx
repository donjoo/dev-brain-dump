import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { countIncrement, countDecrement, countReset, countSet } from '../app/actions';

const Counter = () => {
    const dispatch = useDispatch();
    const { value, history } = useSelector(state => state.count);
    const [customValue, setCustomValue] = useState('');

    const handleSetValue = (e) => {
        e.preventDefault();
        const numValue = parseInt(customValue);
        if (!isNaN(numValue)) {
            dispatch(countSet(numValue));
            setCustomValue('');
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <h2>Counter</h2>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '3em', margin: '10px 0' }}>{value}</h3>
                
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button 
                        onClick={() => dispatch(countIncrement())}
                        style={{ 
                            padding: '10px 20px', 
                            fontSize: '16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        +1
                    </button>
                    
                    <button 
                        onClick={() => dispatch(countDecrement())}
                        style={{ 
                            padding: '10px 20px', 
                            fontSize: '16px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        -1
                    </button>
                    
                    <button 
                        onClick={() => dispatch(countReset())}
                        style={{ 
                            padding: '10px 20px', 
                            fontSize: '16px',
                            backgroundColor: '#ff9800',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h4>Set Custom Value</h4>
                <form onSubmit={handleSetValue} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                        type="number"
                        placeholder="Enter number"
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
                        style={{ padding: '8px', width: '150px' }}
                    />
                    <button 
                        type="submit"
                        style={{ 
                            padding: '8px 16px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Set Value
                    </button>
                </form>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h4>History ({history.length} actions)</h4>
                <div style={{ 
                    maxHeight: '200px', 
                    overflowY: 'auto', 
                    border: '1px solid #eee', 
                    padding: '10px',
                    backgroundColor: '#f9f9f9'
                }}>
                    {history.length === 0 ? (
                        <p>No actions yet</p>
                    ) : (
                        <div style={{ fontSize: '12px' }}>
                            {history.slice(-10).reverse().map((entry, index) => (
                                <div key={index} style={{ 
                                    padding: '4px 0', 
                                    borderBottom: '1px solid #ddd',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <span>
                                        <strong>{entry.action}</strong> → {entry.value}
                                    </span>
                                    <span style={{ color: '#666' }}>
                                        {new Date(entry.timestamp).toLocaleTimeString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Counter;

