import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostsPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  };
  render() {
    const { posts, request, pages } = this.props;
    const { loadPostsPage } = this;

    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">Error: {request.error}</Alert>}
        {!request.pending && request.success && posts.length === 0 && <Alert variant="info">No posts</Alert>}
        {!request.pending && request.success && posts.length > 0 && <PostsList posts={posts} />}
        {!request.pending && request.success && posts.length > 0 && (
          <Pagination pages={pages} onPageChange={loadPostsPage} />
        )}
      </div>
    );
  }
}

Posts.propTypes = {
  pages: PropTypes.number,
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
