import {User} from '../models/User';

test('it should be ok', () => {
  const user = new User();
  user.name = 'Augusto'
  user.email = 'email@example.com'
  expect(user.name).toEqual('Augusto')
})
