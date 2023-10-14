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

  return (
    <div className="nav">
       <ul className="navList">
        {user?.email ?
        <>
        <div>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update"> update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {/* <li><Link to="/signup" onClick={logout}>logout</Link></li> */}
        </div>
        <div>
              <div className="dropdown">
              <button className="dropbtn">
                  <img src={require("../images/userImage.png")} alt="User Image" className="user-image" />
                  <span className="userName"> {user.name} </span>
              </button>
              <div className="dropdown-content">
                  <a onClick={logout}>logout</a>
              </div>
            </div>
        </div>
        </>
        :
        <li><Link to="/signup">signup/Login</Link></li>
      }
       </ul>
    </div>
  );
}

export default Nav;
