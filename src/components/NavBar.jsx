import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({NavLinkData} ) => {
  return (
    
        <div>
            <ul className="bg-black">
                {
                    NavLinkData.map((e, i) => {
                        return (
                            <NavLink key={i} to={e.path} ><li className="text-orange-500">{e.elementName}</li></NavLink>
                        )
                    })
                }
            </ul>
        
        </div>
  )
}

export default NavBar
