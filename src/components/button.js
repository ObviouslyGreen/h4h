import React, { Component } from 'react';

import '../assets/css/app.css'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      knowAssailant: true,
      backgroundColor: this.props.backgroundColor
    };
    this.pressedButton = this.pressedButton.bind(this);
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({
      backgroundColor: nextProps.backgroundColor
    })
  }


  pressedButton(event) {
    console.log(this.state.backgroundColor);
    this.props.changeBackgroundColor();
  };
  
  

  render() {
    const knownAssailant = this.state.knowAssailant;

    return (
      <div class="Button" style={{ backgroundColor: this.state.backgroundColor }} onClick={()=>{this.pressedButton()}}>
      </div>
    );
  }
}

export default Button
