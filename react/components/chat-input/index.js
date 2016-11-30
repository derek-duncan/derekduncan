import React from 'react'

import styles from './chat-input.css'

class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentDidMount() {
    const { input } = this.refs;
    input.addEventListener('keyup', this.handleKeyPress(this), false);
  }

  componentWillUnmount() {
    const { input } = this.refs;
    input.removeEventListener('keyup', this.handleKeyPress(this), false);
  }

  clearInput() {
    const { input } = this.refs;
    input.value = '';
  }

  handleKeyPress(ctx) {
    const { sendMessage } = ctx.props;
    const { input } = ctx.refs;
    return (e) => {
      if (e.which !== 13) return true;
      if (input !== document.activeElement) return true;

      const text = input.value;
      const message = {
        text,
        external: true,
      }

      sendMessage(message);
      this.clearInput();

      return false;
    };
  }

  render() {
    const { sendMessage } = this.props;
    return (
      <div className={styles.chatInputContainer}>
        <input className={styles.chatInput} ref='input' type='text' placeholder="Type a question/command..." />
      </div>
    )
  }
}

export default ChatInput
