/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import { HomeLayout, MemberLayout, WorkersLayout } from "../layout"
// import Home from "../pages/Home"
import { lazy } from "react"
// import WorkerForm from "../pages/WorkerForm"
// import MemberForm from "../pages/MemberForm"

const Home = lazy(() => import("../pages/Home"));
const WorkerForm = lazy(() =>import("../pages/WorkerForm"));
const MemberForm = lazy(() =>import("../pages/MemberForm"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
            index: true,
            element: <Home />
            }
        ]
    },
    {
        path: "/worker",
        element: <WorkersLayout />,
        children: [
            {
            index: true,
            element: <WorkerForm />
            }
        ]
    },
    {
        path: "/member",
        element: <MemberLayout />,
        children: [
            {
            index: true,
            element: <MemberForm />
            }
        ]
    },
])

