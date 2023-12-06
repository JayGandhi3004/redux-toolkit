import { createSlice } from "@reduxjs/toolkit"
import { deleteuser, getuser, postuser, updateuser } from "../api/appi"

const initialState = {
    data: [],
    progress: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: (bulider) => {
        //get
        bulider.addCase(getuser.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(getuser.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
        bulider.addCase(getuser.rejected, (state, action) => {
            state.error = true
        })
        //post
        bulider.addCase(postuser.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(postuser.fulfilled, (state, action) => {
            state.data = state.data.concat(action.payload)
        })
        bulider.addCase(postuser.rejected, (state, action) => {
            state.error = true
        })

        //delete
        bulider.addCase(deleteuser.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(deleteuser.fulfilled, (state, action) => {
            state.data = state.data.filter((e) => e.id !== action.payload)
        })
        bulider.addCase(deleteuser.rejected, (state, action) => {
            state.error = true
        })

        //update
        bulider.addCase(updateuser.pending, (state, action) => {
            state.progress = true
        })
        bulider.addCase(updateuser.fulfilled, (state, action) => {
            state.data = state.data.map((val) => {
                if (val.id === action.payload.id) {
                    return {
                        ...val, ...action.payload
                    }
                }
                else {
                    return val
                }
            })
        })
        bulider.addCase(updateuser.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default userSlice.reducer;