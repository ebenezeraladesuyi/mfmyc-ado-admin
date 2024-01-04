/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"
import AllWorkersLayout from "../layout/AllWorkersLayout"
import { AllMembersLayout } from "../layout"
// import AllMembers from "../pages/AllMembers"

const AllWorkers = lazy(() => import("../pages/AllWorkers"))
const AllMembers = lazy(() => import("../pages/AllMembers"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <AllWorkersLayout />,
        children: [
            {
            index: true,
            element: <AllWorkers />
            }
        ]
    },
    {
        path: "/allmembers",
        element: <AllMembersLayout />,
        children: [
            {
            index: true,
            element: <AllMembers />
            }
        ]
    },
])

