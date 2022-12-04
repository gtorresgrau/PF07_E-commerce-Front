import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
      <Link to="/home">
        <img src="https://cdn.acodez.in/wp-content/uploads/2015/12/code-school-404-error-page.jpg" alt="Error 404" />
      </Link>
    </div>
  )
}

export default Error404;