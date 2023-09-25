import { ADD_POST, EDIT_POST, DELETE_POST } from '../ActionTypes/add';

const initialState = {
  posts: [],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.postId ? action.payload.updatedPostData : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    case DELETE_POST:
      const filteredPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: filteredPosts,
      };
    default:
      return state;
  }
};

export default addReducer;
