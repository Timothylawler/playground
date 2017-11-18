import React, { Component } from 'react';
import {
  HamburgerCross
} from '../';
import './popout-menu.css';
class PopoutMenuComponent extends Component {
  state = {
    isOpen: false,
    activeItem: 0
  }
  _getMenuClassName() {
    let classname = "popout ";
    if(!this.state.isOpen){
      classname += "hidden ";
    }
    return classname;
  }

  _getItemClassName(index){
    let classname = "popout-item ";
    if(this.state.activeItem === index){
      classname += " active";
    }
    return classname;
  }

  _handleHamburgerClick = () =>{
    this.setState(prevState =>({
      isOpen: !prevState.isOpen
    }))
  }

  _handlemenuItemClick = (index) => {
    this.setState({
      activeItem: index,
      isOpen: false
    })
  }

  render() {
    return (
      <div className="popout-menu">
        <HamburgerCross active={this.state.isOpen} onClick={this._handleHamburgerClick}/>
        <ul className={this._getMenuClassName()}>
          <li className={this._getItemClassName(0)} onClick={() => this._handlemenuItemClick(0)}>
            Item 1
          </li>
          <li className={this._getItemClassName(1)} onClick={() => this._handlemenuItemClick(1)}>
            Item 2
          </li>
          <li className={this._getItemClassName(2)} onClick={() => this._handlemenuItemClick(2)}>
            Item 3
          </li>
        </ul>
      </div>
    );
  }
}
const PopoutMenu = PopoutMenuComponent;
export {PopoutMenu};