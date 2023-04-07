import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bottleUpdated } from '../features/bottlesSlice';

function BottleEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const bottles = useSelector(state => state.bottles.entities)
  const bottle = bottles?.find(bottle => bottle.id===parseInt(id))
  const [ errors, setErrors ] = useState(null);
  const [ formData, setFormData ] = useState({
    distillery_id: bottle.distillery_id,
    name: "",
    origin: "",
    year: "",
    price: "",
    rating: "",
    image_url: ""
  });

  useEffect(() => {
    setFormData(bottle);
  }, [bottle])

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/bottles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => dispatch(bottleUpdated(data)))
        navigate(`/bottles/${id}`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })}

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })}

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Edit {bottle.name}</h3>
        <div className="form-text">
          <label htmlFor="name">Name: 
            <input 
              type="textarea"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoFocus={true}
            />
            </label>
            <label htmlFor="origin">Origin: 
            <select className="select"
              type="textarea"
              id="origin"
              value={formData.origin}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Scotland(Highlands)">Scotland(Highlands)</option>
              <option value="Scotland(Speyside)">Scotland(Speyside)</option>
              <option value="Scotland(Lowlands)">Scotland(Lowlands)</option>
              <option value="Scotland(Campbeltown)">Scotland(Campbeltown)</option>
              <option value="Scotland(Islay)">Scotland(Islay)</option>
              <option value="Scotland(The Islands)">Scotland(The Islands)</option>
              <option value="Ireland">Ireland</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other</option>
            </select>
            </label>
            <label htmlFor="year">Age: 
            <select className="select"
              type="textarea"
              id="year"
              value={formData.year}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="non-aged statement">non-aged statement</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
            </label>
            <label htmlFor="price">Price: 
            <input 
              type="number"
              id="price"
              value={formData.price}
              onChange={handleChange}
            />
            </label>
            <label htmlFor="rating">Your personal rating: 
            <input 
              type="number"
              id="rating"
              value={formData.rating}
              onChange={handleChange}
            />
            </label>
            <label htmlFor="image_url">Image URL: 
            <input 
              type="textarea"
              id="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
            </label>
        </div>
        <button className="form-btn" type="submit">S U B M I T</button>
        {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
      </form>
    </div>
  )
}

export default BottleEdit;