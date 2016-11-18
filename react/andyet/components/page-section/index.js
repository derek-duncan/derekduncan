import React from 'react'
import styles from './page-section.css'

const PageSection = (props) => {
  const { title, children } = props
  return (
    <div className='page-section'>
      <h2 className='page-section__title'>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export default PageSection
