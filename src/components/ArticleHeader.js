import React, { Component } from 'react'

export default class ArticleHeader extends Component {
    render() {
        return (
            <header className="article-header">
                <div className="article-title">
                    <h1>Chocolate Pizza</h1>
                    <h5>Posted on 15 dec 2013 / desserts</h5>
                </div>
                <div className="print-div">
                    <a href="#"><img src="/print-icon.png" alt="print icon"/>print</a>
                </div>
            </header>
        )
    }
}
