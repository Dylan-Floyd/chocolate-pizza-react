import React, { Component } from 'react'
import ButtonList from './ButtonList.js'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div id="logo-div">
                        <a href="#" id="logo-a"><img src="/logo.png" alt="logo for delicious"/>
                            <div id="Delicious">
                                <h2>Delicious</h2>
                                <span id="best-food">The Best Food Blog On The Web</span>
                            </div>
                        </a>
                    </div>
                    <ButtonList />
                </nav>
            </header>
        )
    }
}
