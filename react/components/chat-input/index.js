import React from 'react'

import styles from './chat-input.css'

class ChatInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <input className={styles.chatInput} type='text' />
      </div>
    )
  }
}

export default ChatInput
