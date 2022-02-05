import { NewPostInput, Post } from "../entities/post";
import { PostRepository } from "../ports/post-repository";


export const createPost = (postRepo: PostRepository, data: NewPostInput): Promise<Post> => {
    const post = Post.NewPost(data)
    return postRepo.createPost(post)
}