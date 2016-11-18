import React from 'react'
import Banner from 'components/banner'
import PageSection from 'components/page-section'
import LargeArticleCard from 'components/large-article-card'
import personalDoc from 'personal.md'
import myWorkDoc from 'my-work.md'

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
        <PageSection count='01' title='Myself'>
          <div dangerouslySetInnerHTML={{ __html: personalDoc }} />
        </PageSection>

        <PageSection count='02' title='My Ideas'>
          {articles.map((article, i) => (
            <div className='page-sections-article' key={i}>
              <LargeArticleCard article={article} />
            </div>
          ))}
        </PageSection>

        <PageSection count='03' title='My Work'>
          <div dangerouslySetInnerHTML={{ __html: myWorkDoc }} />
        </PageSection>
      </div>
    </div>
  )
}

export default Root
