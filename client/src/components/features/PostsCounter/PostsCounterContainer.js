import { connect } from 'react-redux';
import { countPosts } from '../../../redux/postsRedux';
import PostsCoutner from './PostsCoutner';

const mapStateToProps = state => ({
  postsCount: countPosts(state)
});

/* const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest(ownProps.postId))
}); */

export default connect(mapStateToProps)(PostsCoutner);
