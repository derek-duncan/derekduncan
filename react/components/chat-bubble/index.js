import React from 'react'
import cn from 'classnames'
import { Motion, spring, presets } from 'react-motion'

import styles from './chat-bubble.css'

const ChatBubble = (props) => {
  const { text, external } = props
  const classes = cn({
    [styles.chatBubble]: true,
    [styles.chatBubbleColor]: !external,
    [styles.chatBubbleNoColor]: external,
    [styles.chatBubbleReverse]: external,
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
          <div className={styles.chatBubbleCircles}>
            <div className={cn(styles.chatBubbleCircle, styles.chatBubbleCircleSmall)} />
            <div className={styles.chatBubbleCircle} />
          </div>
          <div className={styles.chatBubbleText}>
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
