import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { distilleryDeleted } from '../features/distilleriesSlice';
import { deleteBottle } from '../features/bottlesSlice';
import { stateUpdateReset } from '../features/bottlesSlice';

function BottlePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const bottles = useSelector(state => state.bottles.entities);
    const notes = useSelector(state => state.notes.entities);
    const distilleries = useSelector(state => state.distilleries.entities);
    const updated = useSelector(state => state.bottles.updated);
    const bottle = bottles?.find(bottle => bottle.id===parseInt(id));
    const bottleNotes = notes.filter(n => n.bottle_id===parseInt(id));

    const handleDelete = () => {
        dispatch(deleteBottle(id))
    }

    useEffect(() => {
        if (updated) {
            const distilleryExists = distilleries.find(d => d.bottles===null);
            if (!distilleryExists) {dispatch(distilleryDeleted(distilleryExists))}
            navigate('/distilleries')
            dispatch(stateUpdateReset())
        }
      })

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
        <Link to={`/bottles/${id}/notes/new`}>
            <button className="bottle-btn">Add Note</button>
        </Link>
        {bottleNotes?.map(n =>(
            <h3 className="comment" key={n.id}>"{n.comment}"</h3>
        ))}
    </div>
  )
}

export default BottlePage;