import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { login, signup } from '../../config/firebase'
const Login = () => {

  const [ currentState , setCurrentState ] =  useState("Sign up");
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const[username, setUsername] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentState === "Sign up") {
      signup(username,email,password);
    } else {
      login(email, password);
    }
  }

  

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="assets.logo_big" className='logo' />     
      <form className='login-form' onSubmit={ handleSubmit}>
        <h2>{currentState}</h2>
        { currentState === "Sign up"?  <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='username' className="form-input" required /> :null}
        <input type="email" placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} value={email} className="form-input"  required />
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password} className="form-input"  required/>
        <button type='submit'>{ currentState === "Sign up"? 'Sign up ':'Login'} </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use and privacy policy. </p>
        </div>
        <div className="login-forgot">
      { currentState ==="Sign up"? <p className="login-toggle">Already have a account <span onClick={()=>setCurrentState("Login")}>click here</span> </p>:<p className="login-toggle">you don't have a account <span onClick={()=>setCurrentState("Sign up")}>click here</span> </p>}   
        </div>
        </form> 
    </div>
  )
}

export default Login