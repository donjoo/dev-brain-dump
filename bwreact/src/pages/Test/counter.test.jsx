import {render,screen, fireEvent} from '@testing-library/react';
import Counter  from './counter';
import React from 'react';


test('renders initial count',() => {
    render(<Counter />);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('Count : 0');
});


test('incremet count on button click', () => {
    render(<Counter />);
    const button = screen.getByText('Increment')
    fireEvent.click(button);
    const countElement = screen.getByTestId('count-value');
    expect(countElement).toHaveTextContent('Count : 1')
});