import React from 'react'
import {connect} from 'react-redux'
import {updateCountryName} from '../actions'

function SearchBox (props) {
  return (
      <input name='SearchBox' onChange={searchBoxChange} />
  )
  function searchBoxChange (e) {
    console.log(e.target.value)
    props.updateCountryName(e.target.value)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateCountryName: name => {
      const action = updateCountryName(name)
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox)
