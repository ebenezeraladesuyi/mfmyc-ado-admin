//  React from 'react'
import logo from  "../assets/mfmycchurchlogo.png"

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-whit fixed lg::shadow-md flex justify-center items-center z-30">
        <div className="w-[90%]">
            <img className="w-[60px] animate-spin" src={logo} alt="" />
        </div>
    </div>
  )
}

export default Header