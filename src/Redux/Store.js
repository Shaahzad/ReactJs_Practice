import { configureStore } from "@reduxjs/toolkit";
import  UserReducer  from "./User/UserSlice";



// export const store = configureStore({
//     reducer: {
//         User: UserReducer
//     }
// })


export const store = configureStore({
    reducer: {
        User: UserReducer
    }
})