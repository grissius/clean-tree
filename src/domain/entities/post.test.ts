import t from "tap";
import { Post } from "./post";


t.test('NewPost', async () => {
    const DATA = { text: 'Text', title: 'Title', userId: '1123' }
    const post = Post.NewPost(DATA)
    t.test('matches basic fields', async () => {
        t.match(post, DATA)
    })
    t.test('id unset', async () => {
        t.notOk(post.id)
    })
    t.test('createTime, updateTime, publishTime created', async () => {
        t.equal(post.createTime, post.updateTime)
        t.equal(post.createTime, post.publishTime)
    })
    t.test('custom publish time', async () => {
        const publishTime = new Date()
        const post = Post.NewPost({ ...DATA, publishTime })
        t.not(post.createTime, post.publishTime)
        t.equal(publishTime, post.publishTime)
    })
})

t.test('FromData', async () => {
    const DATA = { text: 'Text', title: 'Title', userId: '1123', id: '42', createTime: new Date(), publishTime: new Date(), updateTime: new Date() }
    const post = Post.FromData(DATA)
    t.test('matches basic fields', async () => {
        t.match(post, DATA)
    })
})