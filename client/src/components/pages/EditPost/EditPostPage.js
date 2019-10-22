import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import EditPost from '../../features/EditPost/EditPostContainer';

const EditPostPage = props => (
  <div>
    <PageTitle>Edit Post</PageTitle>
    <EditPost postId={props.match.params.id} />
  </div>
);

export default EditPostPage;
