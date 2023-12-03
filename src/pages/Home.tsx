// import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../assets/mfmycchurchlogo.png"

const Home = () => {
  return (
    <div className="w-full md:h-screen bg-center mt-[0px] h-[100%] bg-bgPix bg-cover bg-no-repeat flex  justify-center items-center font-pop relative" >

        <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 opacity-40"></div>

        <div className="w-[90%] flex items-center flex-col-reverse z-20 md:flex-row md:justify-between mb-[30px] md:mb-0 lg:mt-[90px]">

            <div className="w-full md:w-[50%]">
                <h5 className="text-[23px] text-center md:text-left lg:text-[40px] font-semibold mb-[15px] lg:w-[90%] text-white">
                    ARE YOU A MEMBER OF MFMYC, ADO-EKITI?
                </h5>
                <h5 className="text-[17px] font-semibold mb-[15px] text-center md:text-left text-gray-200">
                    Please, confirm that by filling a membership form.
                </h5>

                <h6 className="mb-[20px] text-center md:text-left text-gray-200">
                    Click the "Worker" button, if you are a worker.
                </h6>

                <div className="flex flex-col md:flex-row  gap-4">

                    <NavLink to='/member'>
                        <button className="w-full md:w-[160px] bg-purple-400 text-white font-semibold cursor-pointer hover:bg-white hover:text-purple-400 hover:border-purple-400 hover:border-[1px] transition-all-350ms ease-in-out ">Member</button>
                    </NavLink>

                    <NavLink to='/worker'>
                        <button className="w-full md:w-[160px] bg-purple-400 text-white font-semibold cursor-pointer hover:bg-white hover:text-purple-400 hover:border-purple-400 hover:border-[1px] transition-all-350ms ease-in-out ">Worker</button>
                    </NavLink>
                </div>
            </div>

            <div className="w-full md:w-[50%] flex justify-center items-center mt-[90px] md:mt-0 mb-[20px] md:mb-0">
                <img className="w-[200px] md:w-[300px] lg:w-[450px] animate-spi delay-300" src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home