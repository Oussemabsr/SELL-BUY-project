import { DELETE_POST } from '../ActionTypes/post';

const initialState = {
  posts: [], 
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    default:
      return state;
  }
};

export default postReducer;
