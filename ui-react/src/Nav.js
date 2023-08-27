import {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import './App.css';


function Nav() {
  return (
    <div className="nav">
       <ul className="navList">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update"> update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">logout</Link></li>
       </ul>
    </div>
  );
}

export default Nav;
