import React from 'react';
import { PropTypes } from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

const PostsList = ({ posts }) => (
  <div>
    <section className="posts-list">
      <article className="post-summary">
        <SmallTitle>{posts.title}</SmallTitle>
        <HtmlBox>{posts.content}</HtmlBox>
      </article>
    </section>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default PostsList;
