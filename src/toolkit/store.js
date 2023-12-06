import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./reducer/reducer"

const store = configureStore({
    reducer: {
        user:userreducer,
    }
})

export default store;