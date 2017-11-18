import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './hamburger-cross.css';
class HamburgerCrossComponent extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.bool,
  }

  static defaultProps = {
    onClick: null,
    active: undefined,
  }

  state = {
    active: false
  }

  onClick = (evt) => {
    if(!this.props.active){
      this.setState({
        active: !this.state.active
      });
    }
    if(this.props.onClick){
      this.props.onClick();
    }
  }

  render() {
    let active = this.props.active !== undefined? this.props.active: this.state.active;
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