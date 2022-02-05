import { Post, PostId } from "../entities/post";

export interface PostRepository {
    getPost: (id: PostId) => Promise<Post | undefined>
    createPost: (id: Omit<Post, 'id'>) => Promise<Post>
}