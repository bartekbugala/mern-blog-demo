import React from 'react';
import { PropTypes } from 'prop-types';
import PostFull from '../PostFull/PostFull';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Button from '../../common/Button/Button';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.post.votes || 0
    };
    this.handleVoteDown = this.handleVoteDown.bind(this);
    this.handleVoteUp = this.handleVoteUp.bind(this);
  }

  componentDidMount() {
    const { loadSinglePost } = this.props;
    loadSinglePost().then(this.setState({ votes: this.props.post.votes }));
  }
  handleVoteUp() {
    const { votePost } = this.props;
    votePost(1).then(this.setState({ votes: this.state.votes + 1 }));
  }
  handleVoteDown() {
    const { votePost } = this.props;
    votePost(-1).then(this.setState({ votes: this.state.votes - 1 }));
  }
  render() {
    const { post, request } = this.props;
    const { votes } = this.state;
    return (
      <div>
        {(request.pending || request.success === null) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">{`Error: ${request.error}`}</Alert>}
        {!request.pending && request.success && (Object.entries(post).length === 0 && post.constructor === Object) && (
          <Alert variant="info">No post</Alert>
        )}
        {!request.pending && request.success && Object.entries(post).length !== 0 && post.constructor === Object && (
          <span>
            <PostFull post={post} />
            <p>{`Votes: ${votes}`}</p>
            <Button onClick={this.handleVoteDown}>
              <MdRemoveCircleOutline />
            </Button>
            <Button onClick={this.handleVoteUp}>
              <MdAddCircleOutline />
            </Button>
          </span>
        )}
      </div>
    );
  }
}

SinglePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    votes: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }),
  loadSinglePost: PropTypes.func.isRequired
};

export default SinglePost;
