
import { createSlice } from "@reduxjs/toolkit";


interface userInterface {

    username: string
    id: string
    email: string

}

const initialState: userInterface = {
    username: "",
    id: "",
    email: ""

}

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialState },
    reducers: {
        getUser: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialState
        }
    }
})


export default userSlice.reducer
export const { getUser, logout } = userSlice.actions