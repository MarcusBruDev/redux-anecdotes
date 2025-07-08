import { createSelector } from "@reduxjs/toolkit";


export const selectAnecdotes = (state) => state.anecdotes
export const selectFilter = (state) => state.filter

export const selectFilteredAnecdotes = createSelector(
    [selectAnecdotes,selectFilter],
    (anecdotes,filter)=>{
        if(!filter.trim()) return anecdotes
        return anecdotes.filter((anecdote)=>
            anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )

    }
)
