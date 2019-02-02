//TODO: Create simple layout
// https://semantic-ui.com/introduction/getting-started.html

import React, { Component } from 'react';
import NavBar from './components/layouts/NavBar';
import ProfileGallery from './components/layouts/ProfileGallery'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar logoImage={'logo.jpg'} />
        <ProfileGallery />
        
      </div>
    );
  }
}

export default App;
