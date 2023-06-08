import { render, screen } from '@testing-library/react';
import UserNotExist from './UserNotExist';

describe('UserNotExist component', () => {
  it('should render "Does not exist" message', () => {
    render(<UserNotExist />);
    const errorMessage = screen.getByTestId('user-not-exist');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Does not exist');
  });
});
