import './Research.scss'

import React from 'react'
import { useDataContext } from '../../../../hooks/useDataContext'
import Container from '../../../Container/Container'
import ResearchSteps from './components/ResearchSteps/ResearchSteps'
import ResearchTotal from './components/ResearchTotal/ResearchTotal'
import ResearchInfo from './components/ResearchInfo/ResearchInfo'
import ResearchExperience from './components/ResearchExperience/ResearchExperience'

export default function Research() {
  const { data } = useDataContext()
  const {
    title: titleText,
    mission: missionText,
    steps: researchStepsArray,
    share: { title: shareTitle, text: shareText },
  } = data.main.research

  return (
    <section className='research'>
      <Container>
        <div className='research__content' id='research'>
          <ResearchInfo
            titleText={titleText}
            missionText={missionText}
            researchStepsArray={researchStepsArray}
          />
          <ResearchExperience shareText={shareText} shareTitle={shareTitle} />
        </div>
      </Container>
    </section>
  )
}
