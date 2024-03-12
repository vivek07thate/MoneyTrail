import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: '',
  });
  const [spinner, setSpinner] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email } = inputData;

    if (email === '') {
      toast.error('Enter Your Email!');
    } else if (!email.includes('@') || !email.includes('.com')) {
      toast.error('Enter a Valid Email!');
    } else {
      setSpinner(true);

      try {
        const response = await axios.post('http://localhost:4000/api/auth/login', inputData);
        if (response.status === 200) {
          setSpinner(false);
          localStorage.setItem('email', email);
          navigate('/user/otp', { state: email });
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          toast.error('User Does Not Exist in our Database');
        } else {
          toast.error('An error occurred during login');
        }
        setSpinner(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-90">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome Back, Log In</h1>
          <p className="text-center">Hi, we are glad you are back. Please login.</p>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter Your Email Address"
                onChange={handleChange}
              />
            </div>
            <button
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSubmit}
            >
              {spinner ? <Spinner animation="border" className="mr-2" /> : null}
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don't have an account?{' '}
            <NavLink to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
