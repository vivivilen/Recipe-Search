import React from 'react'

export const ModalBody = (props) => {
    return (
        <div className="body-modal">
            <h3>{props.data.name}</h3>
            <div className="info-modal">
                <h5 id="title-info-ingredients">Ingredients</h5>
                <h5>Portion : {props.data.portion}</h5>
            </div>

            <ul>
                {props.data.ingredients.map((ingredient, index) =>
                    <li key={index}>{ingredient.text}</li>
                )}
            </ul>
        </div>
    )
}
