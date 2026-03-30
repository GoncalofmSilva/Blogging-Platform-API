export interface Post {
    id: string,
    title: string,
    content: string,
    category: string,
    tags: string[],
    createdAt: string,
    editedAt: string
}