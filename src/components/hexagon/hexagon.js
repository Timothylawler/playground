import React, { Component } from 'react';

import './hexagon.css';
class HexagonComponent extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="hexagon"></div>
    );
  }
}
const Hexagon = HexagonComponent;
export {Hexagon};