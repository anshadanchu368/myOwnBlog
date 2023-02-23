import React, { useState } from 'react'
import '../../src/login.css'
const LoginSignup=()=> {
    const[email,setEmail]=useState('');
    const[pswd,setPswd]=useState('');
    const[islogin,setisLogin]=useState(true);


    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlepswd =(e)=>{
        setPswd(e.target.value);
    }

    const  handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`Email:${email},pswd:${pswd},islogin:${islogin}`);
   

    }

    const handleClick = (e) =>{
        setisLogin(!islogin);
    }
  return (
    <div className="form-container">
      <h1 className='login'>{islogin ? 'Login':'signup'}</h1>
      <form className='border' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' value={email} onChange={handleEmail} required/>
        <label htmlFor='pswd'>Password:</label>
        <input type='password' id='pswd' value={pswd} onChange={handlepswd} required/>
        <button  className='formSign' type='submit'>{islogin ? 'Login' : 'signup'}</button>
      </form>

      <p className='newAccount'>{islogin ? 'need to create a account?' : 'Already have a account'}</p>
      <button className='formSubmit' onClick={handleClick}>{islogin?'signup':'login'}</button>
    </div>
  )
}

export default LoginSignup
