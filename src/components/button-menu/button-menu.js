import React, { Component } from 'react';

import './button-menu.css';
class ButtonMenuComponent extends Component {
  state = {
    isMenuOpen: false
  }
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  handleMenuClick = (evt) => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }

  render() {
    const {
      isMenuOpen
    } = this.state;
    return (
      <div className="button-menu">
        <div className="wrapper">
          <button className="menu-button" onClick={this.handleMenuClick}>Menu</button>

          <div className={isMenuOpen? "menu-wrapper": "menu-wrapper hidden"}>
            <ul>
              <li>
                item1
              </li>
              <li>
                item2
              </li>
              <li>
                item3
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
const ButtonMenu = ButtonMenuComponent;
export {ButtonMenu};