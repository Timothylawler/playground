import React, { Component } from 'react';

import './hamburger-cross.css';
class HamburgerCrossComponent extends Component {
  state = {
    active: false
  }
  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  onClick = (evt) => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const {active} = this.state;
    return (
      <div className="hamburger-cross" onClick={this.onClick}>
        <span className={active? "bar hide": "bar"}></span>
        <span className={active? "bar spin": "bar"}></span>
        <span className={active? "bar hide": "bar"}></span>
        <span className={active? "bar active-cross": "bar hidden"}></span>
      </div>
    );
  }
}
const HamburgerCross = HamburgerCrossComponent;
export {HamburgerCross};