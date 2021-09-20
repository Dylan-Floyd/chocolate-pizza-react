import React, { Component } from 'react'
import ArticleFooter from './ArticleFooter.js'
import ArticleHeader from './ArticleHeader.js'
import ImageSection from './ImageSection.js'
import IngredientsList from './IngredientsList.js'
import Recipe from './Recipe.js'
import { ingredientsData } from '../data.js';

export default class Article extends Component {
    render() {
        return (
            <article className="main-section">
                <ArticleHeader />
                <ImageSection />
                <Recipe />
                <IngredientsList ingredientsData={ingredientsData}/>
                <ArticleFooter />
            </article>
        )
    }
}
