// import React from 'react'

const MemberForm = () => {
  return (
    <div className="w-full min-h-screen bg-center mt-[0px] h-[100%] bg-bgPix bg-cover bg-no-repeat flex  justify-center items-center font-pop relative">

        <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 opacity-40"></div>

        <div className="w-[90%] md:w-[70%] lg:w-[40%] bg-white h-[800px]  rounded-md z-30 p-[20px] mt-[120px] mb-[30px]">
            <h5 className="text-center font-semibold mb-[30px] animate-pulse">MEMBER'S BIO-DATA</h5>

            <form action="" className="h-[90%] flex justify-around flex-col gap-4">
                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="First Name" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Surname" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="email" placeholder="Email" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Phone Number" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="date" placeholder="Date Of Birth" />

                <select className="w-full h-[42px] p-[10px]  border-[1px] rounded outline-none text-[14px]" name="" id="">
                    <option value="">Single</option>
                    <option value="">Married</option>
                </select>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Education Qualification" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none" type="text" placeholder="Address" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Emergency Contact Name" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Emergency Contact Relationship" />

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Emergency Contact Number" />

                <button  className="w-ful bg-purple-400 text-white font-semibold cursor-pointer hover:bg-white hover:text-purple-400 hover:border-purple-400 hover:border-[1px] transition-all-350ms ease-in-out " type="submit">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default MemberForm