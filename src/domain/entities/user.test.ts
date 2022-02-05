import t from 'tap'
import { User } from './user'


t.test('NewUser', async () => {
    const DATA = { name: 'my mom' }
    const user = User.NewUser(DATA)
    t.match(user, DATA)
})

t.test('FromData', async () => {
    const DATA = { id: '42', name: 'your mom' }
    const user = User.FromData(DATA)
    t.match(user, DATA)
})