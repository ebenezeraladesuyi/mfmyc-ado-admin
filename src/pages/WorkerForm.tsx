/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UseAppDispatch } from "../global/Sttore";
import { User2 } from "../global/ReduxState";
import Swal from "sweetalert2";
import { registerWorker } from "../utils/Api";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DatasIsaLoading } from "./DataIsLoading";

const WorkerForm = () => {

    const validationSchema = yup.object({
        firstName: yup.string().required('Enter your first name'),
        surname : yup.string().required('Enter your surname'),
        email: yup.string().required('Enter your email'),
        phoneNumber: yup.string().required('Enter your phone number'),
        departmentInChurch: yup.string().required('Enter your department in church'),
        maritalStatus: yup.string().required('Enter your marital status'),
        dateOfBirth: yup.string().required('Enter your date of birth'),
        educationalQualification : yup.string().required('Enter your education qualification'),
        address: yup.string().required('Enter your address'),
        emergencyContactName: yup.string().required('Enter your Emergency contact name'),
        emergencyContactRelationship: yup.string().required('Enter your Emergency contact relationship'),
        emergencyContactNumber: yup.string().required('Enter your Emergency contact number'),
    })

    const navigate = useNavigate()

    type formData =  yup.InferType<typeof validationSchema>

    const dispatch = UseAppDispatch();

    const posting = useMutation({
        mutationKey: ["mfmyc-ado"],
        mutationFn: registerWorker,

        onSuccess: (data: any) => {

            dispatch(User2(data.data))

            // console.log(data.data)

            if (data.data) {
                Swal.fire({
                  title: "Registration Successful!",
                  text: "Thank You for being part of this family.",
                  icon: "success",
                  timer: 3000,
                  timerProgressBar: true,
                });
                navigate("/");
              }
        }
    });

    const {
        handleSubmit,
        formState: {errors},
        register
    } = useForm<formData>({
        resolver: yupResolver(validationSchema)
    });


    const submit = handleSubmit(async (data) => {
        // e.preventDefault()
        posting.mutate(data)

        // console.log(data)
    })



  return (
    <div className="w-full min-h-screen bg-center mt-[0px] h-[100%] bg-bgPi bg-purple-500 bg-cover bg-no-repeat flex  justify-center items-center font-pop relative">

        <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 opacity-40"></div>

        <div className="w-[90%] md:w-[70%] lg:w-[40%] bg-white h-[900px  rounded-md z-30 p-[20px] py-[30px] mt-[100px] mb-[30px]">
            <h5 className="text-center font-semibold mb-[30px] animate-pulse">WORKER's BIO-DATA</h5>

            <form onSubmit={submit}  className="h-[90%] flex justify-around flex-col gap-2">
                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="First Name" 
                {...register('firstName')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.firstName && errors?.firstName.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Surname" 
                {...register('surname')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.firstName && errors?.firstName.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="email" placeholder="Email"
                {...register('email')}
                 />
                 <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.surname && errors?.surname?.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Phone Number"
                {...register('phoneNumber')}
                 />
                 <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.phoneNumber && errors?.phoneNumber.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Department In Church"
                {...register('departmentInChurch')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.departmentInChurch && errors?.departmentInChurch.message}</p>

                <div className="w-full ">
                    <h6 className="text-[11px] mb-[3px]">Date of Birth</h6>
                    <input className="w-full h-[45px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="date" placeholder="Date Of Birth" 
                {...register('dateOfBirth')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.dateOfBirth && errors?.dateOfBirth.message}</p>
                </div>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Marital Status" 
                {...register('maritalStatus')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.maritalStatus && errors?.maritalStatus.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Education Qualification"
                {...register('educationalQualification')} 
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.educationalQualification && errors?.educationalQualification.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Address" 
                {...register('address')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.address && errors?.address.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Emergency Contact Name" 
                {...register('emergencyContactName')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.emergencyContactName && errors?.emergencyContactName.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Emergency Contact Relationship" 
                {...register('emergencyContactRelationship')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.emergencyContactRelationship && errors?.emergencyContactRelationship.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Emergency Contact Number" 
                {...register('emergencyContactNumber')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.emergencyContactNumber && errors?.emergencyContactNumber.message}</p>
                

                {/* <button  className="w-ful bg-purple-400 text-white font-semibold cursor-pointer hover:bg-white hover:text-purple-400 hover:border-purple-400 hover:border-[1px] transition-all-350ms ease-in-out " type="submit">Submit</button> */}

                {posting.isPending ?
                    (<div className="w-full flex justify-center items-center">
                        <DatasIsaLoading /> 
                    </div>)
                :
                    <button  className="w-ful bg-purple-400 text-white font-semibold cursor-pointer hover:bg-white hover:text-purple-400 hover:border-purple-400 hover:border-[1px] transition-all-350ms ease-in-out " type="submit">Submit</button>
                }

            </form>
        </div>

    </div>
  )
}

export default WorkerForm