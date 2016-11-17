import React from 'react'
import styles from './page-section.css'

const PageSection = (props) => {
  const { count, title, children } = props
  return (
    <div className='page-section'>
      <div className='page-section__info'>
        <strong className='page-section__count'>{count}</strong>
        <h3 className='page-section__title'>{title}</h3>
      </div>

      <div className='page-section__content'>
        {children}
      </div>
    </div>
  )
}

export default PageSection
