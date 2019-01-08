import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <ul>
                    <li>dog</li>
                    <li>dog</li>
                    <li>dog</li>
                </ul>
            </div>
        )
    }
}