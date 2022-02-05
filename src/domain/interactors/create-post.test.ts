import { createPost } from "./create-post";
import t from "tap";
import { postMemoryRepository } from "../../infra/repositories/post-repo.memory";


t.test('Create post', async () => {
    const post = await createPost(postMemoryRepository, { text: 'Text', title: 'Title', userId: '1123' })
    t.ok(post.id)
})
