import t from "tap";
import { postMemoryRepository } from "../../infra/repositories/post-repo.memory";
import { getPost } from "./get-post";
import { Post } from "../entities/post";


t.test('Get post', async () => {
    const newPost = Post.NewPost({ text: 'Text', title: 'Title', userId: '1123' });
    const createdPost = await postMemoryRepository.createPost(newPost)
    const gotPost = await getPost(postMemoryRepository, { id: createdPost.id })
    t.match(createdPost, gotPost)
})
