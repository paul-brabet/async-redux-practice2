import React from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../actions'

function SubmitButton (props) {
  return (<button
    onClick={() => props.fetchCountry(props.countryName)}
    >Fetch Posts</button>
  )
}

function mapStateToProps (state) {
  return {
    countryName: state.countryName
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCountry: countryName => {
      const action = fetchCountry(countryName)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
