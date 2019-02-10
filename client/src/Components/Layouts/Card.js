//TODO: Update button
//TODO: Delete button


import React, { Component } from 'react'

export default class ProfileCard extends Component {

  deleteCard = (event) => {
    console.log("deleteCard hit")
    console.log(event)
  }

  render() {
    return (
      <div className="ui card">
        <button className="delete-button" onClick={(this) => this.deleteCard()}>
          delete
        </button>           
        <div className="image">
            <img src={this.props.image} alt=""/>
        </div>
        <div className="content">
            <a href="/" className="header">{this.props.name}</a>
            <div className="meta">
            <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
                {this.props.description}
            </div>
        </div>
        <div className="extra content">
              <a href="/">
                  <i className="user icon"></i>
                  22 Friends
              </a>
          </div>
      </div>
    )
  }
}
