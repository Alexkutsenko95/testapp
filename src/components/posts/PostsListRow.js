import React from 'react';
import { Link } from 'react-router';

export const PostsListRow = ({post, onDelete}) => {
  return (

    <tr key={post.id}>
      <td>{post.id}</td>
        <td>{post.amount}</td>
        <td>{post.description}</td>
        <td>{post.category}</td>
        <td>{post.date}</td>
        <td>{post.type}</td>
        <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/posts/${post.id}`} className="btn btn-primary">Edit</Link>
          <a onClick={onDelete.bind(this, post)} className="btn btn-danger">Delete</a>
        </div>
      </td>
    </tr>
  )
};