import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { distilleryDeleted } from '../features/distilleriesSlice';
import { deleteBottle } from '../features/bottlesSlice';

function BottlePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const bottles = useSelector(state => state.bottles.entities);
    const notes = useSelector(state => state.notes.entities);
    const allDistilleries = useSelector(state => state.allDistilleries.entities)
    const bottle = bottles?.find(bottle => bottle.id===parseInt(id));
    const bottleNotes = notes.filter(n => n.bottle_id===parseInt(id));

    const handleDelete = () => {
        dispatch(deleteBottle(id))
        const distillery = allDistilleries.find(d => d.id===bottle.distillery_id)
        const distilleryExists = bottles.filter(b => b.distillery_id===distillery.id);
        if (!distilleryExists) {
          dispatch(distilleryDeleted(distillery.id))
          console.log(distillery.id)
        }
        navigate('/distilleries')
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