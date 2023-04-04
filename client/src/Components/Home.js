import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';

function Home() {
    const user = useSelector(state => state.sessions.entities)

    if (!user) return <Login />;

  return (
    <div>Home</div>
  )
}

export default Home