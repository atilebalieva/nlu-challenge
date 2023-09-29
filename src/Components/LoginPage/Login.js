import React, { useState } from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import '../LoginPage/login.css';
import '../CompanyInfo/companyInfo.css';
import '../../media.css';


function Login() {
  const navigate = useNavigate();
  
  return (
    <div onClick={()=> {navigate('/login')}}>
      <ul className="company-info_schedule">
        <li><FaUserAlt className="icon login"/></li>
        <li >Login</li>
      </ul>
    </div>
  )
}

export default Login;