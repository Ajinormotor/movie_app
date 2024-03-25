
'use client'


import { useState } from "react"
import { FaPlaystation } from "react-icons/fa";




export default function Home() {


  const [loading, setLoading]  = useState(false);
const [email, setEmail]  = useState('')

const handleSubmit=(e) =>{
 e.preventDefault();


 setLoading(true);

 try {
setLoading(true)
  const user_email = localStorage.setItem('email', email);
  window.location.href='/Signup';

 } catch (error) {
  console.log("There is an error")
 }
}


  return <>


<header className="background">

<div className="header__wrapper">




<div className="header__heading">

<div  className="logo">
 <FaPlaystation  size={60} color="red"></FaPlaystation>
    <h1>MovieApp</h1>
  </div>

  <div className="side_header">
    <button className="header__btn">Login</button>
  </div>



</div>


<div className="hero"  id="hero">

<div className="hero__wrapper">

<h1>
Unlimited movies, TV shows, and more</h1>
<p>Watch anywhere. Cancel anytime.</p>

<p>Ready to watch? Enter your email 
to create or restart your membership.</p>

<div  className="hero__bottom" >
  <form onSubmit={handleSubmit}>

  <input type='email'
  required
     placeholder="example@gmail.com" 
     loading={false}
     value={email}  
     onChange={(e)=>setEmail(e.target.value)}
  ></input>

 <button className="hero__btn"  type="submit"  value="submit">Get Started</button>
   
  </form>
</div>



</div>
</div>


</div>

</header>




  </>
}
