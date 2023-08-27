import React, {useState} from 'react';
import "../App.css";


export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const collectData = () => {
        if (!name || !email || !password) { alert('please provide all the details')}
        let userSignupInfo = {
            name,
            email,
            password
        }
        console.log('userSignupInfo', userSignupInfo);
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
                <input placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} className='signUpField' />
             </div>
              <button onClick={collectData} className='signupButton' > Sign up </button>
           </div>
        </>
    )
}