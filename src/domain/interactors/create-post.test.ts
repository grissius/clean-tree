import { createPost } from "./create-post";
import { ok } from 'assert/strict'

import { postMemoryRepository } from "../../infra/repositories/post-repo.memory";


it('Create post', async () => {
    const post = await createPost(postMemoryRepository, { text: 'Text', title: 'Title', userId: '1123' })
    ok(post.id)
})
