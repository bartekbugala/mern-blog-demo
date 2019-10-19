import React from 'react';
import { PropTypes } from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

const PostsList = ({ posts }) => (
  <div>
    <section className="posts-list">
      <article className="post-summary">
        <SmallTitle>{posts[0].title}</SmallTitle>
        <HtmlBox>{posts[0].content}</HtmlBox>
      </article>
    </section>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

export default PostsList;
