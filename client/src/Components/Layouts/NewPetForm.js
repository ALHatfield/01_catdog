//TODO: Create new card button

import React, { Component } from 'react'

export default class NewPetForm extends Component {
  render() {
    return (
      <form class="pet-form">
        <input type="name" placeholder="Your pet's name"/>
        <input type="radio" name="animal" value="dog"/> Dog
        <input type="radio" name="animal" value="cat"/> Cat
        <input type="text" placeholder="breed"/>
      </form>
    )
  }
}
