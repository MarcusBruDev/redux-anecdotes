import { createSlice ,current} from "@reduxjs/toolkit"


const notificationSlice = createSlice({
    name:'notification',
    initialState:'',
    reducers:{
        showNotification(state,action){

            return action.payload
        },

        closeNotificaction(state,action){
                return action.payload
        }
    }
})




export const {showNotification,closeNotificaction} = notificationSlice.actions


export const setNotification= (message,timer)=>{
    
    return async (dispatch,getState)=>{
            dispatch(showNotification(message))
            setTimeout(()=>{
                dispatch(closeNotificaction(``))
            },timer)
    }
}

export default notificationSlice.reducer