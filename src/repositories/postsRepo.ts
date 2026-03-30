import { readJson, writeJson } from "../utils/json.js";

const PATH = "../data/blogPosts.json";

export async function findAll() {
  return await readJson(PATH);
}

export async function findById(id: number) {
  const posts = await readJson(PATH);
  return posts.find((p: { id: number }) => p.id === id);
}

export async function create(data: any) {
  const posts = await readJson(PATH);

  // Incrementador de ID
  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

  const newPost = {
    id: newId,
    ...data,
  };

  posts.push(newPost);
  await writeJson(PATH, posts);

  return newPost;
}

export async function update(id: number, data: any) {
  const posts = await readJson(PATH);

  const index = posts.findIndex((p: { id: number }) => p.id === id);
  if (index === -1) return null;

  const updatedPost = {
    ...posts[index],
    ...data,
    id,
  };

  posts[index] = updatedPost;

  await writeJson(PATH, posts);

  return updatedPost;
}

export async function remove(id: number) {
  const posts = await readJson(PATH);

  const exists = posts.some((p: { id: number }) => p.id === id);
  if (!exists) return null;

  const filtered = posts.filter((p: { id: number }) => p.id !== id);

  await writeJson(PATH, filtered);

  return true;
}
