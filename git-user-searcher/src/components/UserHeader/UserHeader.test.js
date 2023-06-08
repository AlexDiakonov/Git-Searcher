import { render, screen } from '@testing-library/react';
import UserHeader from './UserHeader';

describe('UserHeader component', () => {
  const userData = {
    avatar_url: 'https://example.com/avatar.png',
    login: 'johndoe',
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet',
  };

  it('should render user avatar, login, name, and bio', () => {
    render(<UserHeader userData={userData} />);

    const avatar = screen.getByTestId('user-avatar');
    const login = screen.getByTestId('user-login');
    const name = screen.getByTestId('user-name');
    const bio = screen.getByTestId('user-bio');

    expect(avatar).toBeInTheDocument();
    expect(login).toHaveTextContent('@johndoe');
    expect(name).toHaveTextContent('John Doe');
    expect(bio).toHaveTextContent('Lorem ipsum dolor sit amet');
  });

  it('should display default bio text when bio is not provided', () => {
    const userDataWithoutBio = {
      ...userData,
      bio: undefined,
    };

    render(<UserHeader userData={userDataWithoutBio} />);

    const bio = screen.getByTestId('user-bio');

    expect(bio).toHaveTextContent('this is the bio');
  });
});
