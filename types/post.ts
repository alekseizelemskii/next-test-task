export interface PostState {
    posts: any[],
    post: object
};

export enum PostActionTypes {
    POSTS_TO_CLIENT = 'POSTS_TO_CLIENT',
    POST_TO_CLIENT = 'POST_TO_CLIENT',
    PUBLIC_POST = 'PUBLIC_POST'
}

export interface PostAction {
    type: string,
    payload?: any
};


interface PostsToClientAction {
    type: PostActionTypes.POSTS_TO_CLIENT,
    payload: any[]
}

interface PostToClientAction {
    type: PostActionTypes.POST_TO_CLIENT,
    payload: object
    
}

interface PublicPostAction {
    type: PostActionTypes.PUBLIC_POST,
    payload: object
}

export type UserAction = PostsToClientAction | PostToClientAction | PublicPostAction; 
