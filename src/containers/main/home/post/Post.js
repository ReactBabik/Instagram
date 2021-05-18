import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import PostText from './PostText';
import PostComments from './PostComments';
import PostPublishDate from './PostPublishDate';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

export default function Post({post}) {
  return (
    <React.Fragment>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostActions post ={post} />
      <PostLikes post={post} />
      <PostText post={post} />
      <PostComments post={post} />
      <PostPublishDate post={post} />
    </React.Fragment>
  );
}
