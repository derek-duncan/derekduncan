import React from 'react'
import Banner from 'components/banner'
import PageSection from 'components/page-section'
import LargeArticleCard from 'components/large-article-card'
import personalDoc from 'personal.md'
import myWorkDoc from 'my-work.md'

import styles from './root.css'

const articles = [
  {
    title: '361 People Shining a Light for Those in Paris',
    imgSrc: 'https://cdn-images-1.medium.com/max/800/1*MeXqZXHDBNXRpDfAmqAwJA.jpeg',
		href: 'https://medium.com/@derekduncan96/361-people-shining-a-light-for-those-in-paris-431e03799f14#.tqplxhtia',
    type: 'Article',
    date: '15 Nov 2015',
    category: 'Experiments',
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
