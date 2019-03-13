import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

import Author from '../models/Author';

const PostHeader = ({ author, createdAt }) => (
  <div className="post-header">
    <img
      src={`http://i.pravatar.cc/80?img=${author.avatar}`}
      className="post-author-avatar"
      alt=""
    />
    <div>
      <strong className="post-author-name">{author.name}</strong>
      <TimeAgo date={createdAt} />
    </div>
  </div>
);

PostHeader.propTypes = {
  author: PropTypes.instanceOf(Author).isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};

export default PostHeader;
