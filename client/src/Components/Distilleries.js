import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import DistilleryCard from './DistilleryCard';
import { fetchDistilleries } from '../features/distilleriesSlice';

function Distilleries() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.sessions.entities)
  const distilleries = useSelector(state => state.distilleries.entities)
  const bottles = useSelector(state => state.bottles.entities)

  const distilleryList = () => distilleries?.map((distillery, key) => <DistilleryCard distillery={distillery} key={key} />)

  useEffect(() => {
    dispatch(fetchDistilleries())
  }, [dispatch])

  if (!user) return <Login />;

  return (
    <div>
      <div className="counter">You have logged {bottles?.length} bottles from {distilleries?.length} different distilleries.</div>
      <div className="distillery-list">{distilleryList()}</div>
    </div>
  )
}

export default Distilleries