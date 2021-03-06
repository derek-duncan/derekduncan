import React from 'react'
import Banner from 'components/banner'
import PageSection from 'components/page-section'
import LargeArticleCard from 'components/large-article-card'
import Chat from 'components/chat'
import personalDoc from 'personal.md'
import myWorkDoc from 'my-work.md'
import articles from 'homepageArticles'
import cn from 'classnames'

import styles from './root.css'

const Root = () => {
  return (
    <div>
      <Banner />
      <div className={cn(styles.pageSections, styles.pageWidth)}>
        <PageSection count='01' title='Myself'>
          <div dangerouslySetInnerHTML={{ __html: personalDoc }} />
        </PageSection>

        <PageSection count='02' title='My Thoughts'>
          {articles.map((article, i) => (
            <div className={styles.pageSectionsArticle} key={i}>
              <LargeArticleCard article={article} />
            </div>
          ))}
        </PageSection>

        <PageSection count='03' title='My Work'>
          <div dangerouslySetInnerHTML={{ __html: myWorkDoc }} />
        </PageSection>

        <PageSection count='04' title='Chat with me (beta)'>
          <Chat />
        </PageSection>
      </div>
    </div>
  )
}

export default Root
