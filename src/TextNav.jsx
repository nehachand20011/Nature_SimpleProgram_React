import React from 'react'
import { Link } from 'react-router-dom'

const TextNav = () => {
  return (
    <>
    <ul className='d-flex bg-danger'>
        <li className='text-white'> <Link to='/'>Name</Link> </li>
        <li className='text-white'> <Link to='/text'>Text</Link> </li>
        <li className='text-white'> <Link to='/show'>Show</Link> </li>


    </ul>
    </>
  )
}

export default TextNav