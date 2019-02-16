//TODO: Create new card button
//TODO: Add search bar


import React, { Component } from 'react'
import Card from './Card'
import API from '../../utils/API'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: []
    }
  }

  componentDidMount = () => this.loadAnimals()

  loadAnimals = () => {
    API
      .findMany()
      .then(result => this.setState({ animals: result.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="ui four column grid">
        {
          // Loop and Print Cards
          this.state.animals.map(function(animal) {
            return <Card key={animal._id} name={animal.name} image="" description="" />
          })
        }
      </div>
    )
  }
}
