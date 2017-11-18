import React, { Component } from 'react';

import './chat-box.css';
class ChatBoxComponent extends Component {
  render() {
    return (
      <div className="chat-box">
        <div className="box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque aliquid vero reprehenderit error. Placeat, dicta.</p>
        </div>
      </div>
    );
  }
}
const ChatBox = ChatBoxComponent;
export {ChatBox};