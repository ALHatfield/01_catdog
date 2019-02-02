//TODO: Profile cards need to be generated from backend.
//      Most likely using axios here to GET the animals.
//      Results coming back should be an object

import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import API from '../../utils/API'

export default class ProfileGallery extends Component {
  
  componentDidMount = () => {
    this.loadAnimals();
  }

  loadAnimals = () => {
    API
      .findMany()
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <ProfileCard 
          name=""
          image=""
          description=""
        />
      </div>
    )
  }
}
