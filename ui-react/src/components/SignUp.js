import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../App.css";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
         if (localStorage.getItem('userData')) {
            navigate("/");
         }
    }, [])

    const collectData = async() => {
        if (!name || !email || !password) { alert('please provide all the details')}
        let userSignupInfo = {
            name,
            email,
            password
        }
        console.log('userSignupInfo', userSignupInfo);
        const userSignUpData = await fetch('http://localhost:5000/register', {
         method: "POST",
         body:  JSON.stringify(userSignupInfo),
         headers: {
            'Content-Type': 'application/json'
         }
        })
        const  userSignUpResp = await userSignUpData.json();
        if (userSignUpResp.email) {
         localStorage.setItem('userData', JSON.stringify(userSignUpResp));
         navigate('/');
        }
    }

    return(
        <>
           <div className="signUp">
             <div className='fieldContainer'>
                <label>Name* : </label>
                <input placeholder="name" name="name" onChange={(e) => setName(e.target.value)} className='signUpField' />
             </div>
             <div className='fieldContainer'>
                <label>Email* : </label>
                <input placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)} className='signUpField' />
             </div>
             <div className='fieldContainer'>
                <label>Password* :  </label>
                <input placeholder="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} className='signUpField' />
             </div>
              <button onClick={collectData} className='signupButton' > Sign up </button>
           </div>
        </>
    )
}