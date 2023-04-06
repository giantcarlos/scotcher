import React from 'react'
import { Link } from 'react-router-dom';

function BottleCard({ bottle }) {
  return (
    <Link to={`/botlles/${bottle.id}`}>
        <div className="card">
            <div className="card-img">
                <img src={bottle.image_url} alt="Not found."/>
            </div>
            <div className="card-name">{bottle.name}</div>
        </div>
    </Link>
  )
}

export default BottleCard