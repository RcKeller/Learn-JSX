import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

// https://www.material-ui.com/#/customization/themes
const overrides = {
  fontFamily: 'Roboto, sans-serif'
}

const theme = Object.assign({}, lightBaseTheme, overrides)

export default getMuiTheme(theme)
