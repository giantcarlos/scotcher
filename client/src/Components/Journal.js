import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login';

function Journal() {
  const user = useSelector(state => state.sessions.entities)

  if (!user) return <Login />;

  return (
    <div>Journal</div>
  )
}

export default Journal