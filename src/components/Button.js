import React, { Component } from 'react';

//here is the "Ainda mais produtos aqui" button.
export class Button extends Component {
    //I needed to make a toggle as state, because the button need to get hidden and it's clicked. So I put the toggle as true and when the button is clicked, it is change its status to false and then it get hidden
    state= { buttonToggle: true }
    
    //this function handle the action when the button is clicked. It's change the "buttonToggle" state to "false" and call the function that fetch the api on the app.js
    handleButtonClick = () => {
        this.setState({ buttonToggle: !this.state.buttonToggle})
        this.props.handleCallNextPage();
    }

    render() {
        return (
            <div className="central-cont-container-btn">
                {/* I use a && logical operator to check whether the buttonToggle state is true of false. If it's true the button is gonna show up if it false the butto get hidden*/}
                {this.state.buttonToggle && <button className="button-more-products" onClick={this.handleButtonClick}>Ainda mais produtos aqui!</button>}
            </div>
        );
    }
}

export default Button;
