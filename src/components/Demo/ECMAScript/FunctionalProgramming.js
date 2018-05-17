import React, { Component } from 'react'

class FunctionalProgramming extends Component {
  animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]
  render () {
    return (
      <div id='functional-programming'>
        FunctionalProgramming
        <h2>Types of Animals:</h2>
        <ul>
          {animals.map(a => (
            <li key={a.name}>
              {a.name}
            </li>
          ))}
        </ul>
        <h2>Small animals:</h2>
        <span>
          {animals.filter(a => a.size === 'small').join(', ')}
        </span>
        <h2>Total Weight:</h2>
        <span>
          {animals.reduce((a, b) => b + a.size), 0)}
        </span>
      </div>
    )
  }
}

export default FunctionalProgramming
