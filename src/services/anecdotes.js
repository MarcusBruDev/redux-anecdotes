import axios from "axios";
import { vote } from "../reducers/anecdoteReducer";

const baseUrl = 'http://localhost:3002/anecdotes'



const getAllAnecdotes = async ()=>{
    const response = await axios.get(baseUrl)
    return response.data
}

const createNewAnecdote = async (content)=>{
    const object = {content,votes:0}
    const response = await axios.post(baseUrl,object)
    return response.data
}

const updateAnecdote = async (id, newAnecdote)=>{

    const response = await axios.put(`${baseUrl}/${id}`,newAnecdote)
    
    return response.data
}

export default {getAllAnecdotes ,createNewAnecdote,updateAnecdote}