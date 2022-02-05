import { Post } from "../entities/post";
import { PostRepository } from "../ports/post-repository";

type GetPostInput = Pick<Post, 'id'>

export const getPost = async (postRepo: PostRepository, data: GetPostInput): Promise<Post | undefined> => {
    const post = await postRepo.getPost(data.id)
    if (post) {
        return Post.FromData(post)
    }
}