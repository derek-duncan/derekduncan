import React from 'react';
import { isArrayLike } from 'ramda';
import trackEvent from 'trackEvent';
import validateMessage from 'validateMessage';
import getResponseToMessage from 'getResponseToMessage';
import responses from 'data/responses';
import findResponse from 'findResponse';
import ChatBubble from 'components/chat-bubble';
import ChatLoader from 'components/chat-loader';
import ChatInput from 'components/chat-input';

import styles from './chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      showLoader: false,
    };
    this.responseDelay = 1250;
    this.storeMessage = this.storeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.scrollToChatBottom = this.scrollToChatBottom.bind(this);
    this.respondToMessage = this.respondToMessage.bind(this);
  }

  componentDidMount() {
    const welcomeMessage = findResponse(responses.welcomes);
    const directionMessage = findResponse(responses.welcomeDirections);
    this.sendMessage([welcomeMessage, directionMessage], false);
  }

  scrollToChatBottom() {
    this.chatContainer.scrollTop = Math.floor(
      this.chatContainer.scrollHeight - this.chatContainer.clientHeight,
    );
  }

  storeMessage(message) {
    const timestamp = Math.floor(new Date() / 1000);
    this.setState({
      messages: [...this.state.messages, { ...message, timestamp }],
    });
  }

  respondToMessage(message) {
    const response = getResponseToMessage(message);
    if (!response) return;

    this.setState({ showLoader: true });
    setTimeout(() => {
      this.setState({ showLoader: false });
      this.sendMessage(response, false);
    }, this.responseDelay);
  }

  sendMessage(message, expectResponse = true) {
    if (isArrayLike(message)) {
      message.forEach((m, i) => {
        return setTimeout(() => {
          this.sendMessage(m, expectResponse);
        }, this.responseDelay * i);
      });
      return;
    }
    if (!validateMessage(message)) return;

    this.storeMessage(message);
    this.scrollToChatBottom();

    if (expectResponse) {
      this.respondToMessage(message);
    }

    if (!message.external) {
      trackEvent('chat', 'message', 'New Messages', message.text);
    }
  }

  render() {
    const { showLoader, messages } = this.state;
    return (
      <div className={styles.chat}>
        <div
          className={styles.chatContainer}
          ref={(chatContainer) => { this.chatContainer = chatContainer; }}
        >
          <div className={styles.chatMessages}>
            {messages.map((message, i) => (
              <ChatBubble
                text={message.text}
                external={message.external}
                key={i}
              />
            ))}
            { showLoader ? <ChatLoader /> : null }
          </div>
        </div>
        <ChatInput sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default Chat;
