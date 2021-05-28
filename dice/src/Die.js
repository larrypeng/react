import React, {Component} from 'react';
import './Die.css'

class Die extends Component {
    render (){
        // Use Font Awesome lib to create icon
        // String templating
        return <i className={`Die fas fa-dice-${this.props.face}`} />
    }
}

export default Die;