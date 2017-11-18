import React, { Component } from 'react';
import {
  HamburgerCross,
} from '../../components'

class MenuAnimation extends Component {
  state = {
    isMenuOpen: false,
  }

  onHamburgerClick = () => {
    console.log('click: ', this.state.isMenuOpen)
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <div>
        <HamburgerCross
          active={isMenuOpen}
          onClick={this.onHamburgerClick}
        />
      </div>
    );
  }
}

export default MenuAnimation;