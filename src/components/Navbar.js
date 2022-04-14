import React from 'react'
import YOUTOPIA from "../img/02.png"
import DIT from "../img/01.png"

function Navbar() {
  return (
    <div> <div className="flex justify-between px-4 py-4 mt-1">
    <img src = {YOUTOPIA} alt =""/> 
    <img src = {DIT} alt =""/>
  </div>
  </div>
  )
}

export default Navbar