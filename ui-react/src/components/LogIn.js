import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../App.css";


export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectLoginData = async() => {
        if (!email || !password) { alert('please provide all the details')}
        let userLoginInfo = {
            email,
            password
        }
        console.log('userLoginInfo', userLoginInfo);
        const userLoginData = await fetch('http://localhost:5000/login', {
         method: "POST",
         body:  JSON.stringify(userLoginInfo),
         headers: {
            'Content-Type': 'application/json'
         }
        })
        const  userLoginResp = await userLoginData.json();
        if (userLoginResp.email) {
         localStorage.setItem('userData', JSON.stringify(userLoginResp));
         navigate('/');
        }
    }

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
              <button onClick={collectLoginData} className='signupButton' > Log in </button>
           </div>
        </>
    )
}