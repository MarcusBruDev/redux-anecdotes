import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer";
import { selectFilteredAnecdotes } from "../reducers/selectors";

//Enseñanzas que me dejo realizar el ejercicio  6.10 de la part 6 de la seccion b:
// no mutar o modificar directamente un estado que venga de redux osea useSelector, mejor hacer una copia y sobre ella trabajr
///hello part6
const Anecdote =({anecdote,handleClick})=>{
    return(
        <>
             <div>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={handleClick}>vote</button>
                </div>
            </div>
        
        </>
    )

}



const AnecdoteList = ()=>{

    const anecdotes = useSelector(selectFilteredAnecdotes)
   /* const anecdotes = useSelector(state=>{
    
      console.log("state.anecdotes :" , state.anecdotes)
      console.log("state.filter :" , state.filter)
        if (state.filter.length=== 0 ) {
            return state.anecdotes
        }

        return state.filter
    })*/
   

    const dispatch = useDispatch()

    return(
        <>
            {[...anecdotes].sort((a, b) => b.votes - a.votes).map(anecdote =>
                
               <Anecdote 
                   key={anecdote.id}    
                   anecdote={anecdote}
                   handleClick={() => dispatch(vote(anecdote.id))}
                />
            )}
           
        </>
    )
}

export default AnecdoteList;