import React, { Component } from 'react';

import './button-menu.css';
class ButtonMenuComponent extends Component {
  state = {
    isMenuOpen: false,
    activeMenu: 0
  }

  handleMenuClick = (evt) => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }

  handleMenuItemClick(index){
    this.setState({
      activeMenu: index,
    });
    setTimeout(() => {
      this.setState({
        isMenuOpen: false
      })
    }, 75)
  }

  _getMenuItemClassName(index) {
    let classname = "material-icons ";
    if(this.state.activeMenu === index){
      classname += "active";
    }
    return classname;
  }

  render() {
    const {
      isMenuOpen,
      activeMenu
    } = this.state;
    return (
      <div className="button-menu">
        <div className="wrapper">
          <button className="menu-button" onClick={this.handleMenuClick}>
            <i className="material-icons">{isMenuOpen? "close": "menu"}</i>
          </button>

          <div className={isMenuOpen? "menu-wrapper": "menu-wrapper hidden"}>
            <ul>
              <li onClick={() => this.handleMenuItemClick(0)}>
                <i className={this._getMenuItemClassName(0)}>home</i>
              </li>
              <li onClick={() => this.handleMenuItemClick(1)}>
                <i className={this._getMenuItemClassName(1)}>person</i>
              </li>
              <li onClick={() => this.handleMenuItemClick(2)}>
                <i className={this._getMenuItemClassName(2)}>search</i>
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