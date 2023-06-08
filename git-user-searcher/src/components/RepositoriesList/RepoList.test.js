import { render, screen } from '@testing-library/react';
import RepositoriesList from './RepositoriesList';

describe('RepositoriesList', () => {
  it('should render the list of repositories', () => {
    const repositories = [
      { id: 1, name: 'repo1' },
      { id: 2, name: 'repo2' },
      { id: 3, name: 'repo3' },
    ];

    render(<RepositoriesList repositories={repositories} />);

    const repoListItems = screen.getAllByTestId(/repo-list-item-/);

    expect(repoListItems).toHaveLength(repositories.length);
  });

  it('should render the title correctly', () => {
    const repositories = [
      { id: 1, name: 'repo1' },
      { id: 2, name: 'repo2' },
    ];

    render(<RepositoriesList repositories={repositories} />);

    const titleElement = screen.getByText('Repositories');

    expect(titleElement).toBeInTheDocument();
  });

  it('should display "User have no repositories" when no repositories are available', () => {
    render(<RepositoriesList repositories={[]} />);

    const noRepositoriesText = screen.getByText('User have no repositories');

    expect(noRepositoriesText).toBeInTheDocument();
  });
});
