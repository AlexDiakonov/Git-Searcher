import { render, screen } from '@testing-library/react';
import SearchWidget from './SearchWidget';

jest.mock('../../hooks/getUserData/useGetUserData.tsx', () => {
  let isLoading = false; // Set the initial isLoading value
  let userError = false;
  let userData = {
    avatar_url: 'https://example.com/avatar.png',
    bio: 'Lorem ipsum dolor sit amet',
    login: 'johndoe',
    name: 'John Doe',
  };
  return {
    __esModule: true,
    default: () => ({
      requestHandler: jest.fn(),
      userData,
      repositories: [
        {
          id: 1,
          name: 'Repo 1',
          full_name: 'johndoe/repo1',
          html_url: 'https://example.com/repo1',
          stargazers_count: 2,
          forks_count: 2,
        },
      ],
      userError,
      isLoading,
    }),
    setIsLoading: value => {
      isLoading = value; // Update the isLoading value
    },
    setUserError: value => {
      userError = value; // Update the isLoading value
    },
    setUserData: () => {
      userData = null; // Update the isLoading value
    },
  };
});

describe('Render SearchWidget and check if all component rendered properly due to the data', () => {
  test('renders search component and user header with correct data', () => {
    render(<SearchWidget />);

    // Check if search component is rendered
    expect(
      screen.getByPlaceholderText('Search username...')
    ).toBeInTheDocument();

    // Check if user header is rendered
    expect(screen.getByTestId('user-header')).toBeInTheDocument();

    //Check if repositories list is rendered
    expect(screen.getByTestId('repositories-list')).toBeInTheDocument();

    //Check if repositories list-items is rendered
    const repositories = jest
      .requireMock('../../hooks/getUserData/useGetUserData.tsx')
      .default().repositories;

    repositories.forEach(repository => {
      expect(
        screen.getByTestId(`repo-list-item-${repository.id}`)
      ).toBeInTheDocument();
    });
  });

  test('renders the loading indicator when isLoading is true', () => {
    // Set isLoading to true for this test case
    jest
      .requireMock('../../hooks/getUserData/useGetUserData.tsx')
      .setIsLoading(true);

    render(<SearchWidget />);

    // Check if the loading indicator is rendered
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  test('renders the No UserFound component when error is appears', () => {
    // Set userError to true for this test case
    jest
      .requireMock('../../hooks/getUserData/useGetUserData.tsx')
      .setUserError(true);
    jest
      .requireMock('../../hooks/getUserData/useGetUserData.tsx')
      .setUserData();

    render(<SearchWidget />);

    // Check if the errorComponent is rendered
    expect(screen.getByTestId('user-not-exist')).toBeInTheDocument();
  });
});
