//TODO: Create simple layout
//TODO: Semantic-ui as alternative to bootstrap
// https://semantic-ui.com/introduction/getting-started.html

import React, { Component } from 'react';
import Logo from './Components/Layouts/Logo'



class App extends Component {
  render() {
    return (
      <div>
        <div class="ui menu">
          <div class="header item">
              <Logo />
          </div>
          <a href="/" className="item">this isn't browser router...</a>
          <a href="/" className="item">these are actual anchor tags</a>
          <a href="/" className="item">Locations</a>
        </div>
        
      </div>
    );
  }
}

export default App;
