import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <div>
                <span className={this.props.completed ? "line-through" : ""}>
                    <input type="checkbox" defaultChecked={this.props.completed}/> {this.props.amount + ' ' + this.props.ingredient}</span>
            </div>
        )
    }
}
