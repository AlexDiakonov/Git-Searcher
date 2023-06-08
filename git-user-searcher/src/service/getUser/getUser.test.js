import { getUserData } from './getUserData';

describe('getUserData', () => {
  it('fetches user data successfully', async () => {
    // Mock the fetch API response
    const mockResponse = {
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
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Call the function and assert the result
    const userData = await getUserData('johndoe');
    expect(userData).toEqual(mockResponse);

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });

  it('throws an error when fetching user data fails', async () => {
    // Mock the fetch API response with an error
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    // Call the function and expect it to throw an error
    await expect(getUserData('johndoe')).rejects.toThrow(
      'Failed to fetch repositories'
    );

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });
});
