import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../App.css";


export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return(
        <>
           <div className="signUp">
             <div className='fieldContainer'>
                <label>Email* : </label>
                <input placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)} className='signUpField' />
             </div>
             <div className='fieldContainer'>
                <label>Password* :  </label>
                <input placeholder="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} className='signUpField' />
             </div>
              <button className='signupButton' > Log in </button>
           </div>
        </>
    )
}