import React from 'react'
import styles from './large-article-card.css'

const LargeArticleCard = ({ article }) => {
  const { title, href, type, date, category, imgSrc } = article

  return (
    <div className='lrg-article-card clearfix'>
      <a className='lrg-article-card__link' href={href}>
        <h4 className='lrg-article-card__title'>{title}</h4>
      </a>
      <div className='lrg-article-card__image'>
        <img src={imgSrc} />
      </div>
      <div className='lrg-article-card__props'>
        <span>{type} / Posted on {date}</span>
      </div>
      <div className='lrg-article-card__category'>
        <span>{category}</span>
      </div>
    </div>
  )
}

export default LargeArticleCard
