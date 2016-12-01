import React from 'react'
import Icon from '../icon'

import styles from './banner.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img className={styles.bannerMark} src='/images/mark.svg' />
      <h1 className={styles.bannerName}>Derek Duncan<span>.</span></h1>
      <p className={styles.bannerText}>A Website Developer and Designer in Tulsa, Oklahoma.</p>
      <img className={styles.bannerBackground} src='/images/profile-image.png' />
      <div className={styles.bannerIcons}>
        <a href='/github' title='Github' target='_blank'>
          <Icon className={styles.bannerIcon} type='github' />
        </a>
        <a href='/insta' title='Instagram' target='_blank'>
          <Icon className={styles.bannerIcon} type='insta' />
        </a>
        <a href='/twitter' title='Twitter' target='_blank'>
          <Icon className={styles.bannerIcon} type='twitter' />
        </a>
      </div>
    </div>
  )
}

export default Banner
