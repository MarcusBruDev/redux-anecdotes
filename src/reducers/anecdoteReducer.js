import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
//asObject(action.payload)
export const initialAnecdotes = anecdotesAtStart.map(asObject)


const anecdoteSlice =  createSlice ({
    name:'anecdotes',
    initialState: [],
    reducers:{
      vote(state,action){
        const updated = action.payload
        return state.map(anecdote => anecdote.id !== updated.id ? anecdote : updated)
      },
      /*createAnecdote(state,action){
        return [...state, action.payload]
      }*/
      appendAnecdote(state,action){
          state.push(action.payload)
      },
      setAnecdotes(state,action){
        return action.payload
      }
    }
})


export const {vote,setAnecdotes ,appendAnecdote}= anecdoteSlice.actions


export const initializeAnecdotes = ()=>{
  return async (dispatch)=>{
      const anecdotes = await anecdoteService.getAllAnecdotes()
      dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content)=>{
    return async (dispatch)=>{
       const newAnecdote = await anecdoteService.createNewAnecdote(content)
       dispatch(appendAnecdote(newAnecdote))
    }
}




export const voteAnecdote = (id)=>{
  return async (dispatch,getState)=>{
            const state= getState()
            const anecdotes= state.anecdotes
            
            const anecdoteToVote = anecdotes.find(a => a.id === id);
            const updatedAnecdote = {
            ...anecdoteToVote,
            votes: anecdoteToVote.votes + 1
            };

            const response = await anecdoteService.updateAnecdote(id, updatedAnecdote);
            dispatch(vote(response)); // ahora sí pasamos el response correcto
    }
}









export default anecdoteSlice.reducer