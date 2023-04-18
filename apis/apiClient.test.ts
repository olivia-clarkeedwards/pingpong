import nock from 'nock'
import { externalBaseUrl, fetchFriends, fetchUser } from './apiClient'

describe('fetchFriends', () => {
  it('returns a UserWithFriends object that contains an array containing users friends if user exists', async () => {
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

  it.todo(
    'returns a UserWithFriends object with empty friends array for new user'
  )
})

describe('fetchUser', () => {
  it('returns a user object when passed a valid auth ID string', async () => {
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
  it.todo(
    "returns something so that we know the user doesn't exist if passed an invalid id"
  )
})

describe('sendFriendRequest', () => {
  it.todo(
    'adds an entry to the friendship table with pending set to true',
    async () => {}
  )
})

describe('sendFriendConfirm', () => {
  it.todo('changes pending to false in friendship table', async () => {})
})

describe('sendFriendDeny', () => {
  it.todo('deletes friendship entry in the friendship table', async () => {})
})

describe('changePingStatus', () => {
  it.todo(
    'changes status of ping to setting and adds ping_location if provided',
    async () => {}
  )
})

describe('addFriendApi', () => {
  it.todo('what does this do? ask Jack', async () => {})
})
