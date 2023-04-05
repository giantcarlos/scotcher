import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sesssionsDeleted } from '../features/sessionsSlice';

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.sessions.entities)

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        dispatch(sesssionsDeleted);
      }
    });
  }

  return (
    <nav>
      <div className="site-title">S C O T C H E R</div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/distilleries">JOURNAL</NavLink>
      <NavLink to="/bottles/new">ADD BOTTLE</NavLink>
      <Link to={"/"}>
        <button className="login-btn" onClick={handleLogout}>{user ? "LOGOUT" : ""}</button>
      </Link>
    </nav>
  )
}

export default NavBar;