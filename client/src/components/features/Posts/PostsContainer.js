import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsByPageRequest, getPages } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = (state, ownProps) => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialPage: ownProps.initialPage || 1,
  postsPerPage: ownProps.postsPerPage || 10,
  pagination: ownProps.pagination || false
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
