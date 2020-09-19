// Code CoordinatesButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    localClickHandler = (e) => {
        console.log("clicked")
        e.persist();
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }


    render() {
        return(
            <button onClick={this.localClickHandler}>Delayed</button>
        )
    }

}