import './OurBenefits.scss'

import React from 'react'
import { useDataContext } from '../../../../../../hooks/useDataContext'

export default function OurBenefits() {
  const { data } = useDataContext()
  const {
    benefits: benefitsArray,
    title: { title: titleText, subtitle: subtitleText },
  } = data.main.about

  return (
    <div className='our-benefits'>
      <div className='our-benefits__title-wrapper'>
        <h2 className='our-benefits__title'>{titleText}</h2>
        <h3 className='title title--h3 our-benefits__subtitle'>
          {subtitleText}
        </h3>
      </div>

      <ul className='our-benefits__benefits-list'>
        {benefitsArray.map((benefit, index) => {
          const { text, icon: iconName } = benefit
          const mobileIconName = iconName.split('.svg')[0].concat('-mobile.svg')

          const Icon = require(`../../../../../../assets/icons/${iconName}`)
          const MobileIcon = require(`../../../../../../assets/icons/${mobileIconName}`)

          return (
            <li className='our-benefits__benefit' key={text + index}>
              <div className='our-benefits__benefit-content'>
                <span className='our-benefits__benefit-text paragraph paragraph paragraph--medium'>
                  {text}
                </span>
                <div className='our-benefits__icon-wrapper'>
                  <picture>
                    <source media='(max-width: 900px)' srcSet={MobileIcon} />
                    <source media='(min-width: 900px)' srcSet={Icon} />
                    <img src={Icon} alt='benefit-icon' />
                  </picture>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
