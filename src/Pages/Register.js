import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {

      if (!username || !password || !email) {
        toast.error('Please fill in all fields.', {
            autoClose: 3000,
            pauseOnHover: true
        });
        setRegistrationMessage('Please fill in all fields.',);
        return;
      }

      const response = await axios.post('http://localhost:8000/user/register', { username, password, email }, {
        headers: {
            "Content-Type": 'application/json',
        }
      });

      toast.success(response.data.message, {
            autoClose: 3000,
            pauseOnHover: true
      });
      setRegistrationMessage(response.data.message);
      navigate('/login');

    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Try again!", {
        autoClose: 3000,
        pauseOnHover: true
      })
      setRegistrationMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className='main-container'>
        <div className='admin-login-container'>
        <h2>Register</h2>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={handleRegister}>Register</button>
        {registrationMessage && <p>{registrationMessage}</p>}
        </div>
    </div>
  );
};

export default Register;
