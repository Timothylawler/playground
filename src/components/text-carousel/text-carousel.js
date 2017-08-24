import React, { Component } from 'react';

import './text-carousel.css';

const texts = [
  "HEADING 1",
  "HEADING 2",
  "HEADING 3"      
]
class TextCarouselComponent extends Component {
  state = {
    activeText: 0,
    isTextGoingAway: false,
    isTextComingIn: false
  }

  constructor(props){
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      this.changeText();
    }, 5000);
  }

  changeText(){
    this.setState( prev => ({
      isTextGoingAway: true,
      isTextComingIn: false
    }));

    setTimeout(() => {
      this.setState(prevState => ({
        activeText: prevState.activeText == 2? 0: prevState.activeText + 1,
        isTextComingIn: true,
        isTextGoingAway: false
      }));
    }, 300);

    setTimeout(() => {
      this.setState({
        isTextComingIn: false,
        isTextGoingAway: false
      });
    }, 650);
  }

  render() {
    const{
      activeText,
      isTextComingIn,
      isTextGoingAway
    } = this.state;
    return (
      <div className="text-carousel">
        <h1 className={isTextGoingAway? "heading-outgoing": isTextComingIn? "heading-incoming": "heading"}>{texts[activeText]}</h1>
      </div>
    );
  }
}
const TextCarousel = TextCarouselComponent;
export {TextCarousel};