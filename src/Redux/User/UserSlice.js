import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchUsers = createAsyncThunk(
//     'user/fetchUsers',
//     async () => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         return await res.json()
//     }
// )


// export const UserSlice = createSlice({
//     name: "user",
//     initialState: {
//         users: [],
//         loading: false,
//         error: null
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchUsers.pending, (state) => {
//             state.loading = true
//         })
//             .addCase(fetchUsers.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.users = action.payload
//             })
//             .addCase(fetchUsers.rejected, (state, action) => {
//                 state.loading = false
//                 state.error = action.error.message
//             })
//     }
// })


// export default UserSlice.reducer




export const addUser = createAsyncThunk(
    'user/addUser',
    async (userData) => {
        const response = await axios.post('http://localhost:3000/users', userData)
        return response.data
    }
)


const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        status: "idle",
        error: null
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateEmail: (state, action) => {
            state.email = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state) => {
            state.status = "loading"
        })
            .addCase(addUser.fulfilled, (state) => {
                state.status = "succeeded",
                state.name = '',
                state.email = ''
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const { updateName, updateEmail } = userSlice.actions
export default userSlice.reducer