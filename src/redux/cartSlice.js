import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddItem: (state,action) => {
            let existItem = state.find((item)=> item.id === action.payload.id)
            if(existItem){
                existItem.qty += action.payload.qty;
            } else {
                state.push(action.payload);
            }
        },
        RemoveItem: (state,action) => {
            return state.filter((item)=> item.id !== action.payload);
        },
        IncrementQty: (state,action)=> {
            return state.map((item)=> item.id===action.payload.id ? {...item,qty:item.qty+1} : item)
        },
        DecrementQty: (state, action) => {
            return state
                .map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
                .filter((item) => item.qty > 0);
        },
    }
})

export const { AddItem, RemoveItem, IncrementQty, DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;