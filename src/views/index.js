import React, { Component } from 'react'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import FontIcon from 'react-md/lib/FontIcons'

//  CSS imported ahead of time in ../index.js
//  This prevents FOUT (Flashes of Unstyled Content)
import '../styles/SCSS/index.scss'
import '../styles/LESS/index.less'
// import { Link } from 'react-router'
const Link = (props) => <div>Link</div>
class UI extends Component {
  navItems = [{
    primaryText: 'Dashboard',
    leftIcon: <FontIcon>home</FontIcon>,
    component: Link,
    to: '/'
  },
  { divider: true },
  { primaryText: 'Factoria', subheader: true },
  {
    primaryText: 'Newport Tower',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/NP-Tower'
  }, {
    primaryText: 'Newport 2',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/NP-2'
  }, {
    primaryText: 'Newport Terrace',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/NP-Terrace'
  }, {
    primaryText: 'Newport 4',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/NP-4'
  }, {
    primaryText: 'Newport 5',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/NP-5'
  },
  { divider: true },
  { primaryText: 'Bothell', subheader: true },
  {
    primaryText: 'Canyon Pointe North',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/CP-N'
  }, {
    primaryText: 'Canyon Pointe South',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/CP-S'
  },
  { divider: true },
  { primaryText: 'Snoqualmie', subheader: true },
  {
    primaryText: 'Snoqualmie',
    secondaryText: '34931 SE Douglas St',
    leftIcon: <FontIcon>location_city</FontIcon>,
    component: Link,
    to: '/building/SNO'
  }]
  render (
    { navItems } = this,
    { children } = this.props
  ) {
    return (
      <main id='app'>
        <NavigationDrawer
          drawerTitle='Contents'
          toolbarTitle='Learn JSX the Hard Way'
          contentClassName='content'
          navItems={this.navItems}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
        >
          {children}
        </NavigationDrawer>
      </main>
    )
  }
}

export default UI
