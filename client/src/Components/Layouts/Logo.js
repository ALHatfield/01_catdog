import React, { Component } from 'react';

export default class Logo extends Component {
  state = {
      imageFile : "logo.jpg",
      imageText : "Logo"
  }

  style = { width:"50px" }

  render() {
    return (
      <div>
        <img 
          src={this.state.imageFile}
          alt={this.state.imageText}
          style={this.style} 
        />  
      </div>
    )
  }
}
