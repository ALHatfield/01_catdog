// FIXME: Logo src not found.
// Research how to import pictures properly then handle state in app and send picture value as props

import React, { Component } from 'react'

export default class Logo extends Component {

  state = {
      srcs : __dirname + "/client/public/logo.jpg",
      alt : "Logo"
  }
  



  render() {
    return (
      <div>
        <img 
          src={this.state.src}
          alt={this.state.alt} 
        />  
      </div>
    )
  }
}
