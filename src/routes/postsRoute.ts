import express from "express"
import { createPost, editPost, deletePost, searchForAPost, searchAllPosts } from "../controllers/postsController.js"

const router = express.Router()

router.post('/', createPost) // create post
router.put('/:id', editPost) // edit post
router.delete('/:id', deletePost) // delete post
router.get('/:id', searchForAPost) // get post
router.get('/', searchAllPosts) // get all posts

export default router