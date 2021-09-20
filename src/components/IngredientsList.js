import React, { Component } from 'react'
import IngredientItem from './IngredientItem.js'

export default class IngredientsList extends Component {
    render() {
        const ingredientsData = this.props.ingredientsData;
        const leftColData = ingredientsData.slice(0, Math.ceil(ingredientsData.length/2))
        const rightColData = ingredientsData.slice(Math.ceil(ingredientsData.length/2), ingredientsData.length);
        return (
            <div id="background-image">
                <div className="recipe-column">
                    {
                        leftColData.map(entry => 
                                <IngredientItem ingredient={entry.ingredient} amount={entry.amount} completed={entry.completed} />
                        )
                    }
                </div>
                <div className="recipe-column">
                    {
                        rightColData.map(entry => 
                                <IngredientItem ingredient={entry.ingredient} amount={entry.amount} completed={entry.completed} />
                        )
                    }
                </div>
            </div>
        )
    }
}
