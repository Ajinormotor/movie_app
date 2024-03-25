'use client'

import "../Signup/signup.css"

import { FaPlaystation } from "react-icons/fa";

import { useEffect, useState } from "react"

export default function Signup(){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleSignUp = (e) =>{
    e.preventDefault();

    try {
    const user_fullName =  localStorage.setItem('fullName', fullName);
    const user_email =   localStorage.setItem('email', email);
    const user_password = localStorage.setItem('password', password);

    window.location.href='/Login';
    
        
    } catch (error) {
console.log("Inavlid Signup Details") 
    }
}    

useEffect(()=>{
    const retrieveEmail = localStorage.getItem('email');
    setEmail(retrieveEmail);
},[])

    return(
   
   <section  className="signup">
   
        <div className="signup__wrapper">

        <FaPlaystation  size={60} color="red"></FaPlaystation>

        <h1 className="heading__text">SignUp</h1>

      <form  className="signup__form"   onSubmit={handleSignUp}>

     <div  className="form__box">
      <label for="text">Name:</label>
     <input type="name" required placeholder="Enter your full name"
        value={fullName}
 onChange={(e)=>setFullName(e.target.value)}></input>
        </div>

          

            <div  className="form__box">
     <label for="email">Email:</label>
      <input type="email" required placeholder="Enter your mail"
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}></input>
            </div>

            <div  className="form__box">
                <label for="text">Password:</label>
                <input type="password" required placeholder="Enter your password"
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}></input>
            </div>


            <div className="signup__btn">
                <button className="signup__button"  type="submit">Sign Up</button>
            </div>

            </form>
        </div>

        </section>
        
    )
}