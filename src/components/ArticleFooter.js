import React, { Component } from 'react'

export default class ArticleFooter extends Component {
    render() {
        return (
            <>
                <div className="hr-div"></div>
                <div id="article-footer">
                    <img src="/van-pic.png" alt="vanessa" id="van-pic" />
                    <div id="vanessa">
                        <h4 id="h4">Vanessa Stevenson </h4>
                        <p id="van-p"> Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much
                            who i am.
                        </p>
                    </div>
                    <button id="share-button"> Share Recipe</button>
                </div>
            </>
        )
    }
}
