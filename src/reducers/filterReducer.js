import { createSlice ,current} from "@reduxjs/toolkit"
import { initialState  as fullList} from "./anecdoteReducer";



const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
        return action.payload
    }
  }
});



export const {filterChange}= filterSlice.actions
export default filterSlice.reducer




/*const query = action.payload.toLowerCase();
      const filtered = fullList.filter(item =>
        item.content.toLowerCase().includes(query)
      );
      return filtered; // <-- Reemplaza el estado actual por el filtrado*/