import React, { useState } from 'react';
import {FaUserAlt} from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';
import '../LoginPage/login.css';
import '../CompanyInfo/companyInfo.css';
import '../../media.css';


function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  function handleClick(){
    if(isLogin){
      navigate('/login');
      setIsLogin(false);
    }else {
      navigate('/');
      setIsLogin(true);
    }
  }
  return (
    <div className = "login-wrapper" onClick={handleClick}>
      <ul className="company-info_schedule">
        <li><FaUserAlt className="icon login"/></li>
        {isLogin ? <li>Login</li> : <li>Logout</li>}
      </ul>
    </div>
  )
}

export default Login;