const initialState = 'render notification...'

const notificationReducer = (state = initialState , action) => {
  switch(action.type) {
    case 'VOTE_NOTIFICATION':
      const anecdote = action.data
      return `you voted '${anecdote.content}'`

    case 'CREATE':
     const anec = action.data
     return `you created anecdote with content '${anec.toString()}'`

    case 'CLEAR':
      return '' 
        
    default: return state
  }
}

export const voteNotification = (content) => {   
  return {
    type: 'VOTE_NOTIFICATION',
    data: (content)
  }
}

export const creationNotification = (content) => {    
  return {
    type: 'CREATE',
    data: (content)
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
    data: initialState
  }
}

export const setNotification = (note, time) => {
  const timeInSeconds = time * 1000
  return  dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'CLEAR',
        data: initialState        
    })}, timeInSeconds) 
    dispatch({
      type: 'CREATE',
      data: (note)
    })    
  }
}

export default notificationReducer