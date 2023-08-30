import {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import '../App.css';


function Nav() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    setUser(user);
  }, [])


  const displaySignUp = user?.email ? <li><Link to="/logout">logout</Link></li> :  <li><Link to="/signup">signup</Link></li>

  return (
    <div className="nav">
       <ul className="navList">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update"> update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {displaySignUp}
       </ul>
    </div>
  );
}

export default Nav;
