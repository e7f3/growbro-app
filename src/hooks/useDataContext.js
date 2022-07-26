import { useContext } from 'react'
import { DataContext } from '../context/dataContext'

export const useDataContext = () => useContext(DataContext)
