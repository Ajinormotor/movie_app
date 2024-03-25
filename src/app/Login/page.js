
'use client'


import { useState } from "react"
import "../Login/login.css"

import { FaPlaystation } from "react-icons/fa";





export default function Login(){

  
    const [email,  setEmail] = useState('');
    const [password,  setPassword] = useState('');


 
    const handleLogin = (e) =>{
        e.preventDefault();

        try {
        const user_email =   localStorage.getItem('email' );
        const user_password =   localStorage.getItem('password');


           if(user_email==email && user_password == password){
            window.location.href= '/';

           } else {
            alert('Invalid Credentials')
            console.log.error(error.message)
            window.location.href= '/Login'
           }
           
            
        } catch (error) {
            
        }
    }



    return(
        <section  className="login">
        <div className="login__wrapper">
        <FaPlaystation  size={60} color="red"></FaPlaystation>

        <h1 className="heading__text">Login</h1>

            <form  className="signup__form"   onSubmit={handleLogin}>

    

            <div  className="form__box">
     <label for="email">Email:</label>
      <input type="email"  placeholder="Enter your mail"
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}></input>
            </div>

            <div  className="form__box">
                <label for="text">Password:</label>
                <input type="password"  placeholder="Enter your password"
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}></input>
            </div>


            <div className="signup__btn">
                <button className="signup__button"  type="submit">Login</button>
            </div>

            </form>
        </div>

        </section>
    )
}