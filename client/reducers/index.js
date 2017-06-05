import {combineReducers} from 'redux'

import errorMessage from './error-message'
import country from './country'
import waiting from './waiting'
import countryName from './country-name'

export default combineReducers({
  errorMessage,
  country,
  waiting,
  countryName
})
