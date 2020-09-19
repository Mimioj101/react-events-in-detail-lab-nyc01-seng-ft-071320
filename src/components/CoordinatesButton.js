// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    receiveCoordinates = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return(
            <button onClick={this.receiveCoordinates}>Coordinates</button>
        )
    }

}