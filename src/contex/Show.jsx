import React from 'react'
import ComponentA from './ComponentA'
import GlobalContextProvider from './GlobalContex'

const Show = () => {
  return (
    <GlobalContextProvider>
    <ComponentA/>
    </GlobalContextProvider>
    
  )
}

export default Show