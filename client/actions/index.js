import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_COUNTRY = 'RECEIVE_COUNTRY'
export const REQUEST_COUNTRY = 'REQUEST_COUNTRY'
export const ADD_COUNTRY = 'ADD_COUNTRY'

export const requestCountry = () => {
  return {
    type: REQUEST_COUNTRY
  }
}

export const receiveCountry = (country) => {
  return {
    type: RECEIVE_COUNTRY,
    country: country
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function updateCountryName (name) {
  return {
    type: ADD_COUNTRY,
    name: name
  }
}

export function fetchCountry (countryName) {
  const countryNameClean = countryName.split(' ').join('%20')
  return (dispatch) => {
    dispatch(requestCountry())
    request
      .get(`https://restcountries-v1.p.mashape.com/name/${countryNameClean}`)
      .set('X-Mashape-Key', '0rR550IzeqmshbwyXyjkk6tV3EiCp107NunjsnQb95DAL0W1nP')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receiveCountry(res.body[0]))
      })
  }
}
