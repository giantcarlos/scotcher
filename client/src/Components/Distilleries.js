import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login';
import DistilleryCard from './DistilleryCard';

function Distilleries() {
  const user = useSelector(state => state.sessions.entities)

  const distilleryList = () => user.distilleries_user_bottles?.map((distillery, key) => <DistilleryCard distillery={distillery} key={key} />)

  if (!user) return <Login />;

  return (
    <div>
      <div className="counter">You have logged {user.bottles?.length} bottles from {user.distilleries_user_bottles?.length} different distilleries.</div>
      <div className="distillery-list">{distilleryList()}</div>
    </div>
  )
}

export default Distilleries