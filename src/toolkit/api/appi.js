import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get 
export const getuser = createAsyncThunk("getuser", async () => {
    return axios.get("http://localhost:3001/posts").then((res) => {
        const data = res.data

        return {
            data
        }
    })
})

// post 
export const postuser = createAsyncThunk("postuser", async (data) => {
    return axios.post("http://localhost:3001/posts", data).then((res) => {
        const data = res.data

        return data
    })
})

// delete 
export const deleteuser = createAsyncThunk("deleteuser", async (id) => {
    return axios.delete("http://localhost:3001/posts/" + id).then((res) => {
        const data = res.data

        return id
    })
})

// update 
export const updateuser = createAsyncThunk("updateuser", async (data) => {
    return axios.put("http://localhost:3001/posts/" + data.id, data).then((res) => {
        const data = res.data

        return data
    })
})