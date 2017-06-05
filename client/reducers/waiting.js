import {
  SHOW_ERROR,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_COUNTRY:
      return true

    case RECEIVE_COUNTRY:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
