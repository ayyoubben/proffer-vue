//import {post, get, patch, remove} from '../index.js'
import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:8081"

// login admin
export const loginAdmin = async (email, password) => {
    const data = await axios.post(baseUrl + "/auth/admin/login", {email, password})
    return data
}

// logout admin
export const logoutAdmin = async (token) => {
    try {
        const { data } = await axios.post({
            url: baseUrl + `/dashboard/logout`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }).then((data) => {
            console.log(data)
        })
        localStorage.removeItem("Auth")
        return data
    } catch (e) {
        console.log(e)
    }
}

// logoutAll admin
export const logoutAllAdmin = async (token) => {
    try {
        const { data } = await axios.post({
            url: baseUrl + `/dashboard/logoutall`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }).then((data) => {
            console.log(data)
        })
  
      localStorage.removeItem("Auth")
      return data
    } catch (e) {
      console.log(e)
    }
}