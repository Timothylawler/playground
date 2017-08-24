import React, { Component } from 'react';
import { ApiService } from '../../utils';

//	Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addExample,
  removeExample
} from '../../redux/actions';

//  Style
import './secondSection.css';


class SecondSectionComponent extends Component {
  constructor(props){
    super(props);
    this.apiService = new ApiService();
  }

  render() {
    return (
      <div className="second-section">
        <div className="container">
          <h2>SECOND SECTION</h2>
          
        </div>
      </div>
    );
  }
}


const SecondSection = connect(state => ({
  items: state.exampleReducer.items
}), dispatch => ({
  	actions: bindActionCreators({addExample, removeExample}, dispatch)
}))(SecondSectionComponent);

export {SecondSection};