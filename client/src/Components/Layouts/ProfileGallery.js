//TODO: Profile cards need to be generated from backend.
//      Most likely using axios here to GET the animals.
//      Results coming back should be an object

import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import faker from 'faker'

export default class ProfileGallery extends Component {

  componentWillMount = () => {
    // before this component mounts data needs to be retreived from backend
    // axios.get('/api/...)
  }

  render() {
    return (
      <div>
        <ProfileCard 
          name={faker.name.firstName()}
          image={faker.image.animals()}
          description={faker.lorem.sentence()}
        />
      </div>
    )
  }
}
