import './ContactUsForm.scss'

import React from 'react'
import { useContactUs } from '../../../../hooks/useContactUs'
import { useDataContext } from '../../../../hooks/useDataContext'

export default function ContactUsForm() {
  const { data } = useDataContext()
  const { placeholder } = data.footer.input
  const { send: buttonText } = data.general.buttons

  const { value, handleChange, handleSubmit } = useContactUs()

  return (
    <form className='contact-us-form' onSubmit={handleSubmit}>
      <div className='contact-us-form__content'>
        <input
          className='contact-us-form__input paragraph paragraph--small'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <button className='contact-us-form__button'>
          <span className='paragraph paragraph--medium paragraph--bold'>
            {buttonText}
          </span>
        </button>
      </div>
    </form>
  )
}
