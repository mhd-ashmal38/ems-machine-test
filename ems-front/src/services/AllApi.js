import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

// login
export const getAllAccounts = async (body, header) => {
    return await commonAPI("GET", `${BASE_URL}/login`, body, header)
}

// add employee
export const addEmployee = async (body, header) => {
    return await commonAPI("POST", `${BASE_URL}/add`, body, header)
}

// get employees
export const getEmployee = async (search) => {
    return await commonAPI("GET", `${BASE_URL}/get-employees?search=${search}`, "")
}

// delete employee
export const deleteEmployee = async (id) => {
    return await commonAPI("DELETE", `${BASE_URL}/delete-employee/${id}`, {})
}

// edit employee
export const editEmployee=async(id,body,header)=>{
    return await commonAPI("PUT",`${BASE_URL}/edit-employee/edit/${id}`,body,header)
}