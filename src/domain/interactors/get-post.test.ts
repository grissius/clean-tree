import { deepEqual } from 'assert'

import { postMemoryRepository } from "../../infra/repositories/post-repo.memory";
import { getPost } from "./get-post";
import { Post } from "../entities/post";

it('Get post', async () => {
    const newPost = Post.NewPost({ text: 'Text', title: 'Title', userId: '1123' });
    const createdPost = await postMemoryRepository.createPost(newPost)
    const gotPost = await getPost(postMemoryRepository, { id: createdPost.id })
    deepEqual(createdPost, gotPost)
})
