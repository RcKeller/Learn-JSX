import React, { Component } from 'react'


class AsyncAwait extends Component {
  state = {}

  async componentDidMount () {
    const res = await fetch('https://example.com')
    const something = await res.json()
    this.setState({ res: something })
  }
  render () {
    return (
      <div id='async-await'>
        AsyncAwait
      </div>
    )
  }
}

export default AsyncAwait
