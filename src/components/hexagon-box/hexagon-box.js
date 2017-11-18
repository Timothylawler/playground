import React, { Component } from 'react';
import {
  Hexagon
} from '../';
import './hexagon-box.css';
class HexagonBoxComponent extends Component {
  render() {
    return (
      <div className="hexagon-box">
        
          <div className="row">
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
          </div>
          <div className="row">
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
          </div>
          <div className="row">
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
          </div>
          <div className="row">
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
          </div>
          <div className="row">
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
            <Hexagon animated={true} rotate={true}/>
          </div>
        
      </div>
    );
  }
}
const HexagonBox = HexagonBoxComponent;
export {HexagonBox};