import React from 'react';
import { PropTypes } from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

const PostFull = ({ post }) => (
  <div>
    <section className="posts-list">
      <article className="post-summary">
        <SmallTitle>{post.title}</SmallTitle>
        <HtmlBox>{post.content}</HtmlBox>
        <p>Author: {post.author}</p>
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
