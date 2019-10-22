import React from 'react';
import { PropTypes } from 'prop-types';
import EditForm from '../EditForm/EditFormContainer';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class EditPost extends React.Component {
  componentDidMount() {
    const { loadSinglePost } = this.props;
    loadSinglePost();
  }
  render() {
    const { post, request, postId } = this.props;
    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">Error: {request.error}</Alert>}
        {!request.pending && request.success && (Object.entries(post).length === 0 && post.constructor === Object) && (
          <Alert variant="info">No post</Alert>
        )}
        {!request.pending && request.success && Object.entries(post).length !== 0 && (
          <EditForm post={post} postId={postId} />
        )}
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }),
  loadSinglePost: PropTypes.func.isRequired
};

export default EditPost;
