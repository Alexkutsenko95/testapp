import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

export const PostsListRow = ({post, onDelete}) => {
  return (

    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.authors}</td>
      <td>{post.title}</td>
      <td>{post.date}</td>
        <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/posts/${post.id}`}><RaisedButton type="submit" label="Edit" primary={true}  /></Link>
          <a onClick={onDelete.bind(this, post)}><RaisedButton type="submit" label="Delete" secondary={true}  /></a>
        </div>
      </td>
    </tr>
  )
};
