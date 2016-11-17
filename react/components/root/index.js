import React from 'react'
import Banner from '../banner'
import PageSection from '../page-section'
import LargeArticleCard from '../large-article-card'

import styles from './root.css'

const articles = [
  {
    title: 'Personal Websites are Something I Never Work On',
    imgSrc: 'http://www.cement.org/images/default-source/codes-standards/codes_splash.jpg?sfvrsn=0',
    type: 'Note',
    date: '12 Sep 2016',
    category: 'A Collection of Ideas',
  },
  {
    title: 'Personal Websites are Something I Never Work On',
    imgSrc: 'http://www.cement.org/images/default-source/codes-standards/codes_splash.jpg?sfvrsn=0',
    type: 'Note',
    date: '12 Sep 2016',
    category: 'A Collection of Ideas',
  },
]

const Root = () => {
  return (
    <div>
      <Banner />
      <div className='page-sections page-width'>
        <PageSection count='01' title='My Ideas'>
          {articles.map((article) => (
            <div className='page-sections-article'>
              <LargeArticleCard article={article} />
            </div>
          ))}
        </PageSection>
      </div>
    </div>
  )
}

export default Root
