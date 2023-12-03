// import React from "react";

import { FallingLines } from "react-loader-spinner";
import logo from "../assets/mfmycchurchlogo.png"

const IsLoading = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">

                {/* <i className="text-[#3F5BF6] text-[13px]">getLInked Hackathon</i> */}

                <img src={logo} className="w-[70px]" alt="" />

                <FallingLines color="#697D95" width="100" visible={true} />

                <p className="text-[#697D95] text-[17px]">Loading...</p>
            </div>
        </div>
    );
};

export default IsLoading;