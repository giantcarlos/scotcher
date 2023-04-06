import React from 'react';
import { Link } from 'react-router-dom';

function DistilleryCard({ distillery }) {
  return (
    <div>
        <Link to ={`/distilleries/${distillery.id}`}>{distillery.name}</Link>
    </div>
  )
}

export default DistilleryCard