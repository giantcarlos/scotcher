import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sessionsBottleDeleted } from '../features/sessionsSlice';

function BottlePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const bottles = useSelector(state => state.bottles.entities)
    const bottle = bottles?.find(bottle => bottle.id===parseInt(id))

    const handleDelete = () => {
        fetch(`/bottles/${id}`, 
            { method: "DELETE" })
        .then(() => dispatch(sessionsBottleDeleted()))
        .then(() => navigate('/distilleries'));
    }

  return (
    <div className="bottle-container">
        <div className="bottle-img">
            <img src={bottle?.image_url} alt=""/>
        </div>
        <h2>{bottle?.name}</h2>
        <div className="bottle-details">
            <p>Distillery: {bottle?.distillery.name}</p>
            <p>Year: {bottle?.year}</p>
            <p>Origin: {bottle?.origin}</p>
            <p>Price: ${bottle?.price}</p>
            <p>Your Rating: {bottle?.rating}</p>
        </div>
        <Link to={`/bottles/${id}/edit`}>
              <button className="bottle-btn">Edit Bottle</button>
        </Link>
        <button className="bottle-btn" onClick={handleDelete}>Delete Bottle</button>
    </div>
  )
}

export default BottlePage;