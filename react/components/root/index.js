import React from 'react'
import Banner from 'components/banner'
import PageSection from 'components/page-section'
import LargeArticleCard from 'components/large-article-card'
import Chat from 'components/chat'
import personalDoc from 'personal.md'
import myWorkDoc from 'my-work.md'
import articles from 'homepage-articles'

import styles from './root.css'

const Root = () => {
  return (
    <div>
      <Banner />
      <div className='page-sections page-width'>
        <PageSection count='01' title='Chat with me'>
          <Chat />
        </PageSection>

        <PageSection count='02' title='Myself'>
          <div dangerouslySetInnerHTML={{ __html: personalDoc }} />
        </PageSection>

        <PageSection count='03' title='My Thoughts'>
          {articles.map((article, i) => (
            <div className='page-sections-article' key={i}>
              <LargeArticleCard article={article} />
            </div>
          ))}
        </PageSection>

        <PageSection count='04' title='My Work'>
          <div dangerouslySetInnerHTML={{ __html: myWorkDoc }} />
        </PageSection>
      </div>
    </div>
  )
}

export default Root
