import express from "express"
import { createPost, editPost, deletePost, searchForAPost, searchAllPosts } from "../controllers/postsController"

const router = express.Router()

router.post('/posts', createPost) // create post
router.put('/posts/:id', editPost) // edit post
router.delete('/posts/id', deletePost) // delete post
router.get('/posts/:id', searchForAPost) // get post
router.get('/posts', searchAllPosts) // get all posts

export default router