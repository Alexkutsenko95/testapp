import React from 'react';
import { PostsListRow } from './PostsListRow';

export const PostsList = ({posts, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
          <th>Id</th>
          <th>Author</th>
          <th>Title</th>
          <th>Date</th>
         </tr>
      </thead>
      <tbody>
      {posts.map(post => PostsListRow({post, onDelete}))}
      </tbody>
    </table>
  )
};
