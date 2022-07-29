import './ResearchInfo.scss'

import React from 'react'
import ResearchSteps from '../ResearchSteps/ResearchSteps'

export default function ResearchInfo({
  titleText,
  missionText,
  researchStepsArray,
}) {
  return (
    <div className='research-info'>
      <div className='research-info__title-wrapper'>
        <h1 className='research-info__title title title--h1'>{titleText}</h1>
      </div>
      <div className='research-info__our-mission'>
        <span className='paragraph paragraph--small'>{missionText}</span>
      </div>
      <ResearchSteps researchSteps={researchStepsArray} />
    </div>
  )
}
