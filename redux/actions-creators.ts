import { PostState } from "../types/post";
import { PUBLIC_POST, POSTS_TO_CLIENT, POST_TO_CLIENT } from "./types";

export const postsToClient = (posts: PostState[]) => ({type: POSTS_TO_CLIENT, payload: posts}); 
export const postToClient = (post: PostState) => ({type: POST_TO_CLIENT, payload: post})
export const publicPost = (newPost: PostState) => ({type: PUBLIC_POST, payload: newPost}) 

