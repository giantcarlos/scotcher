import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postSession } from '../features/sessionsSlice';
import { stateUpdateReset } from '../features/sessionsSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errors = useSelector(state => state.sessions.errors)
  const updated = useSelector(state => state.sessions.updated)
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postSession({ username, password }))
  }

  useEffect(() => {
    if (updated) {
        navigate('/')
        dispatch(stateUpdateReset())
    }
})

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