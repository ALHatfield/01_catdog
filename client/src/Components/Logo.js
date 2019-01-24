import React, { Component } from 'react'

export default class Logo extends Component {

  state = {
      src  : "./catsanddogs.jpg",
      alt   : "cats+  dogs"
  }



  render() {
    return (
      <div>
        <img 
          src=""
          alt={this.state.alt} 
          />  
      </div>
    )
  }
}
