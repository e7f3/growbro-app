import './Research.scss'

import React from 'react'
import { useDataContext } from '../../../../hooks/useDataContext'
import Container from '../../../Container/Container'
import ResearchSteps from './components/ResearchSteps/ResearchSteps'
import ResearchTotal from './components/ResearchTotal/ResearchTotal'

export default function Research() {
  const { data } = useDataContext()
  const {
    title: titleText,
    mission: missionText,
    steps: researchStepsArray,
    share: { title: shareTitle, text: shareText },
  } = data.main.research

  return (
    <section className='research' id='research'>
      <Container>
        <div className='research__content'>
          <div className='research__title-wrapper'>
            <h1 className='research__title title title--h1'>{titleText}</h1>
          </div>
          <div className='research__our-mission'>
            <span className='paragraph paragraph--small'>{missionText}</span>
          </div>
          <ResearchSteps researchSteps={researchStepsArray} />
          <div className='research__share-experience'>
            <div className='research__share-experience-title'>
              <h3 className='title title--h3'>{shareTitle}</h3>
            </div>
            <div className='research__share-experience-text'>
              <span className='paragraph paragraph--small'>{shareText}</span>
            </div>
          </div>
          <div className='research__total' id='results'>
            <ResearchTotal />
          </div>
        </div>
      </Container>
    </section>
  )
}
