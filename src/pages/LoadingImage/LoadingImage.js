import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import './LoadingImage.css'
import LoadingImageComponent from '../../components/LoadingImageComponent'

const IMAGE_ADDRESS = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Otter_frei.jpg/250px-Otter_frei.jpg'

export default class LoadingImage extends Component {
  state = {
    width: 10,
    borderSpace: 5,
  }

  getImage = () => {
    return new Promise((resolve) => {
      setTimeout(resolve(IMAGE_ADDRESS), 1500)
    })
  }

  render() {
    return (
      <div className="LoadingImage">
        <div className="LoadingImage__image">
          <LoadingImageComponent
            src={IMAGE_ADDRESS}
            borderWidth={this.state.width}
            borderSpace={this.state.borderSpace}
          />
        </div>
        <div className="LoadingImage__settings">
          <p>borderWidth</p>
          <Slider
            min={1}
            max={100}
            value={this.state.width}
            onChange={val => this.setState({width: val})}
          />
          <p>borderSpace</p>
          <Slider
            min={0}
            max={100}
            value={this.state.borderSpace}
            onChange={val => this.setState({borderSpace: val})}
          />
        </div>
      </div>
    )
  }
}
