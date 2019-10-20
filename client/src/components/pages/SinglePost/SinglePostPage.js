import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = props => (
  <div>
    <PageTitle>Single Post</PageTitle>
    <SinglePost postId={props.match.params.id} />
  </div>
);

export default SinglePostPage;
