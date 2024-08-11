import {configureStore} from '@reduxjs/toolkit'
import { todoListReducer } from './slices/todo'

export const store = configureStore({
    reducer: {
        todo: todoListReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
