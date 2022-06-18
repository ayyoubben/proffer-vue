import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:8081/auth"

export const createInscEnr = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
    const formData = await axios.post(baseUrl + '/inscriptions/saved', data, {headers: headers})
    return formData;
}

export const getInscEnrs = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/inscriptions/saved", { headers })
    return data
}

export const updateInscEnr = async (id, data, token) => {
    
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
    const  formData = await axios.patch(baseUrl + '/inscriptions/saved/'+id, data, {headers: headers})
    return formData;
}


export const getInscEnrById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/inscription/saved/"+ id, { headers })
    return data
}


export const getInscEnrByOwner = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/inscriptions/saved/owner/"+ id, { headers })
    return data
}

export const deleteInscEnr = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/inscriptions/saved/'+id, {headers: headers})

    return data;
}

export const createInscVal = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
    const formData = await axios.post(baseUrl + '/inscriptions', data, {headers: headers})
    return formData;
}

export const getInscVals = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/inscriptions", { headers })
    return data
}

export const getInscValsInvalide = async () => {
    /*const headers = {
        "Authorization": `Bearer ${token}`
    }*/
    const data = await axios.get(baseUrl+"/inscriptions/invalide")
    return data
}


export const updateInscVal = async (id, updates, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
        //'Content-Type': 'multipart/form-data'
    }
    const  data = await axios.patch(baseUrl + '/inscriptions/'+id, updates, {headers: headers})
    return data;
}

export const updateAdminInscVal = async (id, updates, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
        //'Content-Type': 'multipart/form-data'
    }
    const  data = await axios.patch(baseUrl + '/admin/inscriptions/'+id, updates, {headers: headers})
    return data;
}

export const getInscValById = async (id) => {
    /*const headers = {
        "Authorization": `Bearer ${token}`
    }*/
    const data = await axios.get(baseUrl+"/inscription/"+ id)
    return data
}

export const getInscValByOwner = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/inscriptions/owner/"+ id, { headers })
    return data
}

export const deleteInscVal = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/inscriptions'+id, {headers: headers})

    return data;
}