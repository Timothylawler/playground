import React, { Component } from 'react';
import { ApiService } from '../../utils';
import './firstSection.css';
class FirstSection extends Component {
  constructor(props){
    super(props);
    this.apiService = new ApiService();
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="first-section">
        <div className="container">
          <h2>firstSection</h2>
          
        </div>
      </div>
    );
  }
}

export {FirstSection};