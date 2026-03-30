import type { Request, Response } from "express";
import { postService } from "../services/postsService.js";

export async function createPost(req: Request, res: Response) {
  try {
    const newPost = await postService.createPost({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newPost);
  } catch (error) {}
}

export async function editPost(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const updatePost = await postService.editPost(id, {
      ...req.body,
      updatedAt: new Date(),
    });
    res.status(200).json(updatePost);
  } catch (error) {}
}

export async function deletePost(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deletedPost = await postService.deletePost(id)
    res.status(204)
  } catch (error) {}
}

export async function searchForAPost(req: Request, res: Response) {
  try {
    const { id } = req.params
    
    const searchById = await postService.getPostById(id)
    res.status(200).json(searchById)
  } catch (error) {}
}

export async function searchAllPosts(req: Request, res: Response) {
  try {
    const searchAll = await postService.getAllPosts()
    res.status(200).json(searchAll)
  } catch (error) {}
}
