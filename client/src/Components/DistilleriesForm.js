import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postAllDistillery } from '../features/allDistilleriesSlice';

function DistilleriesForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors = useSelector(state => state.allDistilleries.errors)
    const [ name, setName ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postAllDistillery(name))
        // if (!errors) {navigate(`/bottles/new`)}
      }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Add a distillery:</h3>
        <div className="form-text">
          <label htmlFor="name"> Distillery Name: 
            <input 
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>
        <button className="form-btn" type="submit">S U B M I T</button>
        {errors ? <p className="errors">{errors}</p> : null}
      </form>
    </div>
  )
}

export default DistilleriesForm