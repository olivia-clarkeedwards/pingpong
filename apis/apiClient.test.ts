import nock from 'nock'
import { externalBaseUrl, fetchFriends, fetchUser } from './apiClient'

describe('fetchFriends', () => {
  it('returns a UserWithFriends object that contains a friend_data array', async () => {
    const expected = {
      id: 7,
      auth_id: '108267169986314483935',
      name: 'Olivia',
      surname: 'Clarke-Edwards',
      username: 'oliviaclarkeedwards',
      birthday: 'Mon Apr 17 2023',
      ping_active: true,
      ping_location: null,
      friend_data: [
        {
          id: 9,
          auth_id: '105178035731740723452',
          name: 'Jack',
          surname: 'Haynes',
          username: 'haynes.jack.stewart',
          birthday: 'Mon Apr 17 2023',
          ping_active: false,
          ping_location: null,
          pending: false,
        },
      ],
    }

    const userData = {
      auth_id: '108267169986314483935',
      name: 'Olivia',
      surname: 'Clarke-Edwards',
      username: 'oliviaclarkeedwards',
      birthday: 'Mon Apr 17 2023',
      ping_active: true,
      ping_location: null,
    }

    const scope = nock(externalBaseUrl)
      .post('/userwithfriends')
      .reply(200, expected)

    const actual = await fetchFriends(userData)

    expect(actual).toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('fetchUser', () => {
  it('returns a user object when passed an auth ID string', async () => {
    const expected = {
      id: 7,
      auth_id: '108267169986314483935',
      name: 'Olivia',
      surname: 'Clarke-Edwards',
      username: 'oliviaclarkeedwards',
      birthday: 'Mon Apr 17 2023',
      ping_active: true,
      ping_location: null,
    }

    const userId = '108267169986314483935'

    const scope = nock(externalBaseUrl).post('/getuser').reply(200, expected)

    const actual = await fetchUser(userId)

    expect(actual).toEqual(expected)
    expect(scope.isDone()).toBeTruthy()
  })
})

describe('sendFriendRequest', () => {
  it.todo('sends a friends request?', async () => {})
})

describe('sendFriendConfirm', () => {
  it.todo('confirms friend request', async () => {})
})

describe('sendFriendDeny', () => {
  it.todo('sends a friends request?', async () => {})
})

describe('changePingStatus', () => {
  it.todo('sends a friends request?', async () => {})
})

describe('addFriendApi', () => {
  it.todo('sends a friends request?', async () => {})
})
