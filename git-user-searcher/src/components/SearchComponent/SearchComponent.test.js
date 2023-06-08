import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from './SearchComponent';

describe('SearchComponent', () => {
  it('should call onSearch prop with the input value when submitted', () => {
    const mockOnSearch = jest.fn();
    render(<SearchComponent onSearch={mockOnSearch} />);

    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('john');
  });

  it('should clear the input value after submitting', () => {
    const mockOnSearch = jest.fn();
    render(<SearchComponent onSearch={mockOnSearch} />);

    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');

    fireEvent.change(input, { target: { value: 'john' } });
    fireEvent.click(button);

    expect(input).toHaveValue('');
  });
});
