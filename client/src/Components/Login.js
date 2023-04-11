import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postSession } from '../features/sessionsSlice';
import { fetchDistilleries } from '../features/distilleriesSlice';
import { fetchBottles } from '../features/bottlesSlice';
import { fetchAllDistilleries } from '../features/allDistilleriesSlice';
import { fetchNotes } from '../features/notesSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.sessions.entities)
  const errors = useSelector(state => state.sessions.error)
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postSession({ username, password }))
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchBottles())
      dispatch(fetchDistilleries())
      dispatch(fetchAllDistilleries())
      dispatch(fetchNotes())
      navigate('/');
    }
  }, [user, dispatch])

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