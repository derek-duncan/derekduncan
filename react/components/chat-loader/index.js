import React from 'react';
import { Motion, spring, presets } from 'react-motion';

import styles from './chat-loader.css';

const ChatLoader = () => {
  return (
    <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, presets.wobbly), o: spring(1)}}>
      {({ x, o }) => (
        <div
          className={styles.chatLoader}
          style={{
            WebkitTransform: `translateY(${x}px)`,
            transform: `translateY(${x}px)`,
            opacity: o,
          }}
        >
          <div className={styles.chatLoaderText}>...</div>
        </div>
      )}
    </Motion>
  );
};

export default ChatLoader;
