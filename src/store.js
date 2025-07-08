import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from "@reduxjs/toolkit";




export const store = configureStore({
    reducer:{
          anecdotes: reducer,
          filter: filterReducer
    }
})


//store.subscribe(()=>console.log(store.getState()))

