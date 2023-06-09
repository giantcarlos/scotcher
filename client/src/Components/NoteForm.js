import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postNote } from '../features/notesSlice';
import { stateUpdateReset } from '../features/notesSlice';

function NoteForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const errors = useSelector(state => state.notes.errors)
    const bottles = useSelector(state => state.bottles.entities)
    const updated = useSelector(state => state.notes.updated)
    const bottle = bottles?.find(bottle => bottle.id===parseInt(id))
    const [ formData, setFormData ] = useState({
        bottle_id: id,
        comment: "",
      });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postNote(formData))
      }

      useEffect(() => {
        if (updated) {
            navigate(`/bottles/${id}`);
            dispatch(stateUpdateReset());
        }
    })

      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
      }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Add a note for {bottle?.name}:</h3>
        <div className="form-text">
          <label htmlFor="comment"> Comment: 
            <input 
              type="textarea"
              id="comment"
              value={formData.comment}
              onChange={handleChange}
              autoFocus={true}
            />
            </label>
        </div>
        <button className="form-btn" type="submit">S U B M I T</button>
        {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
      </form>
    </div>
  )
}

export default NoteForm