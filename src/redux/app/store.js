import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        // users: usersReducer,
        // auth: authReducer
    },
    devTools: import.meta.env.VITE_NODE_ENV === 'development',
})