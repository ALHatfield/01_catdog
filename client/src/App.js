import React, { Component } from 'react'
import NavBar from './Components/Layouts/NavBar'
import Gallery from './Components/Layouts/Gallery'
import NewPetForm from './Components/Layouts/NewPetForm'
import API from './utils/API'


export default class App extends Component {

  state = {
    animals: []
  }

  componentWillMount = () => this.loadAnimals()

  loadAnimals = () => {
    API
      .findMany()
      .then(result => this.setState({ animals: result.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div>
          <NavBar logoImage={'logo.jpg'} />
        </div>
        <div>
          <NewPetForm />
          <Gallery animals={this.state.animals}/>
        </div>
      </div>
    );
  }
}
