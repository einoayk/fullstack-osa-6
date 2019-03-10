import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = { ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map( a => a.id !== id ? a : changedAnecdote)

    case 'NEW_ANECDOTE':
      console.log(`action.data ${action.data}`)
      return [...state, action.data]  

    case 'INIT_ANECDOTES':
      return action.data  
    
    default: return state  
  }  
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const id = anecdote.id
    const votes = anecdote.votes
    const content = anecdote.content
    const updateAnecdote = await anecdoteService.update(id, votes, content)
    dispatch({
      type: 'VOTE',
      data: updateAnecdote
    })
    
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecote
    })
  } 
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
    
  }
}

export default reducer