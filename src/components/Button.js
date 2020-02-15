import React, { Component } from 'react';

export class Button extends Component {
    state= { buttonToggle: true }

    handleButtonClick = (props) => {
        this.setState({ buttonToggle: !this.state.buttonToggle})
        this.props.handleCallNextPage();
    }

    render() {
        return (
            <div>
                {this.state.buttonToggle && <button onClick={this.handleButtonClick}>Ainda mais produtos aqui!</button>}
            </div>
        );
    }
}

export default Button;
