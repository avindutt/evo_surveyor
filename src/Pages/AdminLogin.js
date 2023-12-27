import React, { useState } from 'react';
import '../Styles/login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://evo-survey-website.onrender.com/user/create-session', {
        email, 
        password
      });

      console.log('*********', response)

      toast.success('Login Successful', {
        autoClose: 3000,
        pauseOnHover: true
      });

      navigate('/view-data');
      
    } catch (error) {
      toast.error('Login Failed, Try Again!', {
        autoClose: 3000,
        pauseOnHover: true
      })
      console.log('Login failed', error);
    }
  };

  return (
  <div className='main-container'> 
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default AdminLogin;
