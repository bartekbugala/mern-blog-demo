import React from 'react';
import { PropTypes } from 'prop-types';
import PostFull from '../PostFull/PostFull';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }
  render() {
    const { posts, request } = this.props;
    return (
      console.log('SinglePost', posts),
      (
        <div>
          {(request.pending || request.success === null) && <Spinner />}
          {!request.pending && request.error !== null && <Alert variant="error">Error: {request.error}</Alert>}
          {!request.pending && request.success && posts.length === 0 && <Alert variant="info">No post</Alert>}
          {!request.pending && request.success && posts.length > 0 && <PostFull posts={posts} />}
        </div>
      )
    );
  }
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPosts: PropTypes.func.isRequired
};

export default SinglePost;
