/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { registerMember } from "../utils/Api";
import { User } from "../global/ReduxState";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { UseAppDispatch } from "../global/Sttore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatasIsaLoading } from "./DataIsLoading";


const MemberForm = () => {

    const validationSchema = yup.object({
        firstName: yup.string().required('Enter your first name'),
        surname : yup.string().required('Enyer your surname'),
        email: yup.string().required('Enter your email'),
        phoneNumber: yup.string().required('Enter your phone number'),
        maritalStatus: yup.string().required('Enter your marital status'),
        dateOfBirth: yup.string().required('Enter your date of birth'),
        educationalQualification : yup.string().required('Enter your education qualification'),
        address: yup.string().required('Enter your address'),
        emergencyContactName: yup.string().required('Enter your Emergency contact name'),
        emergencyContactRelationship: yup.string().required('Enter your Emergency contact relationship'),
        emergencyContactNumber: yup.string().required('Enter your Emergency contact number'),
    })

    const navigate = useNavigate();
    const dispatch = UseAppDispatch();

    type formData =  yup.InferType<typeof validationSchema>


    const posting = useMutation({
        mutationKey: ["mfmyc-ado"],
        mutationFn: registerMember,

        onSuccess: (data: any) => {

            dispatch(User(data.data))

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
    <div className="w-full min-h-screen bg-center mt-[0px] h-[100%] bg-bgPix bg-cover bg-no-repeat flex  justify-center items-center font-pop relative">

        <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 opacity-40"></div>

        <div className="w-[90%] md:w-[70%] lg:w-[40%] bg-white   rounded-md z-30 p-[20px] py-[30px] mt-[120px] mb-[30px]">
            <h5 className="text-center font-semibold mb-[30px] animate-pulse">MEMBER'S BIO-DATA</h5>

            <form onSubmit={submit} action="" className="h-[90%] flex justify-around flex-col gap-2">
                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="First Name" 
                {...register('firstName')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.firstName && errors?.firstName.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Surname" 
                {...register('surname')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.surname && errors?.surname.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="email" placeholder="Email" 
                {...register('email')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.email && errors?.email.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Phone Number"
                {...register('phoneNumber')} 
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.phoneNumber && errors?.phoneNumber.message}</p>

                <input className="w-full h-[45px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="date" placeholder="Date Of Birth" 
                {...register('dateOfBirth')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.dateOfBirth && errors?.dateOfBirth.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Marital Status" 
                {...register('maritalStatus')}
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.maritalStatus && errors?.maritalStatus.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none text-[14px]" type="text" placeholder="Education Qualification"
                {...register('educationalQualification')} 
                />
                <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.educationalQualification && errors?.educationalQualification.message}</p>

                <input className="w-full h-[40px] p-[10px]  border-[1px] rounded outline-none" type="text" placeholder="Address" 
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

export default MemberForm