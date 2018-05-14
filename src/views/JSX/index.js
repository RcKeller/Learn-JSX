import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import remark from 'remark'
import reactRenderer from 'remark-react'
import Playground from 'component-playground'

class JSX extends Component {
  static defaultProps = {
    tutorial: 'JSX/Hierarchies'
  }
  state = {
    Tutorial: <span>Loading...</span>
  }
  componentDidMount () {
    // Load a markdown file, resolving the minified file path using require()
    const MD = require(`../../examples/${this.props.tutorial}.js.md`)
    fetch(MD)
      .then(response => response.text())
      .then(text => remark().use(reactRenderer).processSync(text).contents)
      // Bypass the root node
      .then(Root => Root.props.children)
      .then(nodes => {
        // Map over nodes and replace <pre><code> with live preview elements
        return React.Children.map(nodes, (node) => {
          if (node.type === 'pre') {
            // Extract code text and create new dom nodes for <pre> elements
            const Codeblock = node.props.children
              .filter(child => child.type === 'code')
              .map(Block => {
                const code = Block.props.children[0]
                // return <div className='REPLACED'>{code}</div>
                return <Playground codeText={code} scope={{React, ReactDOM}} />
              })
            return Codeblock
          }
          return node
        })
      })
      .then(Tutorial => this.setState({ Tutorial }))
  }
  render () {
    const { Tutorial } = this.state
    return (
      <article id='jsx'>
        <section>
          JSX Page
        </section>
        <div>{Tutorial}</div>
      </article>
    )
  }
}

export default JSX
