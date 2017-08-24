import React, { Component } from 'react';

import './expanding-circles.css';
class ExpandingCirclesComponent extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="expanding-circles">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    );
  }
}
const ExpandingCircles = ExpandingCirclesComponent;
export {ExpandingCircles};