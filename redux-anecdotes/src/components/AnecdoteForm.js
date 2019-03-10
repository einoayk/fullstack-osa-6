import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { creationNotification } from '../reducers/notificationReducer'
import { clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    event.persist()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    
    setTimeout(() => {
      props.clearNotification()
    },5000) 
         
        
    
  } 

  return(
    <div>
      <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  creationNotification,
  clearNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)