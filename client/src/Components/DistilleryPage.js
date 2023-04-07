import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BottleCard from './BottleCard';


function DistilleryPage() {
    const { id } = useParams();
    const bottles = useSelector(state => state.bottles.entities)
    const distilleries = useSelector(state => state.distilleries.entities)
    const distilleryBottles = bottles.filter(b => b.distillery_id===parseInt(id))
    const distillery = distilleries?.find(d => d.id===parseInt(id))

    const bottleCards = () => distilleryBottles?.map((bottle, key) => <BottleCard bottle={bottle} key={key}/>)

  return (
    <div>
      <h2 className="counter">You have {distilleryBottles.length} logged bottles from {distillery?.name}.</h2>
      <div className="card-grid">{bottleCards()}</div>
    </div>
  )
}

export default DistilleryPage