import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { fetchBottles } from '../features/bottlesSlice';
import Login from './Login';

function BottleForm() {
  const user = useSelector(state => state.sessions.entities)
  const dispatch = useDispatch();
  const distilleries = useSelector(state => state.distilleries.entities)
  const navigate = useNavigate();
  const [ errors, setErrors ] = useState(null);
  const [ formData, setFormData ] = useState({
    distillery_id: "",
    name: "",
    origin: "",
    year: "",
    price: "",
    rating: "",
    image_url: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/bottles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => dispatch(fetchBottles(data)))
        navigate('/distilleries');
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })}

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    })}

  if (!user) return <Login />;

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Log a bottle to your journal:</h3>
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
            <label htmlFor="distillery_id">Distillery: 
            <select className="select"
              type="textarea"
              id="distillery_id"
              value={formData.distillery_id}
              onChange={handleChange}
            >
              <option value=""></option>
              {distilleries.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
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
              type="textarea"
              id="price"
              value={formData.price}
              onChange={handleChange}
            />
            </label>
            <label htmlFor="rating">Your personal rating: 
            <input 
              type="textarea"
              id="writer"
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
      <Link to={"/distilleries/new"} className="sign-link">Don't see a distillery on our list? Add one here.</Link>
      <br /><br /><br />
    </div>
  )
}

export default BottleForm;