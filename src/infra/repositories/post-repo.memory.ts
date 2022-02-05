import { Post } from "../../domain/entities/post";
import { PostRepository } from "../../domain/ports/post-repository";

export const postMemoryRepository = ((): PostRepository => {
    const storage = new Map<string, Post>();
    return {
        createPost: async data => {
            const id = `post-${Date.now()}`
            const post = Object.assign({}, data, { id });
            storage.set(id, post)
            return post
        },
        getPost: async id => storage.get(id)
    }
})()