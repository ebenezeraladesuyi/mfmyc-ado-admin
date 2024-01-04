import React from 'react'
import { NavLink } from "react-router-dom"
import logo from  "../assets/mfmycchurchlogo.png"

const Header = () => {

  const [members, setMembers] = React.useState(false)

  const viewWorkers = () => {
    setMembers(!members)
  }

  return (
    <div className="w-full h-[80px] bg-whit fixed lg::shadow-md flex justify-center items-center z-30 bg-white">
        <div className="w-[90%] flex justify-between items-center">
            <img className="w-[60px] animate-spin" src={logo} alt="" />


            {members   ? 

              (<NavLink to='/'>
                <button className="w-[120px h-[35px] rounded text-white font-semibold text-[11px] p-3 bg-purple-500 border-none outline-none" onClick={viewWorkers}>
                  View All Workers
                </button>
              </NavLink>)

            :

              (<NavLink to='/allmembers'>
                <button className="w-[120px h-[35px] rounded text-white font-semibold text-[11px] p-3 bg-purple-500 border-none outline-none" onClick={viewWorkers}>
                  View All Members
                </button>
              </NavLink>)

            }

        </div>
    </div>
  )
}

export default Header