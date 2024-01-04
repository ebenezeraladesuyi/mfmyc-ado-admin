// import React from 'react'

import { useEffect, useState } from "react";
import { url } from "../utils/Api";
import axios from "axios";
import { iMember } from "../types/interface";


const AllMembers = () => {


  const [users, setUsers] = useState<iMember[]>([]);

  // get all workers
  useEffect(() => {
  async function fetchUsers() {
      try {
      const getAllMembers = await axios.get(`${url}/member/allregisteredmembers`); 
      setUsers(getAllMembers.data.data);
      // console.log(getAllWorkers.data.data)

      // const sortedUsers = getAllWorkers.data.data.slice().sort(({a, b} : any) => a.surname.localeCompare(b.surname));
      // setUsers(sortedUsers);

      // const sortedUsers = getAllWorkers.data.data || []; // Default to an empty array if data is undefined
      // setUsers(sortedUsers.sort(({a, b}: any) => (a.surname || '').localeCompare(b.surname || '')));
      //   console.log(sortedUsers);
      
      //   console.log(sortedUsers)
      } catch (error) {
      console.error('Error fetching users:', error);
      }  
  }

  fetchUsers()
  }, []);

  return (
    <div className="w-full min-h-screen bg-center mt-[0px] h-[100%] bg-bgPi bg-purple-500 bg-cover bg-no-repeat flex  justify-center items-center font-pop relative">
        <div className="w-[90%] md:w-[90%] lg:w-[75%]  rounded-md z-3 p-[20px] py-[30px] mt-[80px] mb-[30px] flex flex-col  gap-4 justify-cente items-center">

            <div>
                {/* <input type="text" className="w-full h-[40px] rounded p-2 outline-none text-[13px]" placeholder="Search Worker's Name" /> */}
            </div>

            <h5 className="text-[20px] w-[180px] text-white font-semibold border-b-[3px] border-b-white animate-bounce text-center mb-[20px]">All Members</h5>

            <div className="flex flex-wrap w-full gap-4 justify-center">
                {users.map((user) => (
                    <div key={user?._id} className="bg-white w-[290px] p-3 rounded text-[10px] shadow-md">
                        <h5>Name: <span className="font-semibold text-[12px]">{user?.firstName}</span></h5>
                        <h5>Surname: <span className="font-semibold text-[12px]">{user?.surname}</span></h5>
                        <h5>Email: <span className="font-semibold text-[12px]">{user?.email}</span></h5>
                        <h5>Phone Number: <span className="font-semibold text-[12px]">{user?.phoneNumber}</span></h5>
                        <h5>Date-of-Birth: <span className="font-semibold text-[12px]">{user?.dateOfBirth}</span></h5>
                        <h5>Marital Status: <span className="font-semibold text-[12px]">{user?.maritalStatus}</span></h5>
                        <h5>Address: <span className="font-semibold text-[12px]">{user?.address}</span></h5>
                        <h5>Educational Qualification: <span className="font-semibold text-[12px]">{user?.educationalQualification}</span></h5>
                        <h5>Emergency Contact Name: <span className="font-semibold text-[12px]">{user?.emergencyContactName}</span></h5>
                        <h5>Emergency Contact Relationship: <span className="font-semibold text-[12px]">{user?.emergencyContactRelationship}</span></h5>
                        <h5>Emergency Contact Number: <span className="font-semibold text-[12px]">{user?.emergencyContactNumber}</span></h5>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default AllMembers