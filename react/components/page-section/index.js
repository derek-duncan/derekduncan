import React from 'react'
import styles from './page-section.css'

const PageSection = (props) => {
  const { count, title, children } = props
  return (
    <div className={styles.pageSection}>
      <div className={styles.pageSectionInfo}>
        <strong className={styles.pageSectionCount}>{count}</strong>
        <h3 className={styles.pageSectionTitle}>{title}</h3>
      </div>

      <div className={styles.pageSectionContent}>
        {children}
      </div>
    </div>
  )
}

export default PageSection
