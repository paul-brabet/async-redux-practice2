import {ADD_COUNTRY} from '../actions'

function countryName (state = '', action) {
  switch (action.type) {
    case ADD_COUNTRY:
      return action.name

    default:
      return state
  }
}

export default countryName
