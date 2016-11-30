import React from 'react'
import styles from './large-article-card.css'

const LargeArticleCard = ({ article }) => {
  const { title, href, type, date, category, imgSrc } = article

  return (
    <div className={styles.lrgArticleCard}>
      <a className={styles.lrgArticleCardLink} href={href} target='_blank'>
        <h4 className={styles.lrgArticleCardTitle}>{title}</h4>
      </a>
      <div className={styles.lrgArticleCardImage}>
        <img src={imgSrc} />
      </div>
      <div className={styles.lrgArticleCardProps}>
        <span>{type} / Posted on {date}</span>
      </div>
      <div className={styles.lrgArticleCardCategory}>
        <span>{category}</span>
      </div>
    </div>
  )
}

export default LargeArticleCard
