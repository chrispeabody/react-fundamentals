// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

function Box({size, style, ...otherProps}) {
  const defaultProps = {
    className: `box box--${size}`,
    style: {fontStyle: 'italic', ...style}
  }
  return <div {...defaultProps} {...otherProps}/>
}

const smallBox = <Box style={{backgroundColor: 'lightblue'}} size='small'>
  small lightblue box
  </Box>
const mediumBox = <Box style={{backgroundColor: 'pink'}} size='medium'>
  medium pink box
  </Box>
const largeBox = <Box style={{backgroundColor: 'orange'}} size='large'>
  large orange box
  </Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
