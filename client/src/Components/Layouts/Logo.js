import React, { Component } from 'react';

export default class Logo extends Component {

  style = { width:"50px" }

  render() {
    return (
      <div>
        <img 
          src={this.props.imageFile}
          alt=""
          style={this.style} 
        />  
      </div>
    )
  }
}
