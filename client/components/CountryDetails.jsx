import React from 'react'
import {connect} from 'react-redux'

function countryDetails (props) {
  console.log(props.country)
  return (
    <div>
      <p>Country: {props.country.name}</p>
      <p>Native name: {props.country.nativeName}</p>
      <p>Region: {props.country.region}</p>
      <p>Subregion: {props.country.subregion}</p>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    country: state.country
  }
}

export default connect(mapStateToProps)(countryDetails)
