import React from 'react';
import { PostsListRow } from './PostsListRow';

export const PostsList = ({posts, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Category</th>
          <th>Date</th>
          <th>Type</th>
      </tr>
      </thead>
      <tbody>
      {posts.map(post => PostsListRow({post, onDelete}))}
      </tbody>
    </table>
  )
};
