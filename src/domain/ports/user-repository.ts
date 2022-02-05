import { User, UserId } from "../entities/user";

export interface UserRepository {
    getUser: (id: UserId) => Promise<User>
    createUser: (id: Omit<User, 'id'>) => Promise<User>
}