import React from 'react'
import cn from 'classnames'
import { Motion, spring, presets } from 'react-motion'

import styles from './chat-bubble.css'

const ChatBubble = (props) => {
  const { text, external } = props
  const classes = cn({
    'chat-bubble': true,
    'chat-bubble--color': !external,
    'chat-bubble--no-color': external,
    'chat-bubble--reverse': external,
  })
  return (
    <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, presets.wobbly), o: spring(1)}}>
      {({ x, o }) => (
        <div
          className={classes}
          style={{
            WebkitTransform: `translateY(${x}px)`,
            transform: `translateY(${x}px)`,
            opacity: o,
          }}>
          <div className='chat-bubble__circles'>
            <div className='chat-bubble__circle chat-bubble__circle--small' />
            <div className='chat-bubble__circle' />
          </div>
          <div className='chat-bubble__text'>
            {text}
          </div>
        </div>
      )}
    </Motion>
  )
}

ChatBubble.defaultProps = {
  external: false,
}

export default ChatBubble
