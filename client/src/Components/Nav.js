import React, { Component } from 'react';
import Logo from './Logo';

export default class Nav extends Component {
    navStyle = {
        height: '100px',
        width: '100%',
        background: 'grey',
        color:  'white',
        fontSize: '75px'
        
    }

    render() {
        return(
            <div style={this.navStyle}>
                <Logo />nav bar
            </div>
        )
    }
}


