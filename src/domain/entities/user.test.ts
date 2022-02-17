import { deepEqual } from 'assert'
import { User } from './user'


it('NewUser', async () => {
    const DATA = { name: 'my mom' }
    const user = User.NewUser(DATA)
    deepEqual(user, DATA)
})

it('FromData', async () => {
    const DATA = { id: '42', name: 'your mom' }
    const user = User.FromData(DATA)
    deepEqual(user, DATA)
})