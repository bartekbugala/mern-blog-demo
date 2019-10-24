import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadRandomPostRequest, countPosts } from '../../../redux/postsRedux';
import RandomPost from './RandomPost';

const mapStateToProps = state => ({
  post: getSinglePost(state),
  request: getRequest(state),
  amount: countPosts(state)
});
const mapDispatchToProps = dispatch => ({
  loadRandomPost: amount => dispatch(loadRandomPostRequest(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPost);
