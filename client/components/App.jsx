import React from 'react'

import ErrorMessage from './ErrorMessage'
import SearchBox from './SearchBox'
import CountryDetails from './CountryDetails'
import WaitIndicator from './WaitIndicator'
import SubmitButton from './SubmitButton'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <SearchBox />
    <SubmitButton />
    <WaitIndicator />
    <CountryDetails />
  </div>
)

export default App
