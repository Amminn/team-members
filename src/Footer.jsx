import React from 'react'

function Footer() {
  // Current date for the footer
  let today = new Date().toLocaleDateString()

  return (
    <footer>
      <p>Current Date : {today}</p>
    </footer>
  )
}

export default Footer
