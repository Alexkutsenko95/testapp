import React from 'react';
import { CategoriesListRow } from './CategoriesListRow';

export const CategoriesList = ({categories, onDelete}) => {
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => CategoriesListRow({category, onDelete}))}
            </tbody>
        </table>
    )
};
