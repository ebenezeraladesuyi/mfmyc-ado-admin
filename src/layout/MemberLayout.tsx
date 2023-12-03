// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "../component/Header"

const MemberLayout = () => {
  return (
    <div>
        <Header />

        <Outlet />
    </div>
  )
}

export default MemberLayout