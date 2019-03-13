import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

import PostModel from '../models/Post';

const Post = ({ post }) => {
  const { author, content, createdAt } = post;
  return (
    <div className="post-item">
      <PostHeader author={author} createdAt={createdAt} />
      <div className="post-content">{content}</div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(PostModel).isRequired,
};

export default Post;
