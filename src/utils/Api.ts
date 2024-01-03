import axios from "axios";
import { iMember } from "../types/interface";
import { iWorker } from "../types/interface";


export const url = "https://mfmyc-ado.onrender.com"


 


// register mamber
export const registerMember = async (data : iWorker) => {
    return await axios.post(`${url}/member/registermember`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}

// register worker
export const registerWorker = async (data : iMember) => {
    return await axios.post(`${url}/worker/registerworker`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}
