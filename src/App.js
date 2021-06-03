import React from 'react'
import Dashboard from './containers/Dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalSyles } from './styles/Global'
import { lightTheme, darkTheme } from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalSyles />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
