import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="site-title">S C O T C H E R</div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/distilleries">JOURNAL</NavLink>
      <NavLink to="/bottles/new">ADD BOTTLE</NavLink>
    </nav>
  )
}

export default NavBar;