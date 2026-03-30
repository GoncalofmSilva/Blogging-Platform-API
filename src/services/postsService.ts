import {
  findAll,
  findById,
  create,
  update,
  remove,
} from "../repositories/postsRepo.js";

export const postService = {
  async createPost(data: any) {
    return await create(data);
  },

  async editPost(id: string, data: any) {
    const post = await findById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return await update(id, data);
  },

  async deletePost(id: string) {
    const post = await remove(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return { message: "Post deleted" };
  },

  async getPostById(id: string) {
    const post = await findById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  },

  async getAllPosts() {
    return await findAll();
  },
};
