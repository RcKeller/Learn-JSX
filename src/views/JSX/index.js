import React, { Component } from 'react'

import remark from 'remark'
import reactRenderer from 'remark-react'

class JSX extends Component {
  render () {
    console.log(filePath)
    const filePath = require('../../examples/JSX/Hierarchies.js.md')
    fetch(filePath)
      .then(response => response.text())
      .then(text => remark().use(reactRenderer).processSync(text).contents)
      .then(Root => Root.props.children)
      .then(nodes => {
        const Tutorial = React.Children.map(nodes, (node) => {
          if (node.type === 'pre') {
            const Code = node.props.children.find(child => child.type === 'code')
            console.log('CODEBLOCK:', Code)
          }
          return node
        })
      })
      // .catch(err => console.err(err))
      // Logs a string of Markdown content.
      // Now you could use e.g. <rexxars/react-markdown> to render it.
      // let codeblocks = []
      // let text = raw.split('\n')
      // console.log(text)
      // for (let line of text) {
      //   line.startsWith('```')
      //     ? codeblocks.push('')
      //     : codeblocks[codeblocks.length - 1] += `${line}\r\n`
      // }
      // codeblocks = codeblocks.filter(block => block.length > 2)
      // console.warn(codeblocks[0])
      // console.log(codeblocks)
    return (
      <article id='jsx'>
        <section>
          JSX Page
        </section>
      </article>
    )
  }
}

export default JSX
