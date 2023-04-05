import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSessions } from '../features/sessionsSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          dispatch(fetchSessions(data))
        })
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    })
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in to your Scotcher account</h2>
        <div className="form-text">
          <label htmlFor="username">Username: 
            <input 
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
        <button className="form-btn" type="submit">L O G I N</button>
        {errors ? <p className="errors">{errors}</p> : null}
      </form>
        <Link to={"/signup"} className="sign-link">New to Scotcher? Create an account.</Link>
    </div>
  );
}

export default Login