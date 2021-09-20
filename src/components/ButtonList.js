import React, { Component } from 'react'

export default class ButtonList extends Component {
    render() {
        return (
            <div className="right-nav-div">
                <a href="#"><img src="/fb-icon.png" alt="facebook icon"/></a>
                <a href="#"><img src="/twit-icon.png" alt="twitter icon"/></a>
                <a href="#"><img src="/gp-icon.png" alt="gp icon"/></a>
                <a href="#"><img src="/insta-icon.png" alt="instagram icon"/></a>
                <a href="#"><img src="/flic-icon.png" alt="flicr icon"/></a>
                <a href="#"><img src="/pint-icon.png" alt="pinterest icon"/></a>
                <a href="#"><img src="/rss-icon.png" alt="rss-icon"/></a>
                <a href="#"><img src="/mail-icon.png" alt="email icon"/></a>
            </div>
        )
    }
}
