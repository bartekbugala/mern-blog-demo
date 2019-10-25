import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class DeletePost extends React.Component {
  componentDidMount() {
    const { deletePost } = this.props;
    deletePost();
    const { resetRequest } = this.props;
    resetRequest();
  }
  render() {
    const { request } = this.props;
    return (
      <div>
        {request.pending && request.success === null && <Spinner />}
        {request.error && request.pending === false && <Alert variant="error">Error: {request.error.data.error}</Alert>}
        {request.success && request.error === null && <Alert variant="info">Post Removed</Alert>}
      </div>
    );
  }
}

DeletePost.propTypes = {
  request: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default DeletePost;
