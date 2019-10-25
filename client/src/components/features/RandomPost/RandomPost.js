import React from 'react';
import { PropTypes } from 'prop-types';
import PostFull from '../PostFull/PostFull';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Button from '../../common/Button/Button';

class RandomPost extends React.Component {
  state = { counter: 0 };
  componentDidMount() {
    const { loadRandomPost } = this.props;
    loadRandomPost();
  }

  reload = () => {
    let add = this.state.counter + 1;
    this.setState({ counter: add });
    const { loadRandomPost } = this.props;
    loadRandomPost();
  };

  render() {
    const { post, request } = this.props;

    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">{`Error: ${request.error}`}</Alert>}
        {!request.pending && request.success && (Object.entries(post).length === 0 && post.constructor === Object) && (
          <Alert variant="info">No post</Alert>
        )}
        <Button variant="primary" onClick={this.reload}>
          Random: {this.state.counter}
        </Button>
        {!request.pending && request.success && <PostFull post={post} postId={post.id} />}
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
