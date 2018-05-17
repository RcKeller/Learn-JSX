import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

//  CSS imported ahead of time in ../index.js
//  This prevents FOUT (Flashes of Unstyled Content)
import '../styles/SCSS/index.scss'
import '../styles/LESS/index.less'
import theme from '../styles/JSS/MUI' //  JS-based material-ui style
const breakpoint = 768
class UI extends Component {
  // static defaultProps = {
  //   mobile: window.innerWidth <= breakpoint
  // }
  constructor (props) {
    super(props)
    this.state = { open: window.innerWidth > breakpoint }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    let { open } = this.state
    const { children } = this.props
    const drawerWidth = 300
    return (
      <MuiThemeProvider muiTheme={theme}>
        <React.Fragment>
          <Drawer
            width={drawerWidth}
            open={open}
          >
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
          <main id='app' style={{ paddingLeft: open ? drawerWidth : 0 }}>
            <AppBar title='Learn JSX the Hard Way' onLeftIconButtonClick={this.toggle} />
            <div id='content'>{children}</div>
          </main>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default UI
