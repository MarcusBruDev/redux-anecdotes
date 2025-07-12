import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from "@reduxjs/toolkit";




export const store = configureStore({
    reducer:{

          anecdotes: reducer,
          filter: filterReducer,
          notification:notificationReducer
    }
})


//store.subscribe(()=>console.log(store.getState()))

