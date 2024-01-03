// import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "../component/Header"

const AllWorkersLayout = () => {
  return (
    <div>
        <Header />

        <Outlet />
    </div>
  )
}

export default AllWorkersLayout