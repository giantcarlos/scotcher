import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function DistilleryPage() {
    const { id } = useParams();
    const user = useSelector(state => state.sessions.entities)
    const distillery = user.distilleries_user_bottles?.find(d => d.id===parseInt(id))


  return (
    <div>
      <h2 className="counter">You have {distillery?.bottles.length} logged bottles from {distillery?.name}.</h2>
      <div className="cardGrid"></div>
    </div>
  )
}

export default DistilleryPage