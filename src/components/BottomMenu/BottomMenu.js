import React, { Component } from 'react';
import classNames from 'classnames';
import './BottomMenu.css';
import { close } from '../../images';

const Button = ({ onClick, text, img }) => {

  return (
    <button onClick={onClick} className="Button">
      { text ? text : <img src={close} />}
    </button>
  )
}

export default class BottomMenu extends Component {
  state = {
    isOpen: false,
  }

  onMenuToggle = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))

  render() {
    return (
      <div className={classNames('BottomMenu', {'BottomMenu--active': this.state.isOpen})}>
        <div className="BottomMenu__controller">
          <div>asd</div>
          <Button onClick={this.onMenuToggle} img={close} />
          <div>asd</div>
        </div>
        <div
          className={
            classNames(
              'BottomMenu__content',
              {'BottomMenu__content--active': this.state.isOpen}
            )
          }
        >
          <h3>title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ut!</p>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    )
  }
}
