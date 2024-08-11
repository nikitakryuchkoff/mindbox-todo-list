import { createSlice } from '@reduxjs/toolkit'
import { IAddItemAction, IDeleteItemAction, IMakeCompletedItemAction, IState, IToDoItem } from '../../types';

  
const initialState: IState = {
    items: []
}


const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state: IState, action : IAddItemAction) : void => {
            const todo : IToDoItem = {
				id: state.items.length,
				text: action.payload,
				completed: false,
			};
			state.items.push(todo);
        },
        deleteItem: (state: IState, action: IDeleteItemAction) : void  => {
            state.items = state.items.filter((todo : IToDoItem) => todo.id !== action.payload)
        },
        makeCompleted: (state: IState, action: IMakeCompletedItemAction) : void  => {
            const index = state.items.findIndex((todo : IToDoItem) => todo.id === action.payload.id);
			state.items[index].completed = action.payload.completed;
        },
        allCompleted: (state : IState) : void => {
            state.items = state.items.map((todo : IToDoItem) => ({...todo, completed: true}))
        },
        clearCompleted: (state: IState) : void => {
            state.items = state.items.filter((todo : IToDoItem) => !todo.completed)
        }
    }
})

export const todoListReducer = todoListSlice.reducer;
export const {addItem, deleteItem, makeCompleted, allCompleted, clearCompleted} = todoListSlice.actions