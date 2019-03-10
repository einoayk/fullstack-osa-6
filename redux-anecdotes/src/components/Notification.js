import React from 'react';
import { connect } from 'react-redux'

const Notification = (props) => {
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notifications}
    </div>
  )
}

const mapStateToProps = (state) => {  
  console.log(state)
  return {
    notifications: state.notifications,
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  null
)(Notification)

