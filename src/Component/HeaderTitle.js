import React from 'react';
import '../App.scss';
import { TableItem } from './TableItem';

export const HeaderTitle = (props) => {
    console.log(props)
    return props.hits ? (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Energy (Portion)</th>
                </tr>
            </thead>
            {props.hits.map((hit, index) =>
                <TableItem 
                    key={index} image={hit.recipe.image} name={hit.recipe.label} 
                    energy={(hit.recipe.calories/hit.recipe.yield)} ingredients={hit.recipe.ingredients}
                    portion={hit.recipe.yield}
                />
            )}
        </table>
    ) : <div></div>
}
