import React from 'react'
import Banner from 'components/banner'
import PageSection from 'andyet/components/page-section'
import QA from 'andyet/components/qa'
import myselfDoc from 'andyet/myself.md'
import qualificationsDoc from 'andyet/qualifications.md'

import styles from './root.css'

const Root = () => {
  return (
    <div>
      <Banner />
      <div className='page-sections page-width'>
        <PageSection title='Myself'>
          <div dangerouslySetInnerHTML={{ __html: myselfDoc }} />
        </PageSection>

        <PageSection count='02' title='Qualifications'>
          <QA
            question="You're a leader—first of yourself. You help drive projects in quality and completeness. You can't stand being blocked from getting things done and you know how to get unblocked. You strongly prefer not to be managed."
            count='01'>
            <p>Of course I'm a leader! I lead worship at church. I started a dang company at 17 years old. I turned down multiple job offers because I wanted Brief Media to succeed.</p>
          </QA>
        </PageSection>
      </div>
    </div>
  )
}

export default Root
