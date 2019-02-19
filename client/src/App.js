//TODO: Connect React.Router to the navbar
// https://semantic-ui.com/introduction/getting-started.html

import React, { Component } from 'react'
import NavBar from './components/layouts/NavBar'
import Gallery from './components/layouts/Gallery'
import NewPetForm from './components/layouts/NewPetForm'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar logoImage={'logo.jpg'} />
        <Gallery />
        <NewPetForm />
      </div>
    );
  }
}

export default App;
