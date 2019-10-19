import React from 'react';
import { PropTypes } from 'prop-types';
import PostFull from '../PostFull/PostFull';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadSinglePost } = this.props;
    loadSinglePost();
  }
  render() {
    const { post, request } = this.props;
    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">Error: {request.error}</Alert>}
        {!request.pending && request.success && post === null && <Alert variant="info">No post</Alert>}
        {!request.pending && request.success && post && <PostFull posts={post} />}
      </div>
    );
  }
}

SinglePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  loadSinglePost: PropTypes.func.isRequired
};

export default SinglePost;
