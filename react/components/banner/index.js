import React from 'react'
import Icon from '../icon'

import styles from './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <img className='banner__mark' src='/images/mark.svg' />
      <h1 className='banner__name'>Derek Duncan<span>.</span></h1>
      <p className='banner__text'>A Website Developer and Designer in Tulsa, Oklahoma.</p>
      <img className='banner__background' src='/images/profile-image.png' />
      <div className='banner__icons'>
        <a href='/github' title='Github' target='_blank'>
          <Icon className='banner__icon' type='github' />
        </a>
        <a href='/insta' title='Instagram' target='_blank'>
          <Icon className='banner__icon' type='insta' />
        </a>
        <a href='/twitter' title='Twitter' target='_blank'>
          <Icon className='banner__icon' type='twitter' />
        </a>
      </div>
    </div>
  )
}

export default Banner
