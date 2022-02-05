import { User, UserId } from "./user";

export type PostId = string

export type NewPostInput = Pick<Post, 'text' | 'title' | 'userId'> & Partial<Pick<Post, 'publishTime'>>

export class Post {
    public id: PostId
    public userId: UserId
    public title: string
    public text: string
    public createTime: Date
    public updateTime: Date
    public publishTime: Date

    public static NewPost = (data: NewPostInput): Post => {
        const now = new Date()
        return Object.assign(new Post(), { publishTime: now }, data, { createTime: now, updateTime: now })
    }

    public static FromData = (data: Post): Post => Object.assign(new Post(), data)
}