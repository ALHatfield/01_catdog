//TODO: Update button
//TODO: Delete button

import React, { Component } from 'react'
import API from '../../utils/API'

export default class ProfileCard extends Component {

    handleDislike = () => {
        // use API here
        API.deleteOne(this.props.id)
    }


    render() {  
        return (
            <div id={this.props.id} className="ui card">
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
                <button onClick={() => this.handleDislike()} className="negative ui button">Dislike</button>
            </div>
        )
    }
}
