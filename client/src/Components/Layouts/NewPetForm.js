//TODO: Create new card button

import React, { Component } from 'react'

export default class NewPetForm extends Component {
  render() {
    return (
      <form>
        <input type="name"/>
        <input type="radio" name="animal" value="dog"/> Dog
        <input type="radio" name="animal" value="cat"/> Cat
      </form>
    )
  }
}
