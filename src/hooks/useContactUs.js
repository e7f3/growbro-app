import { useState } from 'react'

export const useContactUs = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    console.log('test')
    setValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(value)
  }

  return {
    value,
    handleChange,
    handleSubmit,
  }
}
