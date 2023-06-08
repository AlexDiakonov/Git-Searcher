import { render, screen } from '@testing-library/react';
import RepoListItem from './RepoListItem';

describe('RepoListItem', () => {
  const repository = {
    id: 1,
    name: 'repo1',
    html_url: 'https://github.com/user/repo1',
    stargazers_count: 10,
    forks_count: 5,
  };

  it('should render the repository name', () => {
    render(<RepoListItem repository={repository} />);

    const repoNameElement = screen.getByTestId(
      `repo-item-name-${repository.id}`
    );

    expect(repoNameElement).toHaveTextContent(repository.name);
  });

  it('should render the repository star count', () => {
    render(<RepoListItem repository={repository} />);

    const starCountElement = screen.getByTestId(
      `repo-item-star-count-${repository.id}`
    );

    expect(starCountElement).toHaveTextContent(
      String(repository.stargazers_count)
    );
  });

  it('should render the repository fork count', () => {
    render(<RepoListItem repository={repository} />);

    const forkCountElement = screen.getByTestId(
      `repo-item-fork-count-${repository.id}`
    );

    expect(forkCountElement).toHaveTextContent(String(repository.forks_count));
  });

  it('should render the repository link with the correct href', () => {
    render(<RepoListItem repository={repository} />);

    const repoLinkElement = screen.getByTestId(
      `repo-item-link-${repository.id}`
    );

    expect(repoLinkElement).toHaveAttribute('href', repository.html_url);
  });
});
