import React from 'react'
import { DataContext } from '../../context/dataContext'
import { getInitialData } from '../../utils/getInitialData'

const data = getInitialData()

export default function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}
