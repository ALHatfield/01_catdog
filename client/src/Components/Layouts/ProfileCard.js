import React, { Component } from 'react'

export default class ProfileCard extends Component {

  render() {
    return (
        <div class="ui card">
            <div class="image">
                <img src={this.props.image} alt=""/>
            </div>
            <div class="content">
                <a href="/" class="header">{this.props.name}</a>
                <div class="meta">
                <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                    {this.props.description}
                </div>
            </div>
            <div class="extra content">
                <a href="/">
                    <i class="user icon"></i>
                    22 Friends
                </a>
            </div>
        </div>
    )
  }
}
