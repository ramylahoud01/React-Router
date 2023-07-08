import {createSlice,configureStore} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:"counter",
    initialState:{counter:1},
    reducers:{
        increment(state){
            state.counter = state.counter +1 
        }
    }
})

export const counterActions = counterSlice.actions

const cartSlice = createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        addItem(state,actions){
            const newItem = actions.payload
            state.items.push({newItem})
        }
    }
})

export const CartActions = cartSlice.actions

const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        cart:cartSlice.reducer
    }
})
export default store