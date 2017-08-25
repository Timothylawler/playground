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
    if(this.props.active === undefined){
      this.setState({
        active: !this.state.active
      });
    }
    if(this.props.onClick){
      this.props.onClick();
    }
  }

  render() {
    let active = false;
    if(this.props.active != undefined){
      active = this.props.active;
    }
    else{
      active = this.state.active;
    }
    return (
      <div className="hamburger-cross" onClick={this.onClick}>
        <span className={active? "bar hide": "bar"}></span>
        <span className={active? "bar spin": "bar"}></span>
        <span className={active? "bar hide": "bar"}></span>
        <span className={active? "bar active-cross": "bar"}></span>
      </div>
    );
  }
}
const HamburgerCross = HamburgerCrossComponent;
export {HamburgerCross};