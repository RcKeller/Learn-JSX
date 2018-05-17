import React, { Component } from 'react'

class Fetch extends Component {
  state = {
    loaded: false,
    result: undefined,
    error: undefined
  }
  componentDidMount () {
  fetch('https://example.com')
    .then(res => res.json())
    .then(result => this.setState({ loaded: true, result }))
    .catch(err => this.setState({ loaded: true, error }))
  }
  render () {
    const { loaded, result, error } = this.state
    if (error) {
      return ( <span>ERROR: {error.message}</span> )
    } else if (!loaded) {
      return ( <span>Loading...</span> )
    }
    return (
      <span>{JSON.stringify(result)}</span>
    )
  }
}

export default Fetch
