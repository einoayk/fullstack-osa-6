const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const good = state.good
      const changedStateGood = {
        ...state,
        good: good + 1 
      }  
      state = changedStateGood    
      return state

    case 'OK':
      const ok = state.ok
      const changedStateOk = {
        ...state,
        ok: ok + 1
      }
      state = changedStateOk
      return state

    case 'BAD':
      const bad = state.bad
      const changedStateBad = {
        ...state,
        bad: bad + 1
      }
      state = changedStateBad
      return state

    case 'ZERO':
    state = initialState
      return state

    default: return state
  }
  
}

export default counterReducer