import React from 'react'
import styles from './qa.css'

const QA = (props) => {
  const { question, count, children } = props
  return (
    <div className='qa'>
      <div className='qa__count'>
        <span>{count}</span>
      </div>
      <div className='qa__content'>
        <h4 className='qa__question'>{question}</h4>
        {children}
      </div>
    </div>
  )
}

export default QA
