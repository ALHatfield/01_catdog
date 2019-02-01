import React, { Component } from 'react'
import Logo from './Logo'

export default class NavBar extends Component {
  render() {
    return (
    <nav class="ui menu">
        <div class="header item">
            <Logo imageFile={this.props.logoImage} />
        </div>
        <a href="/" className="item">this isn't browser router...</a>
        <a href="/" className="item">these are actual anchor tags</a>
        <a href="/" className="item">blah blah blah blah</a>
    </nav>
    )
  }
}
