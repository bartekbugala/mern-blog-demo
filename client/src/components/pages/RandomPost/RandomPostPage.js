import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import RandomPost from '../../features/RandomPost/RandomPostContainer';

const RandomPostPage = props => (
  <div>
    <PageTitle>Random Post</PageTitle>
    <RandomPost />
  </div>
);

export default RandomPostPage;
