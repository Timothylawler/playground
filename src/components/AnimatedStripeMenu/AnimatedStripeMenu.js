import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition';
import { close } from '../../images/'
import './AnimatedStripeMenu.css'

const OPACITY_TRANSITION_STRIPE = 500
const TRAVEL_DURATION_STRIPE = 750
const TOTAL_ANIMATION_STRIPE = TRAVEL_DURATION_STRIPE
const MAX_TRANSITION_DELAY_STRIPE = 300
const OPACITY_TRANSITION_MENU = 300
const OPACITY_TRANSITION_CLOSE = 300
const TRAVEL_DURATION_MENU = 500
const TOTAL_ANIMATION_MENU = TRAVEL_DURATION_MENU
const STRIPE_HEIGHT = 24
const TOTAL_ANIMATION_TIME = TOTAL_ANIMATION_STRIPE + MAX_TRANSITION_DELAY_STRIPE
const stripeStyles = {
  default: {
    opacity: 0,
    height: `${STRIPE_HEIGHT}px`,
    width: '100vw',
    backgroundColor: '#fff',
    transform: 'translateX(-100%)',
    transition: `opacity ${OPACITY_TRANSITION_STRIPE}ms ease-in-out, transform ${TRAVEL_DURATION_STRIPE}ms`,
  },
  entered: {
    transform: 'translateX(0)',
    opacity: 0.9,
  },
}
const menuStyles = {
  default: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
    transition: `opacity ${OPACITY_TRANSITION_MENU}ms ease-in-out, transform ${TRAVEL_DURATION_MENU}ms ease-in-out`
  }
}
const closeStyles = {
  default: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  entered: {
    opacity: 1,
    transition: `opacity ${OPACITY_TRANSITION_CLOSE}ms ease-in-out`,
    transform: 'translateX(0)',
  }
}
const wrapperStyles = {
  default: {
    transform: 'translateX(-100%)',
    transition: `transform ${TOTAL_ANIMATION_TIME}ms`,
  },
  entered: {
    transform: 'translateX(0)',
  }
}

const WINDOW_HEIGHT = window.innerHeight;

class AnimatedStripeMenu extends Component {
  static propTypes = {
    isShown: PropTypes.bool,
  }

  static defaultProps = {
    isShown: false,
  }

  render() {
    const {
      isShown,
    } = this.props
    const stripes = () => {
      const component = []
      for(let i = 0; i < WINDOW_HEIGHT / STRIPE_HEIGHT; i++) {
        component.push(
          <Transition
            in={isShown}
            timeout={0}
            key={`menu-stripe ${i}`}
          >
            {(status) => (
              <div
                className='menu-stripe'
                style={{
                  ...stripeStyles.default,
                  ...stripeStyles[status],
                  transitionDelay: `${Math.random() * MAX_TRANSITION_DELAY_STRIPE}ms`
                }}
              />
            )}
          </Transition>
        )
      }
      return component
    }
    return (
      <div className='animated-stripe-menu'>
        <Transition in={isShown} timeout={0}>
          {status => (
            <div
              className='stripe-wrapper'
              style={{
                ...wrapperStyles.default,
                ...wrapperStyles[status],
              }}
            >
              {stripes()}
              <Transition
                in={isShown}
                unmountOnExit
                mountOnEnter
                timeout={TOTAL_ANIMATION_STRIPE}
              >
                {status => (
                  <div
                    className='stripe-menu-wrapper'
                    style={{
                      ...menuStyles.default,
                      ...menuStyles[status],
                    }}
                  >
                    <ul className='stripe-menu'>
                      <li className='stripe-menu--item'>
                        <span
                          onClick={() => this.props.closeCallback(false)}
                        >START</span>
                      </li>
                      <li className='stripe-menu--item'>
                        <span
                          onClick={() => this.props.closeCallback(false)}
                        >ABOUT</span>
                      </li>
                      <li className='stripe-menu--item'>
                        <span
                          onClick={() => this.props.closeCallback(false)}
                        >CONTACT</span>
                      </li>
                    </ul>
                  </div>
                )}
              </Transition>
              <Transition
                in={isShown}
                unmountOnExit
                mountOnEnter
                timeout={TOTAL_ANIMATION_STRIPE}
              >
                {status => (
                  <div className='menu-close-wrapper'>
                    <img
                      className='menu-close--close'
                      src={close}
                      width='64'
                      height='64'
                      onClick={() => this.props.closeCallback(false)}
                      style={{
                        ...closeStyles.default,
                        ...closeStyles[status],
                      }}
                    />
                  </div>
                )}
              </Transition>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export { AnimatedStripeMenu };