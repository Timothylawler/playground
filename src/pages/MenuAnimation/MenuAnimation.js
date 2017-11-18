import React, { Component } from 'react';
import {
  HamburgerCross,
  AnimatedStripeMenu,
} from '../../components'

class MenuAnimation extends Component {
  state = {
    isMenuOpen: false,
  }

  onHamburgerClick = () => {
    console.log('click: ', this.state.isMenuOpen)
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }))
  }

  onMenuCallback = (action) => {
    this.setState({ isMenuOpen: false })
    if (action) {
      //  Do something
    }
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <div>
        <HamburgerCross
          active={isMenuOpen}
          onClick={this.onHamburgerClick}
        />
        <AnimatedStripeMenu
          isShown={isMenuOpen}
          closeCallback={this.onMenuCallback}
        />
      </div>
    );
  }
}

export default MenuAnimation;