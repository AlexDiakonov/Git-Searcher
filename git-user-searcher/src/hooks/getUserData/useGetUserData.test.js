import { useQuery } from 'react-query';
import useGetUserData from './useGetUserData';
import { waitFor, renderHook } from '@testing-library/react';
jest.mock('react-query');
jest.mock('../../service/GetUserRepos/getUserRepos');
jest.mock('../../service/getUser/getUserData');

describe('useGetUserData', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.resetAllMocks();
  });

  it('fetches user repositories and user data correctly', async () => {
    const mockedRepositories = [
      {
        id: 1,
        node_id: 'node1',
        name: 'Repo 1',
        full_name: 'johndoe/repo1',
        private: false,
        owner: {
          login: 'johndoe',
          id: 123,
          node_id: 'ownerNode1',
          avatar_url: 'https://example.com/avatar.png',
          gravatar_id: '',
          url: '',
          html_url: '',
          followers_url: '',
          following_url: '',
          gists_url: '',
          starred_url: '',
          subscriptions_url: '',
          organizations_url: '',
          repos_url: '',
          events_url: '',
          received_events_url: '',
          type: '',
          site_admin: false,
        },
        html_url: 'https://example.com/repo1',
        description: '',
        fork: false,
        url: '',
        forks_url: '',
        keys_url: '',
        collaborators_url: '',
        teams_url: '',
        hooks_url: '',
        issue_events_url: '',
        events_url: '',
        assignees_url: '',
        branches_url: '',
        tags_url: '',
        blobs_url: '',
        git_tags_url: '',
        git_refs_url: '',
        trees_url: '',
        statuses_url: '',
        languages_url: '',
        stargazers_url: '',
        contributors_url: '',
        subscribers_url: '',
        subscription_url: '',
        commits_url: '',
        git_commits_url: '',
        comments_url: '',
        issue_comment_url: '',
        contents_url: '',
        compare_url: '',
        merges_url: '',
        archive_url: '',
        downloads_url: '',
        issues_url: '',
        pulls_url: '',
        milestones_url: '',
        notifications_url: '',
        labels_url: '',
        releases_url: '',
        deployments_url: '',
        created_at: '',
        updated_at: '',
        pushed_at: '',
        git_url: '',
        ssh_url: '',
        clone_url: '',
        svn_url: '',
        homepage: '',
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: '',
        has_issues: false,
        has_projects: false,
        has_downloads: false,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: false,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: '',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: '',
        permissions: {
          admin: false,
          maintain: false,
          push: false,
          triage: false,
          pull: false,
        },
      },
    ];
    const mockedUserData = {
      avatar_url: 'https://example.com/avatar.png',
      bio: 'Lorem ipsum dolor sit amet',
      blog: '',
      company: '',
      created_at: '',
      email: null,
      events_url: '',
      followers: 0,
      followers_url: '',
      following: 0,
      following_url: '',
      gists_url: '',
      gravatar_id: '',
      hireable: null,
      html_url: '',
      id: 0,
      location: '',
      login: '',
      name: '',
      node_id: '',
      organizations_url: '',
      public_gists: 0,
      public_repos: 0,
      received_events_url: '',
      repos_url: '',
      site_admin: false,
      starred_url: '',
      subscriptions_url: '',
      twitter_username: null,
      type: '',
      updated_at: '',
      url: '',
    };

    // Mock the implementation of useQuery
    useQuery.mockImplementation(queryKey => {
      if (queryKey[0] === 'fetchUserRepo-') {
        return { data: mockedRepositories, isLoading: false };
      } else if (queryKey[0] === 'fetchUser-') {
        return { data: mockedUserData, isLoading: false };
      }
    });

    const { result } = renderHook(() => useGetUserData());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.repositories).toEqual(mockedRepositories);
    expect(result.current.userData).toEqual(mockedUserData);
    expect(result.current.userError).toBeUndefined();
  });

  it('handles error when fetching user data', async () => {
    const mockedError = new Error('Failed to fetch user data');

    // Mock the implementation of useQuery to return an error
    useQuery.mockImplementation(queryKey => {
      if (queryKey[0] === 'fetchUserRepo-') {
        return { data: null, isLoading: false };
      } else if (queryKey[0] === 'fetchUser-') {
        return { isError: mockedError, error: mockedError, isLoading: false };
      } else {
        return { data: null, isLoading: false }; // Mock for other query keys
      }
    });
    const { result } = renderHook(() => useGetUserData());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.repositories).toBeNull();
    expect(result.current.userData).toBeUndefined();
    expect(result.current.userError.message).toEqual(mockedError.message);
  });
});
