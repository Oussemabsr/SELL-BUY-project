import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../JS/Actions/add';

const AddPost = () => {
  const dispatch = useDispatch();
  
  const [post, setPost] = useState({
    name: '',
    category: '',
    picture: null,
    description: '',
    coordinates: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    const newValue = name === 'picture' ? files[0] : value;

    setPost({ ...post, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post)); 
    setPost({
      name: '',
      category: '',
      picture: null,
      description: '',
      coordinates: '',
    });
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={post.name} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={post.category} onChange={handleChange} />
        </div>
        <div>
          <label>Picture:</label>
          <input type="file" name="picture" onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={post.description} onChange={handleChange} />
        </div>
        <div>
          <label>Coordinates:</label>
          <input type="text" name="coordinates" value={post.coordinates} onChange={handleChange} />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
