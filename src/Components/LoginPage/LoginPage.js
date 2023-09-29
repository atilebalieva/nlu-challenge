import React, {useState} from 'react';
import Logo from '../Logo/Logo';
import "../LoginPage/loginPage.css";
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    if(username === "admin" && password === "admin"){
      // navigate("/login/login")
      console.log("works");
    }else {
      alert("Wrong username or password")
    }
    
  }


  return (
    <div className="login-page_container container main_content">
      <div className="login-page_logo">
         <Logo/>
         <p>Professionals Who Achieve</p>
         <p>People Who Inspire.</p>
      </div>
      <div className="login-page_form">
          <form onSubmit={handleSubmit}>
             <input type="text" name="login" placeholder="Username" required onChange={(e)=>{setUsername(e.target.value)}}/>
             <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
             <button type="submit">Log In</button>
          </form>
         <p>Forgot password?</p>
         <button type="button">Create an Account</button>
      </div>
        </div>
  )
}

export default LoginPage;