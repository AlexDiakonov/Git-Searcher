import { getUserRepositories } from './getUserRepos.ts';

describe('getUserRepositories', () => {
  it('fetches user repositories successfully', async () => {
    // Mock the fetch API response
    const mockResponse = [
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
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Call the function and assert the result
    const repositories = await getUserRepositories('johndoe');
    expect(repositories).toEqual(mockResponse);

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });

  it('throws an error when fetching repositories fails', async () => {
    // Mock the fetch API response with an error
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    // Call the function and expect it to throw an error
    await expect(getUserRepositories('johndoe')).rejects.toThrow(
      'Failed to fetch repositories'
    );

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });
});
