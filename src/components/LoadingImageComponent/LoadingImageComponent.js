import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition';

import './LoadingImageComponent.css'

const PLACEHOLDER = 'http://www.thestoryof.org/wp-content/uploads/2016/09/profile-placeholder.jpg'
const baseDimensions = 256;
export default class LoadingImageComponent extends Component {
  state = {
    hasImageLoaded: false,
  }

  componentDidMount() {
    const img = new Image()

    img.addEventListener('load', this.onImageLoaded)
    img.src = this.props.src
  }

  onImageLoaded = () => {
    setTimeout(() => {
      if (this.imageRef) {
        this.setState({
          hasImageLoaded: true,
        })
      }

    }, 1500)
  }

  getBorderStyle = () => ({
    width: `calc(${baseDimensions}px + ${this.props.borderSpace}px + ${this.props.borderWidth}px)`,
    height: `calc(${baseDimensions}px + ${this.props.borderSpace}px + ${this.props.borderWidth}px)`,
    backgroundColor: '#fff',
    left: `calc(-${this.props.borderWidth}px / 2 + -${this.props.borderSpace}px / 2)`,
    top: `calc(-${this.props.borderWidth}px / 2 + -${this.props.borderSpace}px / 2)`,
  })

  getSpacerStyle = () => ({
    width: `calc(${baseDimensions}px + ${this.props.borderSpace}px)`,
    height: `calc(${baseDimensions}px + ${this.props.borderSpace}px)`,
    left: `calc(-${this.props.borderSpace}px / 2)`,
    top: `calc(-${this.props.borderSpace}px / 2)`,
  })

  render() {
    return (
      <div>
        <Transition
          in={this.state.hasImageLoaded}
          timeout={0}
        >
         {status => {
           console.log(status)
           return (
             <div className="relative">
                <div className="LoadingImageComponent__border" style={this.getBorderStyle()} />
                <div className="LoadingImageComponent__border__spacer" style={this.getSpacerStyle()}/>
                <img
                  width={baseDimensions}
                  height={baseDimensions}
                  ref={ref => { this.imageRef = ref }}
                  className={`LoadingImageComponent LoadingImageComponent--${status}`}
                  src={status === 'entered' ? this.props.src : PLACEHOLDER}
                />
              </div>
           )}
          }
        </Transition>
      </div>
    )
  }
}
