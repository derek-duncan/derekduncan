import React from 'react';
import styles from './chat-input.css';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.prepareAndSendMessage = this.prepareAndSendMessage.bind(this);
  }

  componentDidMount() {
    const { input } = this;
    input.addEventListener('keyup', this.handleKeyPress(this), false);
  }

  componentWillUnmount() {
    const { input } = this;
    input.removeEventListener('keyup', this.handleKeyPress(this), false);
  }

  clearInput() {
    const { input } = this;
    input.value = '';
  }

  prepareAndSendMessage() {
    const { sendMessage } = this.props;
    const { input } = this;

    const text = input.value;
    const message = {
      text,
      external: false,
    };

    sendMessage(message);
    this.clearInput();
  }

  handleKeyPress(ctx) {
    const { sendMessage } = ctx.props;
    const { input } = ctx;
    return (e) => {
      if (e.which !== 13) return true;
      if (input !== document.activeElement) return true;
      ctx.prepareAndSendMessage();
      return false;
    };
  }

  render() {
    return (
      <div className={styles.chatInputContainer}>
        <div className={styles.chatInputInner}>
          <input
            className={styles.chatInput}
            ref={input => { this.input = input; }}
            type="text"
            placeholder="Type a question/command..."
          />
          <button className={styles.chatInputButton} onClick={this.prepareAndSendMessage}>
            <img src="/images/right-chevron.svg" alt="Send message" />
          </button>
        </div>
      </div>
    );
  }
}

ChatInput.propTypes = {
  sendMessage: React.PropTypes.func,
};

export default ChatInput;
