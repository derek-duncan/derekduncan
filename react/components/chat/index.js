import React from 'react'
import ChatBubble from 'components/chat-bubble'

import styles from './chat.css'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    const messages = [
      { text: 'Hi! I\'m Derek.', external: false },
      { text: 'Want to learn more about me? Well, you can use this chat interface!', external: false },
      { text: 'Yes please', external: true },
    ]

    messages.forEach((message, i) => (
      setTimeout(() => {
        this.setState({
          messages: [...this.state.messages, message],
        })
      }, 1000 * i)
    ))
  }

  render() {
    const { messages } = this.state
    return (
      <div className='chat'>
        {messages.map((message, i) => (
          <ChatBubble text={message.text} external={message.external} key={i} />
        ))}
      </div>
    )
  }
}

export default Chat
