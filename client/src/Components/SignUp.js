import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postSignup, postSession } from '../features/sessionsSlice';
import { stateUpdateReset } from '../features/sessionsSlice';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector(state => state.sessions.errors)
  const updated = useSelector(state => state.sessions.updated)
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      dispatch(postSignup({ username, email, password }))
  }

  useEffect(() => {
    if (updated) {
        dispatch(postSession({ username, password }))
        navigate('/');
        dispatch(stateUpdateReset());
    }
  })

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