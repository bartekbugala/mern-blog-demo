import { connect } from 'react-redux';
import { countPosts } from '../../../redux/postsRedux';
import PostsCoutner from './PostsCoutner';

const mapStateToProps = state => ({
  postsCount: countPosts(state)
});

export default connect(mapStateToProps)(PostsCoutner);
