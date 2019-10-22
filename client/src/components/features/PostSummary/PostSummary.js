import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import { cutText } from '../../../utils/cutText';
import { Link } from 'react-router-dom';

const PostSummary = ({ id, author, title, content }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <HtmlBox>{cutText(content, 250)}</HtmlBox>
    <Link to={`/posts/${id}`}>
      <Button variant="primary">Read more</Button>
    </Link>
    <p>Author: {author}</p>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

export default PostSummary;
