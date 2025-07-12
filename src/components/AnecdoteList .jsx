import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer";
import { selectFilteredAnecdotes } from "../reducers/selectors";
import { showNotification ,closeNotificaction} from "../reducers/notificationReducer";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from '../reducers/notificationReducer'
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
    const dispatch = useDispatch()


    return(
        <>
            {[...anecdotes].sort((a, b) => b.votes - a.votes).map(anecdote =>
                
               <Anecdote 
                   key={anecdote.id}    
                   anecdote={anecdote}
                   handleClick={() =>{
                        dispatch(voteAnecdote(anecdote.id))
                        dispatch(setNotification(`You voted '${anecdote.content}'`,5000))
                    
                   } }
                />
                
            )}
           
        </>
    )
}

export default AnecdoteList;