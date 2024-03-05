import React, { useState, useEffect } from 'react';
import '../Greendzine/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Greendzine/Asserts/Group 3.png';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check credentials (replace with your authentication logic)
    if (email === 'Greendzine@gmail.com' && password === '123456') {
      // Redirect to the home page
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    alert(
      `Email: Greendzine@gmail.com\n` +
      `Password:123456\n\n` +
      `Use these credentials to navigate to the Home page`
    );
  }, []);



  return (
    <div className='loginPage' >
      <img src={Logo} alt='' />
      <h3> We are Electric </h3>
      <form className='mt-4' >
        <input
          type="email"
          value={email}
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>

  );
};

export default Login;
