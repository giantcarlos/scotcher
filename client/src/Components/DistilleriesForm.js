import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { distilleryAdded } from '../features/allDistilleriesSlice';

function DistilleriesForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ name, setName ] = useState("");
    const [ errors, setErrors ] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/distilleries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => dispatch(distilleryAdded(data)))
            navigate('/bottles/new');
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
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