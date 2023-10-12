import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='notfoundpage'>
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default NotFound
