import {useEffect, useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';

import '../App.css';


const Nav = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userData'));

  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }

  const displaySignUp = user?.email ? <Link to="/signup" onClick={logout}>logout</Link> : <Link to="/signup">signup</Link>
  return (
    <div className="nav">
       <ul className="navList">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update"> update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li> {displaySignUp} </li>
       </ul>
    </div>
  );
}

export default Nav;
