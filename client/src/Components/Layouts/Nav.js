import React, { Component } from 'react';
import Logo from './Logo';

export default class Nav extends Component {


    render() {
        return(
            <div class="ui menu">
                <div class="header item">
                    <Logo />
                </div>
                <a href="/" className="item">this isn't browser router...</a>
                <a href="/" className="item">these are actual anchor tags</a>
                <a href="/" className="item">Locations</a>
            </div>
        )
    }
}


