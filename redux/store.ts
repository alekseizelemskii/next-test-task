import {createStore} from 'redux';
import {PostAction, PostState, PostActionTypes} from '../types/post';

const initialState: PostState = {
    posts: [],
    post: {},
}

const reducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type){
        case PostActionTypes.POSTS_TO_CLIENT:
            return {...state, posts: action.payload}
        case PostActionTypes.POSTS_TO_CLIENT: 
            return {...state, post: action.payload }
        case PostActionTypes.PUBLIC_POST:
            return {...state, posts: [...state.posts, action.payload ]}
        default:
            return state;
    }
}

export const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>

