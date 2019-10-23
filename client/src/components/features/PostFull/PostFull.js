import React from 'react';
import { PropTypes } from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const PostFull = ({ post, postId }) => (
  <div>
    <section className="posts-list">
      <article className="post-summary">
        <SmallTitle>{post.title}</SmallTitle>
        <HtmlBox>{post.content}</HtmlBox>
        <p>Author: {post.author}</p>
        <Link to={`/posts/${postId}/edit`}>
          <Button variant="danger">Edit post</Button>
        </Link>
      </article>
    </section>
  </div>
);

PostFull.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default PostFull;
