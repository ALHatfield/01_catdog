import React, { Component } from 'react'
import Card from './Card'
import API from '../../utils/API'

export default class Gallery extends Component {
  render() {
    return (
      <div className="flex-container">
        {
          // Loop and Print Cards
          this.props.animals.map(function(animal) {
            return <Card key={animal._id} id={animal._id} name={animal.name} image="" description="" />
          })
        }
      </div>
    )
  }
}