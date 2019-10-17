import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {
  render() {
    const { postsCount } = this.props;
    return <div>Posts amount: {postsCount === 0 ? 0 : postsCount}</div>;
  }
}

PostsCounter.propTypes = {
  postsCount: PropTypes.number.isRequired
};

export default PostsCounter;
