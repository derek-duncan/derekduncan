import React from 'react'
import validateMessage from 'validateMessage';
import ChatBubble from 'components/chat-bubble'
import ChatInput from 'components/chat-input'

import styles from './chat.css'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    if (!validateMessage(message)) return;
    this.setState({
      messages: [...this.state.messages, message],
    });
  }

  render() {
    const { messages } = this.state
    return (
      <div className={styles.chat}>
        <div className={styles.chatContainer}>
          <div className={styles.chatMessages}>
            {messages.map((message, i) => (
              <ChatBubble text={message.text} external={message.external} key={i} />
            ))}
          </div>
        </div>
        <ChatInput sendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default Chat
