import React from 'react'
import styles from './root.css'

const Root = () => {
  return (
    <div className='banner'>
      <img className='banner__mark' src='/images/mark.svg' />
      <h1 className='banner__name'>Derek Duncan<span>.</span></h1>
      <p className='banner__text'>A Website Developer and Designer in Tulsa, Oklahoma.</p>
    </div>
  )
}

export default Root
