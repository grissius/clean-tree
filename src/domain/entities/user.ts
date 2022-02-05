
export type UserId = string

export class User {
    public id: UserId
    public name: string
    static NewUser = (data: Pick<User, 'name'>) => Object.assign(new User(), data)
    static FromData = (data: Pick<User, 'id' | 'name'>) => Object.assign(new User(), data)
}
