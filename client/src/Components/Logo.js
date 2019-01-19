import React, { Component } from 'react'

export default class Logo extends Component {

  state = {
      href  : "./catsanddogs.jpg",
      alt   : "catsanddogs"
  }

  render() {
    return (
      <div>
        <img 
          href={this.state.href}
          alt={this.state.alt} 
          />  
      </div>
    )
  }
}
