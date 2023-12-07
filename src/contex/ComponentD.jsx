import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContex'

const ComponentD = () => {
    const js=useContext(GlobalContext)
  return (
    <>
    {/* <h2>the javascriopt library is ReactJs</h2> */}
    <h2>The name of student is:{js.name}</h2>
    <h3>Age is:{js.age}</h3>

    </>
  )
}

export default ComponentD
