import {RECEIVE_COUNTRY} from '../actions'

function country (state = [], action) {
  switch (action.type) {
    case RECEIVE_COUNTRY:
      return action.country

    default:
      return state
  }
}

export default country
