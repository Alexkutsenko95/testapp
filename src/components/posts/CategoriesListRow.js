/**
 * Created by Alex on 25.07.2017.
 */
import React from 'react';
import { Link } from 'react-router';

export const CategoriesListRow = ({category, onDelete}) => {
    return (

        <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>
                <div className="btn-toolbar pull-right">
                    <Link to={`/categories/${category.id}`} className="btn btn-primary">Edit</Link>
                    <a onClick={onDelete.bind(this, category)} className="btn btn-danger">Delete</a>
                </div>
            </td>
        </tr>
    )
};
