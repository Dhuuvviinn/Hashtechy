import React from 'react'
import Drawers from './Drawers'
import { Outlet } from 'react-router-dom'

const Header = ({authentication}) => {
  return (
    <div>
     <Drawers authentication={authentication}/>
    
    </div>
  )
}

export default Header
