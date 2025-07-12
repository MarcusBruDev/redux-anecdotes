import { filterChange } from "../reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const handleChange = (event) => {
    dispatch(filterChange(event.target.value,anecdotes))
    
  }


  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter: <input onChange={handleChange} />
    </div>
  )
}

export default Filter