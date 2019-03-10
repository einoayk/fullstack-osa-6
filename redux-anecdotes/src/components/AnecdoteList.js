import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const vote = (id) => {
      console.log('vote', id)
      
      const anec = props.anecdotes.find(a => id === a.id)
      console.log(`anecccc ${anec}`)
      props.voteAnecdote(anec)
      /*props.voteNotification(anec)
      setTimeout(() => {
        props.clearNotification()
      }, 5000)*/
      props.setNotification(`you voted '${anec.content}'`,1)  
    } 

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={props.store} />
        {props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
      </div>            
    )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  const filterd = anecdotes
    .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  return filterd
}

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  voteNotification,
  clearNotification,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)