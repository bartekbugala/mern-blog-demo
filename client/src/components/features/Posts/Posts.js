import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage, initialPage, postsPerPage } = this.props;
    loadPostsByPage(initialPage, postsPerPage);
  }

  loadPostsPage = page => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage);
  };
  render() {
    const { posts, request, pages, pagination } = this.props;
    const { loadPostsPage } = this;

    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">Error: {request.error}</Alert>}
        {!request.pending && request.success && posts.length === 0 && <Alert variant="info">No posts</Alert>}
        <PostsList posts={posts} />
        {pagination && <Pagination pages={pages} onPageChange={loadPostsPage} />}
      </div>
    );
  }
}

Posts.propTypes = {
  pages: PropTypes.number.isRequired,
  request: PropTypes.object.isRequired,
  initialPage: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  pagination: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired
};

export default Posts;
