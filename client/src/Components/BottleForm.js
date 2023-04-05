import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login';

function BottleForm() {
  const user = useSelector(state => state.sessions.entities)

  if (!user) return <Login />;

  return (
    <div>BottleForm</div>
  )
}

export default BottleForm;