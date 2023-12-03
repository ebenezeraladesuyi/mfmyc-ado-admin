// import React from 'react'

import Header from "../component/Header";
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div className="min-h-scree ">
        <Header />

        <Outlet />
    </div>
  )
}

export default HomeLayout