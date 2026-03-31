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
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
}

export async function editPost(req: Request, res: Response) {
  try {
    const id = req.params.id as string;

    const updatePost = await postService.editPost(id, {
      ...req.body,
      updatedAt: new Date(),
    });
    res.status(200).json(updatePost);
  } catch (error) {
    if (error instanceof Error && error.message === "Post not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  }
}

export async function deletePost(req: Request, res: Response) {
  try {
    const id = req.params.id as string;

    await postService.deletePost(id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error && error.message === "Post not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  }
}

export async function searchForAPost(req: Request, res: Response) {
  try {
    const id = req.params.id as string;

    const post = await postService.getPostById(id);
    res.status(200).json(post);
  } catch (error) {
    if (error instanceof Error && error.message === "Post not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  }
}

export async function searchAllPosts(req: Request, res: Response) {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
