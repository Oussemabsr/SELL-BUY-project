import axios from 'axios';
import { ADD_POST, EDIT_POST, DELETE_POST } from '../ActionTypes/add';

// Action to add a new post
export const addPost = (newPostData) => async (dispatch) => {
  try {
    const result = await axios.post('/api/posts', newPostData);
    dispatch({ type: ADD_POST, payload: result.data });
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

// Action to edit a post
export const editPost = (postId, updatedPostData) => async (dispatch) => {
  try {
    const result = await axios.put(`/api/posts/${postId}`, updatedPostData);
    dispatch({ type: EDIT_POST, payload: { postId, updatedPostData: result.data } });
  } catch (error) {
    console.error('Error editing post:', error);
  }
};

// Action to delete a post
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
