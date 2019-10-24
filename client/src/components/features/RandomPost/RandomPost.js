import React from 'react';
import { PropTypes } from 'prop-types';
import PostFull from '../PostFull/PostFull';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class RandomPost extends React.Component {
  componentDidMount() {
    const { loadRandomPost, amount } = this.props;
    loadRandomPost(2);
  }
  render() {
    const { post, request } = this.props;
    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">Error: {request.error}</Alert>}
        {!request.pending && request.success && (Object.entries(post).length === 0 && post.constructor === Object) && (
          <Alert variant="info">No post</Alert>
        )}
        <PostFull post={post} />
      </div>
    );
  }
}

RandomPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }),
  loadRandomPost: PropTypes.func.isRequired
};

export default RandomPost;
