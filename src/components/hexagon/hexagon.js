import React, { Component } from 'react';

import './hexagon.css';
class HexagonComponent extends Component {
  _getClassName(){
    let classname = "hexagon ";
    if(this.props.animated){
      classname += "animated ";
    }
    if(this.props.rotate){
      classname += "rotate ";
    }
    return classname;
  }

  render() {
    return (
      <div className={this._getClassName()}></div>
    );
  }
}
const Hexagon = HexagonComponent;
export {Hexagon};