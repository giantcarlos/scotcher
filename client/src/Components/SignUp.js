import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sessionsAdded } from '../features/sessionsSlice';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        }),
    }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            dispatch(sessionsAdded(user))
          })
            navigate('/');
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
}

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create a Scotcher account</h2>
        <div className="form-text">
          <label htmlFor="username">Username: 
            <input 
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="email">E-mail: 
            <input 
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">Password: 
            <input 
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button className="form-btn" type="submit">S I G N U P</button>
        {errors ? (errors.map((error) => {return <p className="errors">{error}</p>})) : null}
      </form>
    </div>
  )
}

export default SignUp