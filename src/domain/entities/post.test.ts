import { deepEqual ,equal, notEqual , ok } from 'assert'
import { Post } from "./post";


describe('NewPost', async () => {
    const DATA = { text: 'Text', title: 'Title', userId: '1123' }
    const post = Post.NewPost(DATA)
    it('matches basic fields', async () => {
        const { createTime, updateTime, publishTime, ...postData } = post
        deepEqual(postData, DATA)
    })
    it('id unset', async () => {
        ok(!post.id)
    })
    it('createTime, updateTime, publishTime created', async () => {
        equal(post.createTime, post.updateTime)
        equal(post.createTime, post.publishTime)
    })
    it('custom publish time', async () => {
        const publishTime = new Date()
        const post = Post.NewPost({ ...DATA, publishTime })
        notEqual(post.createTime, post.publishTime)
        equal(publishTime, post.publishTime)
    })
})

describe('FromData', async () => {
    const DATA = { text: 'Text', title: 'Title', userId: '1123', id: '42', createTime: new Date(), publishTime: new Date(), updateTime: new Date() }
    const post = Post.FromData(DATA)
    it('matches basic fields', async () => {
        deepEqual(post, DATA)
    })
})